import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product_data',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct(state, action) {
      //
    },
    editProduct(state, action) {
      //
    },
    removeProduct(state, action) {
      //
    },
    productView(state, action) {
      //
    },
  },
});

export const { addProduct, editProduct, removeProduct, productView } =
  productSlice.actions;

export const productReducer = productSlice.reducer;
