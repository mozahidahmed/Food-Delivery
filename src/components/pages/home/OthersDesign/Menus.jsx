import React from 'react';

const Menus = () => {
    return (
      <div className="px-6 py-12">
        <h1 className="text-4xl text-center mb-2">OUR SET MENUS</h1>
        <p className="text-center py-2">
          A restaurant is a business that prepares and servesM
          <br /> food and drinks to customers meals are generally served
        </p>

        <div className="">
          <div className="grid lg:grid-cols-4 py-6">
            <div className="grid justify-center">
              <img
                src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-300x400.jpg"
                alt=""
                className=""
              />
              <div className="mt-2">
                <h1 className="text-xl text-center">CHICHA MORADA</h1>
                <h1 className="text-xl text-center text-red-500">$300</h1>
              </div>
            </div>
            <div className="grid justify-center">
              <img
                src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/6-1-300x400.jpg"
                alt=""
                className="opacity-200 hover:opacity-100 transition duration-300"
              />
              <div className="mt-2">
                <h1 className="text-xl text-center">CHICHA MORADA</h1>
                <h1 className="text-xl text-center text-red-500">$300</h1>
              </div>
            </div>
            <div className="grid justify-center">
              <img
                src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/7-300x400.jpg"
                alt=""
                className="opacity-200 hover:opacity-100 transition duration-300"
              />
              <div className="mt-2">
                <h1 className="text-xl text-center">CHICHA MORADA</h1>
                <h1 className="text-xl text-center text-red-500">$300</h1>
              </div>
            </div>
            <div className="grid justify-center">
              <img
                src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/5-1-300x400.jpg"
                alt=""
                className="opacity-200 hover:opacity-100 transition duration-300"
              />
              <div className="mt-2">
                <h1 className="text-xl text-center">CHICHA MORADA</h1>
                <h1 className="text-xl text-center text-red-500">$300</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-2 ">
            <button className="border-2 grid justify-center px-12 p-2 hover:text-white hover:bg-red-500 font-bold">
              More Detalis{" "}
            </button>
          </div>
        </div>
      </div>
    );
};

export default Menus;