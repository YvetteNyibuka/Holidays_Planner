import React, { useState } from 'react';
import axios from 'axios';
// import '../styles/Form.css';

const NewUserForm = ({ closeModal }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup", userData);
      alert('User created successfully!');
      closeModal(); 
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again later.');
    }
  };
  

  return (
    <div className="form-container">
      <h2>Create New User</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NewUserForm;
