import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";
import kratosLogo from '../assets/kratos24.png';
import { CartContext } from '../context/CartStatus';

function Header() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [active, setActive] = useState("");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    setActive(active === "" ? "nav_active" : "");
    setToggleIcon(toggleIcon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler");
  };

  const handleCartClick = () => {
    navigate('/cart'); // Redirect to cart page instead of opening popup
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav>
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={kratosLogo} alt="Kratos 24 Logo" className="logo" />
      </div>
      
      <ul className={`nav_menu ${active}`}>
        <li className="nav_item">
          <Link to="/events/Pre Events" className="nav_link">Pre-Events</Link>
        </li>
        <li className="nav_item">
          <Link to="/events/Technical Events" className="nav_link">Technical</Link>
        </li>
        <li className="nav_item">
          <Link to="/events/Non-Technical Events" className="nav_link">Non-Technical</Link>
        </li>
        <li className="nav_item">
          <Link to="/events/Playground Events" className="nav_link">Playground</Link>
        </li>
      </ul>
      
      <div className="cart-container" onClick={handleCartClick}>
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{cart?.length || 0}</span>
      </div>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;