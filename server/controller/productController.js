import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Product from '../models/productModel.js'
import generateToken from '../utils/generateToken.js'

const addProduct = asyncHandler(async (req, res) => {
  const { data } = req.body
  console.log(data)
  console.log(req.body)
  const newProduct = await new Product(req.body)
  if (newProduct) {
    await newProduct.save()
    res.status(201).json({
      newProduct,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Product Data Data')
  }
})

const demoGetAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find()
  res.status(201).json({
    allProducts,
  })
})

const getSpecificBrandProduct = asyncHandler(async (req, res) => {
  const { brand } = req.params
  console.log(brand)
  try {
    const products = await Product.find({ 'brand.name': brand })

    res.status(201).json(products)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

export { addProduct, demoGetAllProducts, getSpecificBrandProduct }
