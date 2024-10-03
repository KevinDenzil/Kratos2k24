import React, { createContext, useState } from 'react';

// Create a Context for the cart
export const CartContext = createContext();

const CartStatus = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (event) => {
    setCart((prevCart) => {
      // Ensure no duplicates
      if (!prevCart.includes(event)) {
        return [...prevCart, event];
      }
      return prevCart;
    });
  };

  const removeFromCart = (event) => {
    setCart((prevCart) => prevCart.filter((item) => item !== event));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartStatus;
