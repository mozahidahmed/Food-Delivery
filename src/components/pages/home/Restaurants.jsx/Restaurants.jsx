import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Restaurants = () => {
  const [data,setData]=useState([]);

useEffect(()=>{
  fetch('rs.json')
  .then((res)=>res.json())
  .then((data)=>setData(data))

},[])


    return (
      <div>
        <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-1  px-16 py-6 gap-4">
          {data.map((data) => (
            <>
              <div className="card shadow-xl">
                <img
                  src={data.resimg}
                  alt=""
                />
                <div className="mt-2 p-2">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold">{data.resname}</h1>
                    <div className="flex gap-2 items-center">
                      <AiFillStar className="text-yellow-500"></AiFillStar>
                      <p>3.7</p>
                    </div>
                  </div>
                  <h1>{data.location}</h1>
                  <h1>{data.food[0].fname}</h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
};

export default Restaurants;