import React, { useEffect } from "react";
import { useGetBreakfastQuery } from "../../../features/api/apiSlice";
import Loading from "../../shared/Loading";
import AboutRestaurant from "../home/OthersDesign/AboutRestaurant";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/api/cartSlice";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const BreakFast = () => {
  const { data, isLoading, isSuccess, isError } = useGetBreakfastQuery();
 if (isLoading) {
   return <Loading />;
 }
  const dispatch = useDispatch();
 
 
 

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    alert("added Successfully!");
  };

  return (
    <div className="py-2">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px] w-full ">
            <img
              src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_10.jpg"
              alt=""
              className="h-[36rem] w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] w-full ">
            <img
              src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_4.jpg"
              alt=""
              className="h-[36rem] w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] w-full ">
            <img
              src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_7.jpg"
              alt=""
              className="h-[36rem] w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <AboutRestaurant />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 container mx-auto">
        {data?.map((data) => (
          <>
            <div className="border">
              <img src={data?.fimg} alt="" />
              <h1 className="mt-2 px-2">{data?.fname}</h1>
              <div className="flex justify-between px-2 py-4 items-center">
                <h1 className="text-2xl">Tk.{data?.price}</h1>
                <BsCartPlus
                  onClick={() => handleAddToCart(data)}
                  className="text-2xl text-red-500 font-bold"
                ></BsCartPlus>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default BreakFast;
