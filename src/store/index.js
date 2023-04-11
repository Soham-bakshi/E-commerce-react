import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  addProduct,
  editProduct,
  removeProduct,
  productView,
  productReducer,
  productSlice,
} from './slice/productSlice';
import {
  addCart,
  cartItems,
  updateCart,
  deleteCart,
  cartReducer,
  cartSlice,
} from './slice/cartSlice';
import { productsApi } from './apis/productsApi';

const store = configureStore({
  reducer: {
    [productSlice.name]: productReducer,
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
  addProduct,
  editProduct,
  removeProduct,
  productView,
  addCart,
  cartItems,
  updateCart,
  deleteCart,
};

export {
  useFetchProductsQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useRemoveProductsMutation,
} from './apis/productsApi';
