import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loan.css';

function Loan() {
  const [amount, setAmount] = useState('');
  const [matchedLoans, setMatchedLoans] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const allLoans = [
    { type: "Personal Loan", interest: 10.5, maxAmount: "₹5 Lakhs", minSalary: 10000 },
    { type: "Education Loan", interest: 8.0, maxAmount: "₹10 Lakhs", minSalary: 5000 },
    { type: "Home Loan", interest: 6.9, maxAmount: "₹50 Lakhs", minSalary: 20000 },
    { type: "Vehicle Loan", interest: 9.5, maxAmount: "₹15 Lakhs", minSalary: 8000 },
  ];

  const handleSearch = () => {
    const input = parseFloat(amount);
    setHasSearched(true);
    if (!isNaN(input)) {
      const filtered = allLoans.filter(loan => input >= loan.minSalary);
      setMatchedLoans(filtered);
    } else {
      setMatchedLoans([]);
    }
  };

  const handleApply = (loan) => {
    navigate(`/loan/${encodeURIComponent(loan.type)}`, { state: loan });
  };

  return (
    <div className="loan-wrapper">
      <h2 className="loan-title">Loan Recommendation</h2>

      <div className="search-section">
        <input
          type="number"
          placeholder="Enter your salary (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-box"
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {hasSearched && (
        <>
          <p className="entered-amount">You entered: ₹{amount}</p>

          {matchedLoans.length > 0 ? (
            <div className="loan-cards">
              {matchedLoans.map((loan, index) => (
                <div key={index} className="loan-card">
                  <h3>{loan.type}</h3>
                  <p>Interest Rate: {loan.interest}%</p>
                  <p>Max Amount: {loan.maxAmount}</p>
                  <p>Min Salary Required: ₹{loan.minSalary}</p>
                  <button className="apply-btn" onClick={() => handleApply(loan)}>
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results">No matching loans found for ₹{amount}</p>
          )}
        </>
      )}
    </div>
  );
}

export default Loan;
