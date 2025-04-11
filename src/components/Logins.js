import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import loginBg from '../assets/LoginBG.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:8080/find');
      const users = res.data;
      const user = users.find(
        u => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        alert("Login successful!");
        navigate('/chatbot'); // 🔥 Redirect to chatbot
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Server error.");
    }
  };

  return (
    <div 
      className="login-background" 
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          /><br />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          /><br />

          <button type="submit">Login</button>
        </form>

        <div className="login-links">
          <button
            className="forgot-password"
            onClick={() => navigate('/reset-password')}
          >
            Forgot password?
          </button>

          <button className="back-to-register" onClick={() => navigate('/register')}>
            Back to Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
