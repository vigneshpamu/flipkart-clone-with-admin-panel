/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../../../slices/authSlice'
import './style.css'
import { useAdminLoginMutation } from '../../../slices/admin/adminApiSlice'
import { toast } from 'react-hot-toast'
const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { adminData } = useSelector((state) => state.admin)
  const navigate = useNavigate()
  const [adminLogin] = useAdminLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (adminData) {
      navigate('/admin')
    }
  }, [adminData, navigate])

  const onFormSubmit = async (e) => {
    e.preventDefault()
    console.log(name, email, password)
    if (!email || !password) {
      toast.error('Fill All Details Properly')
    } else {
      try {
        const res = await adminLogin({ name, email, password }).unwrap()
        if (res) navigate('/admin')
      } catch (error) {
        console.error('Some Error Occured')
      }
    }
  }

  return (
    <div className="AllLoginItemMain">
      <form className="loginFormAll" onSubmit={onFormSubmit}>
        <h3>Admin Login</h3>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>SIGN IN</button>
        <p>Forget your Password ?</p>
        <Link to="/admin/register">
          <p>Dont Have an Account ?</p>
        </Link>
      </form>
    </div>
  )
}

export default AdminLogin
