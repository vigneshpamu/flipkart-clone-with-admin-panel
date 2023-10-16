/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import { logoutUser } from '../../slices/authSlice'
import { useSelector, useDispatch } from 'react-redux'

import { useLogoutMutation } from '../../slices/user/usersApiSlice'
import { useNavigate } from 'react-router-dom'
const UserProfile = () => {
  const [logout] = useLogoutMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    try {
      await logout().unwrap()
      dispatch(logoutUser())
      navigate('/register')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="userProfileMain">
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default UserProfile
