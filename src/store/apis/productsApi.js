import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// creating RTK query API service
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecommerce-react-data.onrender.com',
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query({
        providesTags: ['product'],
        query: () => {
          return {
            url: '/products',
            method: 'GET',
          };
        },
      }),

      addProduct: builder.mutation({
        invalidatesTags: ['product'],
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
        invalidatesTags: ['product'],
        query: (data) => {
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
        invalidatesTags: ['product'],
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

// exporting the automatically generated hooks created by RTK query
export const {
  useFetchProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useRemoveProductMutation,
} = productsApi;
