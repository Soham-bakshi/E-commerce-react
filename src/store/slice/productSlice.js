import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'product_data',
  initialState: {
    allProducts: [],
    sort: 'none',
    filteredProducts: [],
  },
  reducers: {
    addProducts(state, action) {
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };
    },
    updateSort(state, action) {
      return { ...state, sort: action.payload };
    },
    sortProducts(state, action) {
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];
      if (sort === 'none') {
        tempProducts = [...state.allProducts];
      }
      if (sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      return { ...state, filteredProducts: tempProducts };
    },
  },
});

export const { addProducts, updateSort, sortProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
