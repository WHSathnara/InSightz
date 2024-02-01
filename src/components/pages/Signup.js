// Signup.js

import React, { useState } from 'react';

import './Signup.css';

const Signup = () => {


  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSignup = () => {
  //   // Perform signup logic here
  //   // You can validate the form fields and make an API call to create a new user

  //   // For the sake of the example, let's assume the signup is successful
  //   // and redirect the user to the home page
  //   history.push('/');
  // };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

       <label htmlFor="rePassword">Re-enter Password:</label>
        <input
          type="password"
          id="rePassword"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleInputChange}
        />

        <button type="button" >
          Sign Up
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
