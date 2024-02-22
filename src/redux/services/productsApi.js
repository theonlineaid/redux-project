import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getProductID: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getSearch: builder.query({
      query: (q) => `products/?title=${q}`,
    }),
    getRelatedProduct: builder.query({
      query: (categoryId) => `/categories/${categoryId}/products`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductIDQuery,
  useGetSearchQuery,
  useGetRelatedProductQuery,
} = productsApi;
