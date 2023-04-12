import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecommerce-react-data.onrender.com',
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        query: () => {
          return {
            url: '/products',
            method: 'GET',
          };
        },
      }),
      addProduct: builder.mutation({
        query: (data) => {
          return {
            url: '/products',
            method: 'POST',
            body: {
              ...data,
            },
          };
        },
      }),
      updateProduct: builder.mutation({
        query: (data) => {
          console.log(data);
          return {
            url: `/products/${data.id}`,
            method: 'PUT',
            body: {
              ...data,
            },
          };
        },
      }),
      removeProduct: builder.mutation({
        query: (id) => {
          return {
            url: `/products/${id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useFetchProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = productsApi;
