// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../firebase'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
// import { useDispatch } from 'react-redux'
import './style.css'
import { useGoogleMutation } from '../../slices/user/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../../slices/authSlice'
// import { ToastContainer, toast } from 'react-toastify'
import { Toaster, toast } from 'react-hot-toast'
import { useUser } from '../../context/UserContext'

const Register = () => {
  // All States
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { userData } = useSelector((state) => state.auth)
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const [google] = useGoogleMutation()
  const dispatch = useDispatch()
  const { user, setUser } = useUser()
  useEffect(() => {
    if (userData) {
      navigate('/')
    }
  }, [userData, navigate])

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)
      console.log(result)

      const res = await google({
        name: result.user.displayName,
        email: result.user.email,
        avatar: result.user.photoURL,
      }).unwrap()

      console.log(`This is ${res}`)
      dispatch(setCredentials({ ...res }))
      setUser({ ...res })
      if (userData) navigate('/')
    } catch (error) {
      console.log('Could sign in with google')
    }
  }
  console.log(user)

  const onFormSubmit = async (e) => {
    e.preventDefault()
    console.log(name, email, password)
    if (!name || !email || !password) {
      toast.error('Fill All Details Properly')
    } else {
      navigate('/')
    }
  }

  if (!userData) {
    return (
      <div className="AllLoginItemMain">
        <Toaster />
        <form className="registerFormAll" onSubmit={onFormSubmit}>
          <h3>sign up to a new account</h3>
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
          <button type="button" onClick={handleGoogleLogin}>
            SIGN UP WITH OAUTH
          </button>
          <Link to="/login">
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
