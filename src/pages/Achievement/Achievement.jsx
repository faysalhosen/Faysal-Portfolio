// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Achievement() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-easing="ease-in-sine"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" w-full h-full"
            src="https://i.ibb.co/rdRJ54H/Web-development-certificate.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}