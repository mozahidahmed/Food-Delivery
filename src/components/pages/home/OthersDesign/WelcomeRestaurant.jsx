import React from "react";

const WelcomeRestaurant = () => {
  return (
    <div className="bg-[#dee2e6]">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 px-12 py-6 ">
        <div className="">
          <img
            src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/about3.webp"
            alt=""
          />
        </div>

        <div className="py-12 grid gap-2">
          <div className="">
            <div className="grid justify-center">
              <img
                src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/title-shape.png"
                alt=""
              />
            </div>
            <div className="py-12">
              <h1 className="lg:text-3xl py-6">
                {" "}
                WELCOME TO OUR LUXURY RESTAURANT
              </h1>
              <p className="">
                It’s the story of an everlasting love affair, Dieter Delicioz
                and the Atlantic Ocean. Our proximity to the abundant. It’s the
                story of an everlasting love affair, Dieter Delicioz and the
                Atlantic Ocean. Our proximity to the abundant. It’s the story of
                an everlasting love affair, Dieter Delicioz and the Atlantic
                Ocean. Our proximity to the abundant.
              </p>
            </div>
          </div>
          <button className="btn bg-red-500 rounded-xl font-bold text-black">
            Order NOw
          </button>
        </div>

        <div className="grid gap-1  px-2">
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-410x410.jpg"
              alt=""
              className="w-[20%] rounded-xl"
            />
            <div className="">
              <h1 className="text-xl">Chicha Morada</h1>
              <h1 className="text-xl text-red-500">$ 300</h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-410x410.jpg"
              alt=""
              className="w-[20%] rounded-xl"
            />
            <div className="">
              <h1 className="text-xl">Chicha Morada</h1>
              <h1 className="text-xl text-red-500">$ 300</h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-410x410.jpg"
              alt=""
              className="w-[20%] rounded-xl"
            />
            <div className="">
              <h1 className="text-xl">Chicha Morada</h1>
              <h1 className="text-xl text-red-500">$ 300</h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-410x410.jpg"
              alt=""
              className="w-[20%] rounded-xl"
            />
            <div className="">
              <h1 className="text-xl">Chicha Morada</h1>
              <h1 className="text-xl text-red-500">$ 300</h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/8-410x410.jpg"
              alt=""
              className="w-[20%] rounded-xl"
            />
            <div className="">
              <h1 className="text-xl">Chicha Morada</h1>
              <h1 className="text-xl text-red-500">$ 300</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeRestaurant;
