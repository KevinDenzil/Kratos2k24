import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartStatus';
import { isMobile } from 'react-device-detect';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useContext(CartContext);
  const [active, setActive] = useState("");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navRef = useRef(null);

  const navToggle = () => {
    setActive(active === "" ? "nav_active" : "");
    setToggleIcon(toggleIcon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler");
  };

  const handleCartClick = () => {
    navigate('/cart');
    setActive("");
    setToggleIcon("nav_toggler");
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && active !== "") {
        setActive("");
        setToggleIcon("nav_toggler");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  return (
    <nav className={isHomePage ? 'home-header' : 'normal-header'} ref={navRef}>
      <div className="logo-container" onClick={handleLogoClick}>
        {(!isMobile || !isHomePage) && (
          <img src={`${process.env.PUBLIC_URL}/kratos24.png`} alt="Kratos 24 Logo" className="logo" />
        )}
      </div>
      
      <ul className={`nav_menu ${active}`}>
        <li className="nav_item">
          <Link to="/events/Pre Events" className={`nav_link ${location.pathname === '/events/Pre Events' ? 'active' : ''}`}>Pre-Events</Link>
        </li>
        <li className="nav_item">
          <Link to="/events/Technical Events" className={`nav_link ${location.pathname === '/events/Technical Events' ? 'active' : ''}`}>Technical</Link>
        </li>
        <li className="nav_item">
          <Link to="/events/Non-Technical Events" className={`nav_link ${location.pathname === '/events/Non-Technical Events' ? 'active' : ''}`}>Non-Technical</Link>
        </li>
        <li className="nav_item">
          <Link to="/events/Playground Events" className={`nav_link ${location.pathname === '/events/Playground Events' ? 'active' : ''}`}>Playground</Link>
        </li>
        <li className="nav_item" onClick={handleCartClick}>
          <span className="nav_link">
            <FaShoppingCart className="cart-icon" />
             {cart?.length || 0}
          </span>
        </li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;