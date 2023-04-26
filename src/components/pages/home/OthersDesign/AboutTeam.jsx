import React from 'react';

const AboutTeam = () => {
    return (
      <div className="px-6 ">
        <h1 className="text-3xl  mb-2">OUR POPULAR CHEFS</h1>
        <p className="">Selected with custamer reviews</p>
        <div className="grid lg:grid-cols-4  md:grid-cols-2  gap-2 py-6">
          <div className="">
            <img
              src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-1.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-2.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-1.webp"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default AboutTeam;