/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style.css'

import { AiOutlineStar } from 'react-icons/ai'
import UpperHeader from './components/UpperHeader'
import LowerHeader from './components/LowerHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector } from 'react-redux'

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState('all') // Set the default category to 'all'
  const [activeTab, setActiveTab] = useState(0)

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  const { userData } = useSelector((state) => state.auth)

  // 067FD9

  return (
    <div className="mainHeaderPart">
      <UpperHeader userInfo={userData} />
      <LowerHeader />
    </div>
  )
}

export default Header
