import React from 'react';

const PopularRestaurants = () => {
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl lg:text-start md:text-center text-center mb-2">
          PopularRestaurants
        </h1>
        <p className="text-center lg:text-start md:text-center ">
          Selected with custamer reviews
        </p>
        <div className="grid lg:grid-cols-4  md:grid-cols-2  gap-2 py-6">
          <div className="">
            <img
              src="https://winsfolio.net/html/foodio/assets/img/restaurant-2.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://winsfolio.net/html/foodio/assets/img/restaurant.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="	https://winsfolio.net/html/foodio/assets/img/restaurant-3.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://winsfolio.net/html/foodio/assets/img/restaurant.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default PopularRestaurants;