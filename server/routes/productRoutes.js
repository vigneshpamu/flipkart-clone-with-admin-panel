import express from 'express'
import {
  addProduct,
  demoGetAllProducts,
  getSpecificBrandProduct,
} from '../controller/productController.js'

const router = express.Router()

router.post('/addproduct', addProduct)
router.get('/getalldemo', demoGetAllProducts)
router.get('/products/electronics/phone/:brand', getSpecificBrandProduct)

export default router
