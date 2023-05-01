import React from 'react';
import { Link } from 'react-router-dom';

const OrderNow = () => {
    return (
      <div className="bg-[#dee2e6] py-2 mb-2">
        <div className="flex py-12 justify-between items-center container mx-auto">
          <div className="text-3xl">
            <h1 className="">Book Your food Today. order Now!</h1>
          </div>
          <div className="">
            <Link to="/breakfast">
              <button className="p-2 px-12 font-bold hover:bg-red-500 rounded-full bg-red-500 hover:text-white">
                Order Food
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default OrderNow;