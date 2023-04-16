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

const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer,
    [cartSlice.name]: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

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

export {
  useFetchProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} from './apis/productsApi';
