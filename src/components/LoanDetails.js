import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoanDetails.css';

function LoanDetails() {
  const navigate = useNavigate();

  const loans = [
    { bank: "SBI", scheme: "SBI Scholar Loan", rate: "8.15", tenure: "15 years" },
    { bank: "PNB", scheme: "PNB Pratibha", rate: "8.45", tenure: "15 years" },
    { bank: "Canara Bank", scheme: "Vidya Turant", rate: "6.60", tenure: "15 years" },
    { bank: "Bank of Baroda", scheme: "BOB Edu Loan", rate: "8.50", tenure: "15 years" },
    { bank: "Union Bank", scheme: "Union Edu Loan", rate: "8.10", tenure: "7 years" },
    { bank: "ICICI Bank", scheme: "ICICI Edu Loan", rate: "9.50", tenure: "12 years" },
    { bank: "Axis Bank", scheme: "Axis (>7.5L)", rate: "13.70", tenure: "20 years" },
    { bank: "HDFC Bank", scheme: "HDFC Edu Loan", rate: "9.00", tenure: "14 years" },
  ];

  const handleApply = (loan) => {
    navigate('/apply-loan', { state: loan });
  };

  return (
    <div className="loan-details-container">
      <h2>Education Loan Details</h2>
      <table className="loan-details-table">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Loan Scheme</th>
            <th>Interest Rate (%)</th>
            <th>Tenure (Years)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan, index) => (
            <tr key={index}>
              <td>{loan.bank}</td>
              <td>{loan.scheme}</td>
              <td>{loan.rate}</td>
              <td>{loan.tenure}</td>
              <td>
                <button className="apply-btn" onClick={() => handleApply(loan)}>
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanDetails;
