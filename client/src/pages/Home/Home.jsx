/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import FeatureProducts from '../../components/Feature Products/FeatureProducts'
import LastViewedProduct from '../../components/Last Viewed Product/LastViewedProduct'
const Home = () => {
  return (
    <>
      <div className="mainHomeDiv">
        <Header />
      </div>
      <Hero />
      <FeatureProducts />
      <LastViewedProduct />
    </>
  )
}

export default Home
