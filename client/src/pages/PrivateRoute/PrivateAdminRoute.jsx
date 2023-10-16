// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateAdminRoute = () => {
  const { adminData } = useSelector((state) => state.admin)
  return adminData ? <Outlet /> : <Navigate to="/admin/login" replace />
}

export default PrivateAdminRoute
