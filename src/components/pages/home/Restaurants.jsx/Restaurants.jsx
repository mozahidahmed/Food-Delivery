import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useGetRestaurantsQuery } from '../../../../features/api/apiSlice';
import Loading from '../../../shared/Loading';
import { useNavigate } from 'react-router-dom';



const Restaurants = () => {
  const navigate = useNavigate();
  const { data, isLoading ,isSuccess} = useGetRestaurantsQuery();
  if (isLoading) {
    <Loading />
  }
 


    return (
      <div className="py-12">
        <h1 className="text-3xl text-center mb-2">RESTAURANTS FOODS</h1>
        <p className="text-center">Get your favourite food in 4 simple steps</p>
        <div className="grid lg:grid-cols-4   md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  px-16 py-6 gap-4">
          {data?.map((data) => (
            <>
              <div
                className="card shadow-xl "
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
                  <h1>{data.location}</h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
};

export default Restaurants;