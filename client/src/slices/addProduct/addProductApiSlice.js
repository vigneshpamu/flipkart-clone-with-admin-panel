/* eslint-disable no-unused-vars */
import { apiSlice } from '../apiSlice'
const PRODUCT_URL = '/api/product'

export const addProductApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProductNew: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/addproduct`,
        method: 'POST',
        body: data,
      }),
    }),
    getAllDemo: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/getalldemo`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useAddProductNewMutation, useGetAllDemoMutation } =
  addProductApiSlice
