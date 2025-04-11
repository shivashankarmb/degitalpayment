import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    salary: '',
    employment: '',
    goals: '',
    loans: '',
    investments: ''
  });

  const [savedUser, setSavedUser] = useState(null);

  // Auto-load the profile if email is filled
  useEffect(() => {
    if (user.email) {
      axios.get(`http://localhost:8080/profile/${user.email}`)
        .then((response) => {
          if (response.data) {
            setUser(response.data);
            setSavedUser(response.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [user.email]); // Fetch when email changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/profile', user);
      alert("Profile Updated Successfully!");
      setSavedUser(user);
    } catch (error) {
      alert("Failed to update profile.");
      console.error("Axios error:", error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Edit Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>Email (used to load/save profile):
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </label>

        <label>Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>

        <label>Phone:
          <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        </label>

        <label>Date of Birth:
          <input type="date" name="dob" value={user.dob} onChange={handleChange} />
        </label>

        <label>Monthly Salary:
          <input type="text" name="salary" value={user.salary} onChange={handleChange} />
        </label>

        <label>Employment:
          <input type="text" name="employment" value={user.employment} onChange={handleChange} />
        </label>

        <label>Financial Goals:
          <input type="text" name="goals" value={user.goals} onChange={handleChange} />
        </label>

        <label>Existing Loans:
          <input type="text" name="loans" value={user.loans} onChange={handleChange} />
        </label>

        <label>Investments:
          <input type="text" name="investments" value={user.investments} onChange={handleChange} />
        </label>

        <button type="submit">Save Changes</button>
      </form>

      {savedUser && (
        <div className="saved-profile">
          <h3>Saved Profile</h3>
          <p><strong>Name:</strong> {savedUser.name}</p>
          <p><strong>Email:</strong> {savedUser.email}</p>
          <p><strong>Phone:</strong> {savedUser.phone}</p>
          <p><strong>DOB:</strong> {savedUser.dob}</p>
          <p><strong>Salary:</strong> {savedUser.salary}</p>
          <p><strong>Employment:</strong> {savedUser.employment}</p>
          <p><strong>Goals:</strong> {savedUser.goals}</p>
          <p><strong>Loans:</strong> {savedUser.loans}</p>
          <p><strong>Investments:</strong> {savedUser.investments}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
