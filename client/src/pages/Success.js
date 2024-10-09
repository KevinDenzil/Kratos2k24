import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './Success.css';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-content">
        <h1 className="success-title">Success!</h1>
        <p className="success-subtitle">Your registration has been recorded!</p>
        <button className="home-button" onClick={() => navigate('/')}>
          Return to Home <FaHome className="home-icon" />
        </button>
      </div>
    </div>
  );
};

export default Success;