/* eslint-disable no-unused-vars */
import { apiSlice } from '../apiSlice'
const ADMIN_URL = '/api/admin'

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    adminRegister: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
    adminLogout: builder.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
})

export const {
  useAdminLoginMutation,
  useAdminRegisterMutation,
  useAdminLogoutMutation,
} = adminApiSlice
