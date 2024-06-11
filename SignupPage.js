import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./SignupPage.css";
import figmaIcon from "./hello.png"; // Update with the correct path to your image
import smallImage from "./logo.png"; // Path to the small image

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail()) {
      // Valid email, proceed with account creation
      console.log("Email is valid:", email);
      // Here you can proceed with account creation logic
    } else {
      // Invalid email, show error or take appropriate action
      console.log("Invalid email");
    }
  };

  return (
    <div className="signup-page">
      <div className="left-panel">
        <div className="logo">
          <div className="logo-content">
            <img src={smallImage} alt="Small Image" className="small-image" />
            <h1>ADAM</h1>
          </div>
          <p>Your Marketing Partner</p>
        </div>
      </div>
      <div className="right-panel">
        <img src={figmaIcon} alt="Figma Icon" className="main-icon" />
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
        </form>
        <p className="login-text">
          If you already have an account{" "}
          <button type="button" className="login-link" onClick={() => navigate('/login')}>Login</button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
