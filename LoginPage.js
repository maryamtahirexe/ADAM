import React from "react";
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import figmaIcon from "./hello.png"; // Update with the correct path to your image
import smallImage from "./logo.png"; // Path to the small image

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-page">
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
        <h2>Login Account</h2>
        <form>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="links">
            <button type="button" className="forgot-password-link" onClick={() => navigate('/forgot-password')}>Forget Password?</button>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don't have an account?{" "}
          <button type="button" className="signup-link" onClick={() => navigate('/')}>Create New</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
