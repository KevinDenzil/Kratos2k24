import React, { useState } from 'react';
import './Header.css';
import staticImage from '../assets/kratos24.png'; // Import the static image
import animatedGif from '../assets/kratoslogo.gif'; // Import the animated GIF

const LogoGif = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="logo-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? animatedGif : staticImage}
        alt="Logo"
        className="logo-gif"
      />
    </div>
  );
};

export default LogoGif;
