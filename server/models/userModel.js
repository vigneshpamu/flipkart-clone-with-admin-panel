import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/dxpifkq8x/image/upload/v1697134111/i7xkd4m246yy7gffqmcd.png',
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        default: [],
      },
    ],
    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
const User = mongoose.model('User', userSchema)
export default User
