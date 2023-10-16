/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
// import { ToastContainer, toast } from 'react-toastify'
import { Toaster, toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useAdminRegisterMutation } from '../../../slices/admin/adminApiSlice'
import { setAdminCredentials } from '../../../slices/adminSlice'

const Register = () => {
  // All States
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { adminData } = useSelector((state) => state.admin)
  const navigate = useNavigate()
  const [adminRegister] = useAdminRegisterMutation()
  const dispatch = useDispatch()
  // const dispatch = useDispatch()
  useEffect(() => {
    if (adminData) {
      navigate('/admin')
    }
  }, [adminData, navigate])

  const onFormSubmit = async (e) => {
    e.preventDefault()
    console.log(name, email, password)
    if (!name || !email || !password) {
      toast.error('Fill All Details Properly')
    } else {
      try {
        const res = await adminRegister({ name, email, password }).unwrap()
        dispatch(setAdminCredentials({ ...res }))
        if (res) navigate('/admin')
      } catch (error) {
        console.error('Some Error Occured')
      }
    }
  }

  if (!adminData) {
    return (
      <div className="AllLoginItemMain">
        <Toaster />
        <form className="registerFormAll" onSubmit={onFormSubmit}>
          <h3>Admin Register</h3>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">SIGN UP</button>
          <Link to="/admin/login">
            <p>Already Have An Account ?</p>
          </Link>
        </form>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Register
