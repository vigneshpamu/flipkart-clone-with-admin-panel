import express from 'express'
import {
  loginUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
  googleAuth,
} from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/google', googleAuth)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router
