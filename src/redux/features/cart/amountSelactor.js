// selectors.js

export const selectCartItems = (state) => state.cart.items;

export const selectTotalCartAmount = (state) => {
  const cartItems = selectCartItems(state);
  return cartItems.reduce((totalAmount, item) => totalAmount + item.totalPrice, 0);
};
