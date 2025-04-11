import React from 'react';
import { useLocation } from 'react-router-dom';

function ApplyLoan() {
  const location = useLocation();
  const loan = location.state;

  if (!loan) {
    return <h2>No loan selected</h2>;
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#7c3aed' }}>Loan Application - {loan.bank}</h2>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Bank:</strong> {loan.bank}</p>
        <p><strong>Loan Scheme:</strong> {loan.scheme}</p>
        <p><strong>Interest Rate:</strong> {loan.rate}</p>
        <p><strong>Tenure:</strong> {loan.tenure}</p>
      </div>

      <button style={{
        marginTop: '30px',
        padding: '10px 20px',
        backgroundColor: '#7c3aed',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Proceed to Apply
      </button>
    </div>
  );
}

export default ApplyLoan;