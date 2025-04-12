import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`settings-container ${theme}-theme`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <h2 className="settings-title">Settings</h2>

      {/* Profile Section */}
      <div className="settings-section">
        <h3>Profile Settings</h3>
        <input type="text" placeholder="Full Name" className="settings-input" />
        <input type="email" placeholder="Email" className="settings-input" />
        <button className="settings-btn">Update Profile</button>
      </div>

      {/* Security Section */}
      <div className="settings-section">
        <h3>Security Settings</h3>
        <input type="password" placeholder="New Password" className="settings-input" />
        <input type="password" placeholder="Confirm Password" className="settings-input" />
        <button className="settings-btn">Update Password</button>
      </div>

      {/* Notification Preferences */}
      <div className="settings-section">
        <h3>Notification Preferences</h3>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
          />
          SMS Notifications
        </label>
      </div>

      {/* Danger Zone */}
      <div className="settings-section danger-zone">
        <h3>Danger Zone</h3>
        <button className="delete-account-btn">Delete My Account</button>
      </div>
    </div>
  );
}

export default Settings;
