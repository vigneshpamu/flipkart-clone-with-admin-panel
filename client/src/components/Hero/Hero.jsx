/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style.css'
import iphoneImg from '../../assets/iphone1.png'
import tvImg from '../../assets/tv.png'
import cycleImg from '../../assets/cycle.png'
const Hero = () => {
  return (
    <div className="mainHeroFullWidth">
      <div className="mainHomeDiv mainHeroContent">
        <div className="heroMainLeft">
          <div className="iphoneMainHero scaleHeroHover">
            <div className="mainDiscountHero">
              <div className="iphoneMainDiscount">50% Discount</div>
            </div>
            <div className="iphoneMainHeroContent">
              <div className="iphoneHeroLeft">
                <div>
                  <h3>iPhone 14</h3>
                  <p>
                    Now available on <br /> affordable price
                  </p>
                </div>
                <div>
                  <p>
                    ₹<span className="cutText">1,00,000</span> From{' '}
                    <span className="bold">₹99,500*</span>
                  </p>
                </div>
                <div className="buyNowBtnHero">Buy Now</div>
              </div>
              <div className="iphoneHeroRight">
                <img src={iphoneImg} alt="" className="iphoneImg" />
              </div>
            </div>
          </div>
          <div className="tvMainHero scaleHeroHover">
            <div className="firstSideHeroTv">
              <div className="tvHeroContentAll">
                <div className="tvHeroFirst">
                  <h3>Ultra HD 4K TVs</h3>
                </div>
                <div className="tvHeroSecond">
                  <h3>
                    From <span>₹5,000*</span>
                  </h3>
                  <p>
                    Sony, Samsung, LG and <br />
                    more. Instant 10% Offer on <br /> CitiBank
                  </p>
                </div>
              </div>
            </div>
            <div className="secondSideHeroTv">
              <img src={tvImg} alt="" />
            </div>
          </div>
        </div>
        <div className="heroMainRight">
          <div className="cycleMainHero scaleHeroHover">
            <div className="cycleMainCircle1"></div>
            <div className="cycleMainCircle2"></div>
            <div className="cycleHeroContent">
              <h3>Lifelong Tribe 20T Cycle</h3>
              <p className="cycleDescHero">
                Matte Black and Fluorescent yellow 20 T <br />
                Road Cycle (Single Speed, Black)
              </p>
              <p className="cycleTitleName">
                ₹<span className="cutText">1,00,000</span> From{' '}
                <span className="bold">₹99,500*</span>
              </p>
              <div className="buyNowBtnHero redColor">Buy Now</div>
            </div>
            <div className="cycleHeroImg">
              <img src={cycleImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
