import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartStatus';
import './Checkout.css';

const CheckOut = () => {
  const navigate = useNavigate();
  const { nestedJson, totalPrice, submittedItems, setNestedJson, setSubmittedItems } = useContext(CartContext);
  const [transactionId, setTransactionId] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [allFormsSubmitted, setAllFormsSubmitted] = useState(false);

  const canSubmit = () => {
    return (
      transactionId.trim() !== '' &&  // Check if transaction ID is not empty
      screenshot !== null &&          // Check if screenshot is uploaded
      Object.keys(nestedJson || {}).length > 0  // Check if there are items in the cart
    );
  };

  useEffect(() => {
    // Check if nestedJson is defined before accessing its keys
    if (nestedJson && submittedItems) {
      const areAllSubmitted = Object.keys(nestedJson).every(key => submittedItems[key]);
      setAllFormsSubmitted(areAllSubmitted);
    } else {
      setAllFormsSubmitted(false);
    }
  }, [nestedJson, submittedItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    // Check if nestedJson is defined before using it
    if (!nestedJson) {
      alert('Your cart is empty. Please add items before checking out.');
      setIsSubmitting(false);
      return;
    }

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
        // Reset the cart context
        setNestedJson({});
        setSubmittedItems({});
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setScreenshot(file);
      setFileName(file.name);
    } else {
      alert('Please select an image file');
      e.target.value = '';
      setScreenshot(null);
      setFileName('');
    }
  };

  // If cart is empty, show a message
  if (!nestedJson || Object.keys(nestedJson).length === 0) {
    return (
      <div className="checkout-page">
        <h2 className="checkout-total">Your cart is empty</h2>
        <p>Please add items to your cart before proceeding to checkout.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2 className="checkout-total">Checkout</h2>
      <p className="checkout-total">Total Amount: ₹{totalPrice}</p>
      
      <div className="payment-info">
        <div className="qr-code">
          <img src={`${process.env.PUBLIC_URL}/upiqr.jpg`} alt="UPI QR Code" className="qr-image" />
        </div>
        
        <div className="bank-details">
          <h3>Bank Account Details</h3>
          <div className="detail-row">
            <span className="detail-label">Account Holder:</span>
            <span className="detail-value">K ROHITH KANNA</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Account Number:</span>
            <span className="detail-value">50100548409211</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">IFSC:</span>
            <span className="detail-value">HDFC0000444</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Branch:</span>
            <span className="detail-value">VELACHERY</span>
          </div>
        </div>
      </div>

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
          <label htmlFor="screenshot">Payment Screenshot:</label>
          <input
            type="file"
            id="screenshot"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button className="file-input-button" type="button" onClick={() => document.getElementById('screenshot').click()}>
            Upload Screenshot
          </button>
          {fileName && <p className="file-name">{fileName}</p>}
        </div>
        <button 
          className="submit-button" 
          type="submit" 
          disabled={!canSubmit() || isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Submit Order'}
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
