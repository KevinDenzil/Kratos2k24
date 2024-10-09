import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartStatus = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [nestedJson, setNestedJson] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [submittedItems, setSubmittedItems] = useState({});


  useEffect(() => {
    console.log('Cart updated:', cart);
    console.log('Nested JSON updated:', nestedJson);
    console.log('Total Price updated:', totalPrice);
  }, [cart, nestedJson, totalPrice]);

  const addToCart = (event) => {
    setCart((prevCart) => {
      if (!prevCart.some(item => item.name === event.name)) {
        const updatedCart = [...prevCart, {
          name: event.name,
          price: parseInt(event.price) || 0,  // Change here
          // Add any other necessary event properties
        }];
        setTotalPrice((prev) => prev + (parseInt(event.price) || 0));  // Change here
        return updatedCart;
      }
      return prevCart;
    });
  };

  const removeFromCart = (event) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== event.name));
    setNestedJson((prev) => {
      const { [event.name]: removed, ...rest } = prev;
      return rest;
    });
    setTotalPrice((prev) => prev - (parseInt(event.price) || 0));  // Change here
  };

  const updateCartItem = (eventName, formData) => {
    setNestedJson((prev) => {
      const updatedJson = {
        ...prev,
        [eventName]: formData
      };
      return updatedJson;
    });
    setSubmittedItems((prev) => ({
      ...prev,
      [eventName]: true
    }));
    setTotalPrice(() => {
      const newTotal = cart.reduce((total, item) => total + parseInt(item.price), 0);
      return newTotal;
    });
  };
  const areAllFormsFilled = () => {
    return cart.length > 0 && Object.keys(nestedJson).length === cart.length;
  };

  const clearCart = () => {
    setNestedJson({});
    setSubmittedItems({});
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateCartItem,
      nestedJson,
      totalPrice,
      setNestedJson,
      setTotalPrice,
      areAllFormsFilled,
      setSubmittedItems,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartStatus;