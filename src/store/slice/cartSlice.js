import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart_data',
  initialState: {
    cartItems: [],
    subtotal: 0,
    totalItems: 0,
    shippingFee: 100,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      let tempCart = [...state.cartItems];
      let totalItems = state.totalItems + payload.qty;
      const subtotal = state.subtotal + payload.price * payload.qty;
      let commonItems = tempCart.filter((item) => item.id === payload.id);
      if (!commonItems.length) {
        tempCart.push(payload);
      } else {
        tempCart.forEach((item, index, array) => {
          if (item.id === payload.id) {
            array[index].qty += payload.qty;
          }
        });
      }
      state.cartItems = tempCart;
      state.subtotal = subtotal;
      state.totalItems = totalItems;
    },
    removeFromCart: (state, { payload }) => {
      const id = payload.id;
      let tempCart = [...state.cartItems];
      tempCart = tempCart.filter((item) => item.id !== id);
      let totalItems = state.totalItems - payload.qty;
      const subtotal = state.subtotal - payload.price * payload.qty;
      state.cartItems = tempCart;
      state.subtotal = subtotal;
      state.totalItems = totalItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.subtotal = 0;
      state.totalItems = 0;
    },
    increment: (state, { payload }) => {
      const index = payload.index;
      let tempCart = [...state.cartItems];
      tempCart[index].qty += 1;
      state.cartItems = tempCart;
      state.subtotal += tempCart[index].price;
      state.totalItems += 1;
    },
    decrement: (state, { payload }) => {
      const item = payload.item;
      const index = payload.index;
      if (item.qty >= 2) {
        let tempCart = [...state.cartItems];
        tempCart[index].qty -= 1;
        state.cartItems = tempCart;
        state.subtotal -= tempCart[index].price;
        state.totalItems -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increment, decrement } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
