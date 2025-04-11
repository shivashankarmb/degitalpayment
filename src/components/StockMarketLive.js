import React, { useState } from 'react';
import axios from 'axios';
import './Loan.css';

function Loan() {
  const [salary, setSalary] = useState('');
  const [stocks, setStocks] = useState([]);
  const [loadingStocks, setLoadingStocks] = useState(false);

  const API_KEY = 'cvslkchr01qhup0rimngcvslkchr01qhup0rimo0'; // Updated API key
  const symbols = ['TCS.NS', 'INFY.NS', 'RELIANCE.NS', 'HDFCBANK.NS', 'WIPRO.NS'];

  const fetchStockSuggestions = async (budget) => {
    setLoadingStocks(true);
    const suggestions = [];

    for (const symbol of symbols) {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );

        const quote = response.data["Global Quote"];
        const price = parseFloat(quote["05. price"]);

        if (price && price <= parseFloat(budget)) {
          suggestions.push({ symbol, price });
        }
      } catch (err) {
        console.error(`Error fetching stock data for ${symbol}:`, err.message);
      }
    }

    setStocks(suggestions);
    setLoadingStocks(false);
  };

  const handleSearch = () => {
    const budget = parseFloat(salary);
    if (!isNaN(budget)) {
      fetchStockSuggestions(budget);
    } else {
      setStocks([]);
    }
  };

  return (
    <div className="loan-wrapper">
      <h2 className="text-2xl font-bold mb-4">📊 Find Real-Time Stocks Within Your Budget</h2>

      <div className="search-section">
        <input
          type="number"
          placeholder="Enter your budget (₹)"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="p-2 border rounded mr-2"
        />
        <button className="search-btn bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loadingStocks && <p className="mt-4">🔄 Fetching stock data...</p>}

      {!loadingStocks && stocks.length > 0 && (
        <div className="stock-suggestions mt-6">
          <h3 className="text-lg font-semibold mb-2">📈 Stocks You Can Buy Under ₹{salary}</h3>
          <ul className="list-disc pl-5">
            {stocks.map((stock) => (
              <li key={stock.symbol} className="mb-1">
                {stock.symbol} - ₹{stock.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!loadingStocks && stocks.length === 0 && salary && (
        <p className="mt-4 text-gray-600">No stocks found in this budget.</p>
      )}
    </div>
  );
}

export default Loan;
