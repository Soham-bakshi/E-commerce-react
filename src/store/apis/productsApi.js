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
      addProducts: builder.mutation({
        query: () => {
          return {
            url: '/products',
            method: 'POST',
            body: {
              //
            },
          };
        },
      }),
      updateProducts: builder.mutation({
        query: (product) => {
          return {
            url: `/products/?id=${product.id}`,
            method: 'PUT',
            body: {
              //
            },
          };
        },
      }),
      removeProducts: builder.mutation({
        query: (id) => {
          return {
            url: `/products/?id=${id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useFetchProductsQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useRemoveProductsMutation,
} = productsApi;
