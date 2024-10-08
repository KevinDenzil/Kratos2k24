import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Forms from '../components/Forms.js';
import { CartContext } from '../context/CartStatus.js';
import { eventData } from '../EventDetails.js';
import { FaTrash, FaEdit } from 'react-icons/fa';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItem, nestedJson, totalPrice, areAllFormsFilled  } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    let foundEvent = null;
    for (const category in eventData) {
      if (eventData[category][item.name]) {
        foundEvent = {
          ...eventData[category][item.name],
          name: item.name
        };
        break;
      }
    }
    
    if (foundEvent) {
      setSelectedEvent(foundEvent);
      setShowForm(true);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { nestedJson, totalPrice } });
  };
  useEffect(() => {
    console.log('Cart contents:', cart);
  }, [cart]);

  

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Your Cart</h2>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/')} className="continue-shopping">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">₹{item.price}</p>
                    {nestedJson[item.name] && (
                      <p className="form-status">Form filled</p>
                    )}
                  </div>
                  <div className="item-actions">
                    <button 
                      onClick={() => handleItemClick(item)} 
                      className="action-button edit"
                    >
                      <FaEdit /> {nestedJson[item.name] ? 'Edit Form' : 'Fill Form'}
                    </button>
                    <button 
                      onClick={() => handleRemove(item)} 
                      className="action-button remove"
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="total-price">
                <span>Total:</span>
                <p className="item-price">₹{totalPrice}</p>
              </div>
              <button 
                onClick={handleCheckout} 
                className="checkout-button"
                disabled={!areAllFormsFilled()}
              >
                Proceed to Checkout
              </button>
              {!areAllFormsFilled() && (
                <p className="warning-message">Please fill forms for all items before checkout</p>
              )}
            </div>
          </>
        )}
      </div>

      {showForm && selectedEvent && (
        <div className="form-overlay">
          <Forms 
            selectedEvent={selectedEvent} 
            onClose={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CartPage;