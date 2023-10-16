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

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, 'user', user._id)
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
  })

  if (user) {
    generateToken(res, 'user', user._id)
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

const googleAuth = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      generateToken(res, 'user', user._id)
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        orders: user.orders,
        avatar: user.avatar,
      })
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8)

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: generatedPassword,
        avatar: req.body.avatar,
      })

      await newUser.save()

      generateToken(res, 'user', newUser._id)

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        orders: newUser.orders,
        avatar: newUser.avatar,
      })
    }
  } catch (error) {
    res.status(400)
    throw new Error('Something went wrong in OAuth')
  }
})

// @desc    Logout User / Delete Token
// route    POST /api/user/logout
// @access  Public

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('user', '', {
    expires: new Date(0),
    httpOnly: true,
  })
  res.status(200).json({ message: 'User is Logged Out Properly' })
})

// @desc    Auth User / Set Token
// route    POST /api/user/auth
// @access  Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Something went wrong in OAuth')
  }
})

// @desc    Update User Profile / Set Token
// route    POST /api/user/auth
// @access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }
    const updatedUser = await user.save()
    console.log(updatedUser)
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      orders: updatedUser.orders,
    })
  } else {
    res.status(404)
    throw new Error('User Not Found')
  }
})

// @desc    Get All Todos
// route    POST /api/user/auth
// @access  Private

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  googleAuth,
}
