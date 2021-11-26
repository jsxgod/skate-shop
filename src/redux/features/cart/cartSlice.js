import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalQuantity: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const idx = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (idx === -1) {
        // Item is being added to the cart for the first time
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        // Item already exists in the cart
        state.cartItems[idx].quantity += 1;
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const idx = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (idx !== -1) {
        const qty = state.cartItems[idx];
        if (qty > 1) {
          state.cartItems[idx].quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
      state.totalQuantity -= 1;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
