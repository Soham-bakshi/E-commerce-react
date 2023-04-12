import { createSlice } from '@reduxjs/toolkit';
import { store } from '..';

export const productsSlice = createSlice({
  name: 'product_data',
  initialState: [],
  reducers: {
    addProducts(state, action) {
      return action.payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
