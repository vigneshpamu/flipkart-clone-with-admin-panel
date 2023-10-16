// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../firebase'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useGoogleMutation } from '../../slices/user/usersApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../../slices/authSlice'
import './style.css'
import { useUser } from '../../context/UserContext'
const Login = () => {
  const { userData } = useSelector((state) => state.auth)
  const { user, setUser } = useUser()
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const [google] = useGoogleMutation()
  const dispatch = useDispatch()

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

      console.log(res)
      dispatch(setCredentials({ ...res }))
      setUser({ ...res })
      if (userData) navigate('/')
    } catch (error) {
      console.log('Could sign in with google')
    }
  }
  console.log(user)

  if (!userData) {
    return (
      <div className="AllLoginItemMain">
        <div className="loginFormAll">
          <h3>sign In to your account</h3>
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button>SIGN IN</button>
          <button onClick={handleGoogleLogin}>SIGN IN WITH OAUTH</button>
          <p>Forget your Password ?</p>
          <Link to="/register">
            <p>Dont Have an Account ?</p>
          </Link>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Login
