import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart_data',
  initialState: {
    cart: [],
    itemsAdded: [],
    quantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const tempCart = [...state.cart, action.payload];
      const tempItemsAdded = [...state.itemsAdded, action.payload.id];
      const tempQuantity = tempCart.reduce((acc, curr) => {
        return acc + curr.amount;
      }, 0);
      return {
        ...state,
        cart: tempCart,
        itemsAdded: tempItemsAdded,
        quantity: tempQuantity,
      };
    },
    increaseItems(state, action) {
      //
    },
    decreaseItems(state, action) {
      //
    },
    clearCart(state, action) {
      //
    },
  },
});

export const { addToCart, increaseItems, decreaseItems, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
