import React, { useState } from "react";
import axios from "axios";

const StockSuggestions = () => {
  const [amount, setAmount] = useState("");
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "cvslkchr01qhup0rimngcvslkchr01qhup0rimo0"; // Your Finnhub API Key
  const symbols = ["TCS.NS", "INFY.NS", "RELIANCE.NS", "HDFCBANK.NS", "WIPRO.NS"];

  const fetchStockPrices = async () => {
    setLoading(true);
    const suggestions = [];

    for (const symbol of symbols) {
      try {
        const response = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
        );

        const price = response.data.c; // current price
        if (price && price <= parseFloat(amount)) {
          suggestions.push({ symbol, price });
        }
      } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error.message);
      }
    }

    setStocks(suggestions);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Stock Suggestions by Budget</h2>
      <input
        type="number"
        placeholder="Enter your budget (e.g. 1000)"
        className="border p-2 mr-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={fetchStockPrices}
      >
        Get Suggestions
      </button>

      {loading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <ul className="mt-4">
          {stocks.length > 0 ? (
            stocks.map((stock) => (
              <li key={stock.symbol} className="mb-2">
                {stock.symbol} - ₹{stock.price.toFixed(2)}
              </li>
            ))
          ) : (
            <p className="mt-4 text-gray-500">No stocks found in this budget</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default StockSuggestions;
