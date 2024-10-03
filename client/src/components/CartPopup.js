import React from 'react';
import './CartPopup.css';

const CartPopup = ({ items, onClose, onCheckout }) => {
  return (
    <div className="cart-popup-overlay" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Your Cart</h3>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPopup;
