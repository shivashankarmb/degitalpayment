import React, { useState } from "react";
import axios from "axios";
import './ResetPassword.css';
import { useNavigate } from "react-router-dom"; // ✅ Import this for navigation

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8080/reset-password", {
        email: email,
        password: newPassword,
      });
      setMessage(response.data);
      setIsError(false);
      setEmail("");
      setNewPassword("");

      // ✅ Redirect to login after short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000); // wait 2 seconds

    } catch (error) {
      const errorMsg = error.response?.data || "An error occurred.";
      setMessage(errorMsg);
      setIsError(true);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form className="reset-password-form" onSubmit={handleResetPassword}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            required
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>
        <button type="submit" className="reset-btn">Reset Password</button>
      </form>

      {/* ✅ Message */}
      {message && (
        <div className={`message ${isError ? "error" : "success"}`}>
          {message}
        </div>
      )}

      {/* ✅ Back to Login Button */}
      <button className="back-login-btn" onClick={() => navigate("/login")}>
        Back to Login
      </button>
    </div>
  );
};

export default ResetPassword;
