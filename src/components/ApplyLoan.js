import React from 'react';
import { useLocation } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ApplyLoan() {
  const location = useLocation();
  const loan = location.state;

  if (!loan) {
    return <h2>No loan selected</h2>;
  }

  // Loan data with reduced line length (smaller y-axis values)
  const loanData = {
    labels: [
      '1000', '5000', '10000', '15000', '20000', '25000', '30000', '40000', '50000', '100000'
    ], // Representing loan amounts
    datasets: [
      {
        label: 'Loan Payment Over Time',
        // Adjusting the y-values to make the line shorter
        data: Array.from({ length: 10 }, (_, i) => Math.min(100 + (i * 500), 5000)), // Reducing the maximum value to 5000
        fill: false,
        borderColor: '#7c3aed',
        tension: 0.1,
      },
    ],
  };

  const loanOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Loan Amount (in ₹)',
        },
      },
      y: {
        beginAtZero: true,
        min: 100, // Set minimum y-axis value to 100
        max: 5000, // Set maximum y-axis value to 5000 (shorter line)
        title: {
          display: true,
          text: 'Loan Payment (in ₹)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Loan Payment vs Loan Amount',
      },
    },
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#7c3aed' }}>Loan Application - {loan.bank}</h2>
      <div style={{ marginTop: '20px' }}>
        <p><strong>Bank:</strong> {loan.bank}</p>
        <p><strong>Loan Scheme:</strong> {loan.scheme}</p>
        <p><strong>Interest Rate:</strong> {loan.rate}</p>
        <p><strong>Tenure:</strong> {loan.tenure}</p>
      </div>

      {/* Display the Loan Payment Graph */}
      <div style={{ marginTop: '30px' }}>
        <h3>Loan Payment Overview</h3>
        <Line data={loanData} options={loanOptions} />
      </div>

      <button
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#7c3aed',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Proceed to Apply
      </button>
    </div>
  );
}

export default ApplyLoan;
