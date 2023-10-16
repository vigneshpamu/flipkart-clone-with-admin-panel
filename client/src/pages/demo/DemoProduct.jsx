/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useGetAllDemoMutation } from '../../slices/addProduct/addProductApiSlice'
import Products from './SingleDemoProduct/Products'
import Pagination from './Pagination/Pagination'

function randomizeArrays(array1, array2) {
  const combinedArray = [...array1, ...array2]
  const randomizedArray = []

  while (combinedArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * combinedArray.length)
    const randomElement = combinedArray.splice(randomIndex, 1)[0]
    randomizedArray.push(randomElement)
  }

  return randomizedArray
}

const DemoProduct = () => {
  const [getAllDemo] = useGetAllDemoMutation()
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage, setProductPerPage] = useState(4)

  useEffect(() => {
    const fetchDemos = async () => {
      const { allProducts } = await getAllDemo().unwrap()
      const extra = randomizeArrays(products, products)
      console.log(extra)
      setProducts(extra)
    }

    fetchDemos()
  }, [])

  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <Products posts={currentProducts} />
      <Pagination
        productsPerPage={productPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  )
}

export default DemoProduct
