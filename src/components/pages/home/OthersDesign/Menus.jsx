import React from 'react';

const Menus = () => {
    return (
      <div className="px-6 py-6">
        <h1 className="text-3xl ">SET MENUS</h1>
        <p className="">Selected with custamer reviews</p>
        <div className="grid lg:grid-cols-4  md:grid-cols-2  gap-2 py-6">
          <div className="">
            <img
              src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-300x400.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/6-1-300x400.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/7-300x400.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="	 https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/5-1-300x400.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Menus;