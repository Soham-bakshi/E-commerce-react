import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  addProducts,
  productsReducer,
  productsSlice,
} from './slice/productSlice';
import {
  addToCart,
  decreaseItems,
  increaseItems,
  clearCart,
  cartReducer,
  cartSlice,
} from './slice/cartSlice';
import { productsApi } from './apis/productsApi';

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
  increaseItems,
  decreaseItems,
  clearCart,
};

export {
  useFetchProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} from './apis/productsApi';
