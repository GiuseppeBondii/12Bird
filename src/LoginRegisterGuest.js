import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegisterGuest.css';

const LoginRegisterGuest = () => {
  const navigate = useNavigate();
  
  const handleGuestClick = () => {
    navigate('/color-sort');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          Welcome to Color Sort
        </h2>
        
        <button
          className="auth-button"
          disabled
        >
          Login
        </button>

        <button
          className="auth-button"
          disabled
        >
          Register
        </button>

        <button
          onClick={handleGuestClick}
          className="auth-button guest"
        >
          Continue as Guest
        </button>
        
        <p className="auth-subtitle">
          Experience the app instantly as a guest
        </p>
      </div>
    </div>
  );
};

export default LoginRegisterGuest;