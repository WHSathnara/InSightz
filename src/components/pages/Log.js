import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Log.css';

const Login = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Perform authentication logic here (e.g., check username and password)
    if (formData.username === 'demo' && formData.password === 'password') {
      // Redirect to home page on successful login
      history.push('/');
    } else {
      // Display error message on failed login
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
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

        <button type="button" onClick={handleLogin}>
          Log In
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
