/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const LowerHeader = () => {
  const [activeTab, setActiveTab] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const lowerData = [
    {
      id: 1,
      icon: `https://img.icons8.com/ios/50/ingredients.png`,
      iconBlue: `https://img.icons8.com/ios/50/067FD9/ingredients.png`,
      text: 'Grocery',
    },
    {
      id: 2,
      icon: `https://img.icons8.com/ios/50/google-pixel6.png`,
      iconBlue: `https://img.icons8.com/ios/50/067FD9/google-pixel6.png`,
      text: 'Mobiles',
    },
    {
      id: 3,
      icon: `https://img.icons8.com/wired/64/exterior.png`,
      iconBlue: `https://img.icons8.com/wired/64/067FD9/exterior.png`,
      text: 'Home',
    },
    {
      id: 4,
      icon: `https://img.icons8.com/ios/50/electronics.png`,
      iconBlue: `https://img.icons8.com/ios/50/067FD9/electronics.png`,
      text: 'Electronics',
    },
    {
      id: 5,
      icon: `https://img.icons8.com/wired/64/jumper.png`,
      iconBlue: `https://img.icons8.com/wired/64/067FD9/jumper.png`,
      text: 'Fashion',
    },
    {
      id: 6,
      icon: `https://img.icons8.com/ios/50/beard-trimmer.png`,
      iconBlue: `https://img.icons8.com/ios/50/067FD9/beard-trimmer.png`,
      text: 'Beauty & Accessories',
    },
  ]

  const handleSetActive = (id) => {
    setActiveTab(id)
    console.log(activeTab)
  }

  return (
    <div className="lowerHeaderPart">
      <div
        className={`tab ${
          activeTab === 0
            ? 'activeTabItem1 singleHeaderBottom'
            : 'singleHeaderBottom'
        }`}
        onClick={() => handleSetActive(0)}
      >
        <AiOutlineStar className="headerStar" />
        <p>Top Offers</p>
      </div>
      <div className="allHeaderSimilarIcons">
        {lowerData.map((item) => {
          if (item.id === 2) {
            return (
              <div
                key={item.id}
                onClick={() => handleSetActive(item.id)}
                className={`tab ${
                  activeTab === item.id
                    ? 'activeTabItem singleHeaderBottom2'
                    : 'singleHeaderBottom2'
                }`}
              >
                {activeTab === item.id ? (
                  <img
                    src={item.iconBlue}
                    alt={item.text}
                    className="headerIconImage"
                  />
                ) : (
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="headerIconImage"
                  />
                )}
                <p>{item.text}</p>
              </div>
            )
          } else {
            return (
              <div
                key={item.id}
                onClick={() => handleSetActive(item.id)}
                className={`tab ${
                  activeTab === item.id
                    ? 'activeTabItem singleHeaderBottom2'
                    : 'singleHeaderBottom2'
                }`}
              >
                {activeTab === item.id ? (
                  <img
                    src={item.iconBlue}
                    alt={item.text}
                    className="headerIconImage"
                  />
                ) : (
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="headerIconImage"
                  />
                )}
                <p>{item.text}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default LowerHeader
