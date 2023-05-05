import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useGetRestaurantsQuery } from "../../../../features/api/apiSlice";
import Loading from "../../../shared/Loading";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Restaurants = () => {
   const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetRestaurantsQuery();
  if (isLoading) {
    <Loading></Loading>;
  }
  

 

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-12 container mx-auto lg:px-0 md:px-6 px-6 ">
      <h1
        className="text-3xl  mb-2
         inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-red-500
                before:via-red-400
                before:to-red-500
                hover:before:w-full
                hover:before:opacity-100
        "
      >
        Restaurants foods
      </h1>

      <div className="grid lg:grid-cols-4 lg:px-0 md:px-6 px-6 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  container mx-auto py-6 gap-4">
        {data?.map((data) => (
          <>
            <div
              data-aos="zoom-in"
              className="card  shadow-xl "
              onClick={() => navigate(`/restaurantfood/${data._id}`)}
            >
              <img src={data.resimg} alt="" />
              <div className="mt-2 p-2">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">{data.resname}</h1>
                  <div className="flex gap-2 items-center">
                    <AiFillStar className="text-yellow-500"></AiFillStar>
                    <p>{data.rank}</p>
                  </div>
                </div>
                <div className="flex justify-between  items-center">
                  <h1 className="">{data.location}</h1>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
