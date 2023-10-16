import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 3000
connectDB()

const app = express()

// Use the cors middleware
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => res.send('Server is Ready'))
app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/product', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is Connected on port ${PORT}`))
