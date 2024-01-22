"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination, } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./slideShow.css";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductsSlideShowMobile = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
      style={{
        width: "100vw",
        height: "500px",
      }}
      pagination
        autoplay={{
            delay:2500
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              alt={title}
              src={`/products/${image}`}
              width={624}
              height={500}
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
