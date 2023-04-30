import React, { useEffect } from "react";

import Loading from "../../shared/Loading";
import AboutRestaurant from "../home/OthersDesign/AboutRestaurant";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/api/cartSlice";
import { useGetMorningCoffeeQuery } from "../../../features/api/apiSlice";

const MorningCoffee = () => {
  const { data, isLoading, isSuccess, isError } = useGetMorningCoffeeQuery();
 const dispatch = useDispatch();  
  useEffect(() => {
    if (isLoading) {
      <Loading />;
    }
    if (isSuccess) {
      console.log('ghjkgjhgjkgjk',data);
    }
    if (isError) {
      return <p>error</p>;
    }
  }, []);
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    alert("added Successfully!");
  };
  return (
    <div className="py-6">
      <div className="">
        <img
          src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_10.jpg"
          alt=""
          className="h-[36rem] w-full"
        />
        <AboutRestaurant />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2 container mx-auto">
        {data?.map((data) => (
          <>
            <div className="border">
              <img src={data?.fimg} alt="" />
              <div className="flex justify-between px-4 py-4 items-center">
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

export default MorningCoffee;
