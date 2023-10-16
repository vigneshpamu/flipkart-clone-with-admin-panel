/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'

const Products = ({ posts }) => {
  return (
    <ul className="thisIsDemoUL">
      {posts.map((post) => (
        <li key={post.name}>{post.name}</li>
      ))}
    </ul>
  )
}

export default Products
