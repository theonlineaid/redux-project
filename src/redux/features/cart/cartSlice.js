// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : { items: [] };
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      }

      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const removedItem = state.items.find((item) => item.id === itemIdToRemove);

      if (removedItem) {
        state.items = state.items.filter((item) => item.id !== itemIdToRemove);
      }

      saveCartToLocalStorage(state);
    },
    incrementQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemToIncrement = state.items.find((item) => item.id === itemId);

      if (itemToIncrement) {
        itemToIncrement.quantity += quantity;
        itemToIncrement.totalPrice = itemToIncrement.quantity * itemToIncrement.price;

        saveCartToLocalStorage(state);
      }
    },
    decrementQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemToDecrement = state.items.find((item) => item.id === itemId);

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity += quantity;
        itemToDecrement.totalPrice = itemToDecrement.quantity * itemToDecrement.price;

        saveCartToLocalStorage(state);
      }
    },
    clearCart: (state) => {
      state.items = [];

      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
