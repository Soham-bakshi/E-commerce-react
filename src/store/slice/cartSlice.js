import { createSlice } from '@reduxjs/toolkit';

// local storage functionality
const getLocalStorage = () => {
  let cart = localStorage.getItem('cartData');
  if (cart) {
    return JSON.parse(localStorage.getItem('cartData'));
  } else {
    return {
      cartItems: [],
      subtotal: 0,
      totalItems: 0,
      shippingFee: 100,
    };
  }
};

// cart slice with the mini-reducers logic and automatically created actions
export const cartSlice = createSlice({
  name: 'cart_data',
  initialState: getLocalStorage(),
  reducers: {
    // mini-reducer to add products to cart and do relevant calculations for cart
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

      // updating local storage with data
      localStorage.setItem('cartData', JSON.stringify(state));
    },
    removeFromCart: (state, { payload }) => {
      // mini-reducer to remove items from cart
      const id = payload.id;
      let tempCart = [...state.cartItems];
      tempCart = tempCart.filter((item) => item.id !== id);
      let totalItems = state.totalItems - payload.qty;
      const subtotal = state.subtotal - payload.price * payload.qty;
      state.cartItems = tempCart;
      state.subtotal = subtotal;
      state.totalItems = totalItems;

      // updating local storage with data
      localStorage.setItem('cartData', JSON.stringify(state));
    },
    clearCart: (state) => {
      // mini-reducer to remove all items from cart
      state.cartItems = [];
      state.subtotal = 0;
      state.totalItems = 0;

      // updating local storage with data
      localStorage.setItem('cartData', JSON.stringify(state));
    },
    increment: (state, { payload }) => {
      // mini-reducer to add more of same item to cart
      const index = payload.index;
      let tempCart = [...state.cartItems];
      tempCart[index].qty += 1;
      state.cartItems = tempCart;
      state.subtotal += tempCart[index].price;
      state.totalItems += 1;

      // updating local storage with data
      localStorage.setItem('cartData', JSON.stringify(state));
    },
    decrement: (state, { payload }) => {
      // mini-reducer to remove more of same item from cart
      const item = payload.item;
      const index = payload.index;
      if (item.qty >= 2) {
        let tempCart = [...state.cartItems];
        tempCart[index].qty -= 1;
        state.cartItems = tempCart;
        state.subtotal -= tempCart[index].price;
        state.totalItems -= 1;
      }

      // updating local storage with data
      localStorage.setItem('cartData', JSON.stringify(state));
    },
  },
});

// action creators
export const { addToCart, removeFromCart, clearCart, increment, decrement } =
  cartSlice.actions;

// combined reducer
export const cartReducer = cartSlice.reducer;
