
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`,
        }),
        getProductID: builder.query({
            query: (id) => `/products/${id}`,
            // providesTags: (result, error, id) => [{ type: 'products', id }],
          }),
    }),
})

export const { useGetProductsQuery, useGetProductIDQuery } = productsApi