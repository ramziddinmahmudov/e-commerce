import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import lod from '../Asset/iphone14.png'
import lod1 from '../Asset/s24.png'
import lod3 from '../Asset/nokia1.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

      >
        <SwiperSlide><img src={lod} alt="" className="img4"/></SwiperSlide>
        <SwiperSlide><img src={lod1} alt="" className="img4"/></SwiperSlide>
        <SwiperSlide><img src={lod3} alt="" className="img4"/></SwiperSlide>
      </Swiper>
    </>
  );
}
