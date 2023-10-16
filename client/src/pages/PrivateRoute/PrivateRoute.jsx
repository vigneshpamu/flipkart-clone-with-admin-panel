// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { userData } = useSelector((state) => state.auth)
  return userData ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
