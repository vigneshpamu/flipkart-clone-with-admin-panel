/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  adminData: localStorage.getItem('adminData') || '',
  freshData: '',
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminCredentials: (state, action) => {
      state.adminData = action.payload
      localStorage.setItem('adminData', JSON.stringify(action.payload))
    },
    logoutAdmin: (state, action) => {
      state.adminData = null
      localStorage.removeItem('adminData')
    },
    getAdminCredentials: (state, action) => {
      state.freshData = JSON.parse(state.adminData)
    },
  },
})

export const { setAdminCredentials, logoutAdmin, getAdminCredentials } =
  adminSlice.actions
export default adminSlice.reducer
