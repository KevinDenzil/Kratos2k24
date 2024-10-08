import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartStatus';
import './Checkout.css';

const CheckOut = () => {
  const navigate = useNavigate();
  const { nestedJson, totalPrice, submittedItems } = useContext(CartContext);
  const [transactionId, setTransactionId] = useState('');
  const [screenshot, setScreenshot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('nestedJson', JSON.stringify({
      ...nestedJson,
      transactionId: transactionId,
    }));
    formData.append('screenshot', screenshot);
    formData.append('totalPrice', totalPrice.toString());
  
    try {
      const response = await fetch('http://prad18.pythonanywhere.com/event/', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        navigate('/success');
      } else {
        throw new Error('Checkout failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during checkout. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const allFormsSubmitted = Object.keys(nestedJson).every(key => submittedItems[key]);

  return (
    <div className="checkout-page">
      <h2 className="checkout-total">Checkout</h2>
      <p className="checkout-total">Total Price: {totalPrice}</p>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="transactionId">Transaction ID:</label>
          <input
            type="text"
            id="transactionId"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            required
          />
        </div>
        <div className="form-group file-input-wrapper">
          <label htmlFor="screenshot">Screenshot:</label>
          <input
            type="file"
            id="screenshot"
            onChange={(e) => setScreenshot(e.target.files[0])}
            required
          />
          <button className="file-input-button" type="button">Upload Screenshot</button>
        </div>
        <button 
          className="submit-button" 
          type="submit" 
          disabled={!allFormsSubmitted || isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default CheckOut;