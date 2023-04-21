import React, { useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Reviews = () => {
    return (
      <div className="px-6">
        <div className="py-12">
          <h1 className="text-3xl text-center font-bold mb-6">What People "Say" About Us</h1>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card border p-6 rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  libero non consectetur saepe fugit? Voluptates, officia? In
                  cumque sapiente ipsum.
                </p>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-2xl font-bold">Mozahid</h1>
                  <div className="flex">
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border p-6 rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  libero non consectetur saepe fugit? Voluptates, officia? In
                  cumque sapiente ipsum.
                </p>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-2xl font-bold">Mozahid</h1>
                  <div className="flex">
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border p-6 rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  libero non consectetur saepe fugit? Voluptates, officia? In
                  cumque sapiente ipsum.
                </p>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-2xl font-bold">Mozahid</h1>
                  <div className="flex">
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border p-6 rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  libero non consectetur saepe fugit? Voluptates, officia? In
                  cumque sapiente ipsum.
                </p>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-2xl font-bold">Mozahid</h1>
                  <div className="flex">
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border p-6 rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  libero non consectetur saepe fugit? Voluptates, officia? In
                  cumque sapiente ipsum.
                </p>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-2xl font-bold">Mozahid</h1>
                  <div className="flex">
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card border p-6 rounded-xl">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  libero non consectetur saepe fugit? Voluptates, officia? In
                  cumque sapiente ipsum.
                </p>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-2xl font-bold">Mozahid</h1>
                  <div className="flex">
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                    <AiFillStar className="text-yellow-400"></AiFillStar>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default Reviews;