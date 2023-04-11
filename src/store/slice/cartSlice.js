import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart_data',
  initialState: {
    cart: [],
  },
  reducers: {
    addCart(state, action) {
      //
    },
    cartItems(state, action) {
      //
    },
    updateCart(state, action) {
      //
    },
    deleteCart(state, action) {
      //
    },
  },
});

export const { addCart, cartItems, updateCart, deleteCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
