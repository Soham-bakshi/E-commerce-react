// single source for all our components for their required action creators, RTX query hooks
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from './apis/productsApi';
import {
  addProducts,
  updateSort,
  sortProducts,
  productsReducer,
  productsSlice,
} from './slice/productSlice';
import {
  addToCart,
  removeFromCart,
  clearCart,
  increment,
  decrement,
  cartReducer,
  cartSlice,
} from './slice/cartSlice';

// redux store creation
const store = configureStore({
  // adding combined reducers to store
  reducer: {
    [productsSlice.name]: productsReducer,
    [cartSlice.name]: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // middleware to add albumsApi from RTK query
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

// re-exporting the action creators
export {
  store,
  addProducts,
  addToCart,
  removeFromCart,
  clearCart,
  increment,
  decrement,
  sortProducts,
  updateSort,
};

// re-exporting the RTK query hooks
export {
  useFetchProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} from './apis/productsApi';
