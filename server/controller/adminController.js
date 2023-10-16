import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import mongoose from 'mongoose'

// @desc    Auth User / Set Token
// route    POST /api/user/auth
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next(new ErrorHandler('Please Enter Email And Password', 400))
  }

  const user = await User.findOne({ email, type: 'admin' })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, 'admin', user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      orders: user.orders,
      avatar: user.avatar,
    })
  } else {
    res.status(401)
    throw new Error('Invalid Email or Password')
  }
})

// @desc    Register a User
// route    POST /api/user
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body
  const userExits = await User.findOne({ email })

  if (userExits) {
    res.status(400)
    throw new Error('User Already Exist')
  }

  const user = await User.create({
    name,
    email,
    password,
    role: 'admin',
  })

  if (user) {
    generateToken(res, 'admin', user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      orders: user.orders,
      avatar: user.avatar,
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

// @desc    Logout User / Delete Token
// route    POST /api/user/logout
// @access  Public

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('admin', '', {
    expires: new Date(0),
    httpOnly: true,
  })
  res.status(200).json({ message: 'User is Logged Out Properly' })
})

export { loginUser, registerUser, logoutUser }
