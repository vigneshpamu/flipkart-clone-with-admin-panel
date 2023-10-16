/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li onClick={() => paginate(number)} key={number} className="">
            <div href="!#">{number}</div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
