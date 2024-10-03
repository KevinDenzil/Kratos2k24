import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import kratosLogo from '../assets/kratos24.png';
import { CartContext } from '../CartStatus';
import CartPopup from './CartPopup';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  const handleCartClick = () => {
    setIsPopupOpen(true); 
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);  
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
    setIsPopupOpen(false);  
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={kratosLogo} alt="Kratos 24 Logo" className="logo" />
            Kratos 2k24
          </Link>
        </div>
        <div className="navbar-center">
          <Link to="/events/Pre Events" className="nav-link">Pre-Events</Link>
          <Link to="/events/Technical Events" className="nav-link">Technical</Link>
          <Link to="/events/Non-Technical Events" className="nav-link">Non-Technical</Link>
          <Link to="/events/Playground Events" className="nav-link">Playground</Link>
        </div>
        <div className="navbar-right">
          <button className="cart-btn" onClick={handleCartClick}>
            Cart ({cart?.length || 0})
          </button>
          
        </div>
      </nav>

      {isPopupOpen && (
        <CartPopup
          items={cart}
          onClose={handleClosePopup}
          onCheckout={handleCheckout}
        />
      )}
    </>
  );
};

export default Header;
