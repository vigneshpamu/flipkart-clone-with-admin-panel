/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: localStorage.getItem('userData') || '',
  freshData: '',
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userData = action.payload
      localStorage.setItem('userData', JSON.stringify(action.payload))
    },
    logoutUser: (state, action) => {
      state.userData = null
      localStorage.removeItem('userData')
    },
    getCredentials: (state, action) => {
      state.freshData = JSON.parse(state.userData)
    },
  },
})

export const { setCredentials, logoutUser, getCredentials } = authSlice.actions
export default authSlice.reducer
