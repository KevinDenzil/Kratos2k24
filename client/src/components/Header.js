import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";
import kratosLogo from '../assets/kratos24.png';
import { CartContext } from '../CartStatus';
import CartPopup from './CartPopup';

function Header() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [active, setActive] = useState("");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navToggle = () => {
    setActive(active === "" ? "nav_active" : "");
    setToggleIcon(toggleIcon === "nav_toggler" ? "nav_toggler toggle" : "nav_toggler");
  };

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

      {isPopupOpen && (
        <CartPopup
          items={cart}
          onClose={handleClosePopup}
          onCheckout={handleCheckout}
        />
      )}
    </nav>
  );
}

export default Header;  

// const Header = () => {
//   const { cart } = useContext(CartContext);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
  
//   // const toggleDropdown = () => {
//   //   setDropdownOpen(!dropdownOpen);
//   // };

//   const handleCartClick = () => {
//     setIsPopupOpen(true); 
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);  
//   };

//   const handleCheckout = () => {
//     console.log('Proceeding to checkout...');
//     setIsPopupOpen(false);  
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-left">
//           <Link to="/">
//             <img src={kratosLogo} alt="Kratos 24 Logo" className="logo" />
//             {/* <LogoVideo /> */}
//             {/* <LogoGif /> */}
//             Kratos
//           </Link>
//         </div>
//         <div className="navbar-center">
//           <Link to="/events/Pre Events" className="nav-link">Pre-Events</Link>
//           <Link to="/events/Technical Events" className="nav-link">Technical</Link>
//           <Link to="/events/Non-Technical Events" className="nav-link">Non-Technical</Link>
//           <Link to="/events/Playground Events" className="nav-link">Playground</Link>
//         </div>
//         <div className="navbar-right">
//           <button className="cart-btn" onClick={handleCartClick}>
//             Cart ({cart?.length || 0})
//           </button>
          
//         </div>
//       </nav>

//       {isPopupOpen && (
//         <CartPopup
//           items={cart}
//           onClose={handleClosePopup}
//           onCheckout={handleCheckout}
//         />
//       )}
//     </>
//   );
// };

// export default Header;


