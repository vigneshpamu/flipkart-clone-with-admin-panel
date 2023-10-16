/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

import logo from '../../../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCredentials } from '../../../slices/authSlice'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useUser } from '../../../context/UserContext'

const UpperHeader = ({ userInfo }) => {
  const [selectedCategory, setSelectedCategory] = useState('all') // Set the default category to 'all'
  const { userData } = useSelector((state) => state.auth)
  const [user1, setUser1] = useState({})
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  useEffect(() => {
    const fetchLocalData = async (userInfo) => {
      const data = JSON.parse(userInfo)
      setUser1(data)
    }
    if (userInfo) {
      // window.location.reload()
      fetchLocalData(userInfo)
    }
  }, [userInfo])
  console.log(`This is UserInfo ${userInfo}`)
  return (
    <div className="upperHeaderPart">
      <Link to="/">
        <div className="headerLogo">
          <img src={logo} alt="" className="headerLogoPng" />
        </div>
      </Link>
      <div className="headerCartSign">
        <div className="leftSideCart">
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="headerSelectOption"
          >
            <option value="all">All Categories</option>
            <option value="clothes">Clothes</option>
            <option value="mobile">Mobile</option>
            <option value="laptops">Laptops</option>
          </select>
        </div>
        <div className="middleSideCart">
          <input
            type="text"
            placeholder="Search Product, Brand and more.. "
            className="headerInputBox"
          />
          <AiOutlineSearch className="headerSearchIcon" />
        </div>
      </div>
      <div className="rightSideCart">
        {!userData && (
          <div className="headerSignUp">
            <div className="newClassName">
              <div className="cartImgDiv">
                <IoPersonOutline className="adminIconHeader" />
              </div>
              <Link to="/login" className="textNoneLink">
                <div className="cartContent">
                  {/* <div className="cartContentTitle">ACCOUNT</div> */}
                  <div className="loginDetailsHeader">
                    <h2>Sign In</h2>
                  </div>
                </div>
              </Link>
            </div>
            {/* <div className="middleHeaderLine"></div> */}
            <div className="newClassName">
              <div className="cartImgDiv">
                <IoPersonOutline className="adminIconHeader" />
              </div>
              <Link to="/register" className="textNoneLink">
                <div className="cartContent">
                  {/* <div className="cartContentTitle">ACCOUNT</div> */}
                  <div className="loginDetailsHeader">
                    <h2>Sign Up</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        {user1.avatar && (
          <div className="allUserHeaderDiv">
            <Link to="/cart">
              <div className="headerCartImg">
                <div className="cartImgDiv">
                  <AiOutlineShoppingCart className="headerCartIcon" />
                  <div className="cartItemNumber">0</div>
                </div>
                <div className="cartContent">
                  <div className="cartContentTitle">CART</div>
                  <h2>$0</h2>
                </div>
              </div>
            </Link>
            <Link to="/profile">
              <div className="profileHeaderMainImg">
                <img src={user1?.avatar} alt="" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default UpperHeader
