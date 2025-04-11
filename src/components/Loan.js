import React, { useState } from 'react';
import './Loan.css';

function Loan() {
  const [salary, setSalary] = useState('');
  const [recommendedLoans, setRecommendedLoans] = useState([]);

  const allLoans = [
    { type: "Personal Loan", interest: 10.5, maxAmount: "₹5 Lakhs", minSalary: 10000 },
    { type: "Education Loan", interest: 8.0, maxAmount: "₹10 Lakhs", minSalary: 5000 },
    { type: "Home Loan", interest: 6.9, maxAmount: "₹50 Lakhs", minSalary: 20000 },
    { type: "Vehicle Loan", interest: 9.5, maxAmount: "₹15 Lakhs", minSalary: 8000 },
  ];

  const handleSearch = () => {
    const salaryAmount = parseInt(salary);
    if (!isNaN(salaryAmount)) {
      const filtered = allLoans.filter(loan => salaryAmount >= loan.minSalary);
      setRecommendedLoans(filtered);
    } else {
      setRecommendedLoans([]);
    }
  };

  return (
    <div className="loan-wrapper">
      <h2>Loan Recommendation</h2>

      <div className="search-section">
        <input
          type="number"
          placeholder="Enter your monthly salary (₹)"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>

      {recommendedLoans.length > 0 ? (
        <div className="loan-cards">
          {recommendedLoans.map((loan, index) => (
            <div key={index} className="loan-card">
              <h3>{loan.type}</h3>
              <p>Interest Rate: {loan.interest}%</p>
              <p>Max Amount: {loan.maxAmount}</p>
              <p>Min Salary Required: ₹{loan.minSalary}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">Enter a salary to view recommended loans.</p>
      )}
    </div>
  );
}

export default Loan;
