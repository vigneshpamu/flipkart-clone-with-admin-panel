/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductPhone = () => {
  const { brand } = useParams()
  const [products, setProducts] = useState()

  useEffect(() => {
    fetch(`/api/product/products/electronics/phone/${brand}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error:', error))
  }, [brand])
  console.log(products)

  return (
    <div>
      {products?.map((product) => {
        return <div key={product._id}>{product.name}</div>
      })}
    </div>
  )
}

export default ProductPhone
