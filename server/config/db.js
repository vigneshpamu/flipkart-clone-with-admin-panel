import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const urlValue = String(process.env.MONGO_URI)
    const conn = await mongoose.connect(urlValue)
    console.log(`MongoDB Connect: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
