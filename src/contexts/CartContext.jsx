import React, { createContext, useState } from 'react';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  // };

  // const removeFromCart = (itemId) => {
  //   const updatedCart = cart.filter((item) => item.id !== itemId);
  //   setCart(updatedCart);
  // };

// }, cart, addToCart, removeFromCart 

  const [items, setItems] =  useState([])

  const addToCard = (name, price) => {
    setItems(prevState => [...prevState, {name, price}])
  }

  return (
    <CartContext.Provider value={{ items,  addToCard}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
