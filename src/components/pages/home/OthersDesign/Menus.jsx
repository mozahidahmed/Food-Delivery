// import React from 'react';

// const Menus = () => {
//     return (
//       <div className="container mx-auto py-6">
//         <h1 className="text-3xl ">SET MENUS</h1>
//         <p className="">Selected with custamer reviews</p>
//         <div className="grid lg:grid-cols-4  md:grid-cols-3  gap-2 py-6">
          // <div className="menu_wrapper">
          //   <img
          //     src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-300x400.jpg"
          //     alt=""
          //   />
          // </div>
          // <div className="menu_wrapper">
          //   <img
          //     src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/6-1-300x400.jpg"
          //     alt=""
          //   />
          // </div>
          // <div className="menu_wrapper">
          //   <img
          //     src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/7-300x400.jpg"
          //     alt=""
          //   />
          // </div>
          // <div className="menu_wrapper">
          //   <img
          //     src="	 https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/5-1-300x400.jpg"
          //     alt=""
          //   />
          // </div>
//         </div>
//       </div>
//     );
// };

// export default Menus;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Menus = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl  mb-2 lg:text-start md:text-center text-center">
        Menus
      </h1>

      <Carousel responsive={responsive}>
        <div className="menu_wrapper">
          <img
            src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-300x400.jpg"
            alt=""
          />
        </div>
        <div className="menu_wrapper">
          <img
            src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/6-1-300x400.jpg"
            alt=""
          />
        </div>
        <div className="menu_wrapper">
          <img
            src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/7-300x400.jpg"
            alt=""
          />
        </div>
        <div className="menu_wrapper">
          <img
            src="	 https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/5-1-300x400.jpg"
            alt=""
          />
        </div>
        <div className="menu_wrapper">
          <img
            src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-300x400.jpg"
            alt=""
          />
        </div>
        <div className="menu_wrapper">
          <img
            src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/6-1-300x400.jpg"
            alt=""
          />
        </div>
        <div className="menu_wrapper">
          <img
            src="	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/7-300x400.jpg"
            alt=""
          />
        </div>
        <div className="menu_wrapper">
          <img
            src="	 https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/5-1-300x400.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Menus;


    
