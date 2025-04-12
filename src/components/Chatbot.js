import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Chatbot.css';
import bgImage from '../assets/background.jpg';

// Icons
import {
  FaMoneyCheckAlt, FaShieldAlt, FaChartLine,
  FaPhoneAlt, FaCog, FaSignOutAlt, FaUser
} from 'react-icons/fa';

const Chatbot = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const scriptId = 'chatling-embed-script';
    if (!document.getElementById(scriptId)) {
      const configScript = document.createElement('script');
      configScript.innerHTML = `window.chtlConfig = { chatbotId: "8621368938" };`;
      document.body.appendChild(configScript);

      const embedScript = document.createElement('script');
      embedScript.id = scriptId;
      embedScript.src = "https://chatling.ai/js/embed.js";
      embedScript.async = true;
      embedScript.setAttribute("data-id", "8621368938");

      document.body.appendChild(embedScript);
    }
  }, []);

  const handleNavigate = (path, tab) => {
    setActiveTab(tab);
    navigate(path);
  };

  // Handle Logout - Navigate to Register Page
  const handleLogout = () => {
    navigate('/register'); // Redirect to the register page when logged out
  };

  return (
    <div
      className="chatbot-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="sidebar">
        <h3>Menu</h3>
        <button
          className={`loan-button ${activeTab === 'loan' ? 'active' : ''}`}
          onClick={() => handleNavigate('/loan', 'loan')}
        >
          <FaMoneyCheckAlt style={{ marginRight: '8px' }} /> Loan Options
        </button>
        <button
          className={`loan-button ${activeTab === 'insurance' ? 'active' : ''}`}
          onClick={() => handleNavigate('/insurance', 'insurance')}
        >
          <FaShieldAlt style={{ marginRight: '8px' }} /> Insurance
        </button>
        <button
          className={`loan-button ${activeTab === 'investments' ? 'active' : ''}`}
          onClick={() => handleNavigate('/investments', 'investments')}
        >
          <FaChartLine style={{ marginRight: '8px' }} /> Investments
        </button>
        <button
          className={`loan-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavigate('/contact', 'contact')}
        >
          <FaPhoneAlt style={{ marginRight: '8px' }} /> Contact Us
        </button>
        <button
          className={`loan-button ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => handleNavigate('/settings', 'settings')}
        >
          <FaCog style={{ marginRight: '8px' }} /> Settings
        </button>
        <button
          className={`loan-button ${activeTab === 'logout' ? 'active' : ''}`}
          onClick={handleLogout} // Logout now navigates to register
        >
          <FaSignOutAlt style={{ marginRight: '8px' }} /> Logout
        </button>
      </div>

      <div className="chatbot-main">
        <button
          className={`profile-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleNavigate('/profile', 'profile')}
        >
          <FaUser style={{ marginRight: '8px' }} /> Profile
        </button>

        <h2>Smart Financial Chatbot</h2>
        <p>The Chatling AI widget is now embedded. You should see it floating in the corner!</p>
      </div>
    </div>
  );
};

export default Chatbot;
