import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="background-animation">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* Main content box */}
      <div className="info-box">
        <h1>Welcome to Smart Financial Assistant</h1>
        <p>
          This app is your smart guide to explore financial and loan services. With multilingual
          support, chatbot guidance, and voice/text interaction, navigating your loan journey
          is now easier than ever!
        </p>

        <div className="button-group">
          <button onClick={() => navigate('/login')} className="btn-primary">
            Login
            <span className="btn-hover-effect"></span>
          </button>
          <button onClick={() => navigate('/register')} className="btn-secondary">
            Register
            <span className="btn-hover-effect"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
