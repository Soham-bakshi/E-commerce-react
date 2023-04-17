import { createSlice } from '@reduxjs/toolkit';

// product slice with the mini-reducers logic and automatically created actions
export const productsSlice = createSlice({
  name: 'product_data',
  initialState: {
    allProducts: [],
    sort: 'none',
    filteredProducts: [],
  },
  reducers: {
    // mini-reducer to add fetched products array from API
    addProducts(state, action) {
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };
    },
    updateSort(state, action) {
      // mini-reducer to set sort state as per user input
      return { ...state, sort: action.payload };
    },
    sortProducts(state, action) {
      // mini-reducer to implement the set sort
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

// action creators
export const { addProducts, updateSort, sortProducts } = productsSlice.actions;

// combined reducer
export const productsReducer = productsSlice.reducer;
