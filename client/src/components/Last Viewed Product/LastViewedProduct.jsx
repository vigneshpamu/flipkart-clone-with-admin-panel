/* eslint-disable no-unused-vars */
import React from 'react'
import './style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

const LastViewedProduct = () => {
  return (
    <div className="LastViewedProductMain">
      <h2 className="featureMainTitle">Last Viewed Products</h2>
      <>
        <Swiper
          slidesPerView={5}
          navigation={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            790: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1222: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide className="sliderIndividual">Slide 1</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 2</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 3</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 4</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 5</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 6</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 7</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 8</SwiperSlide>
          <SwiperSlide className="sliderIndividual">Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}

export default LastViewedProduct
