import React from "react";
import { Link } from "react-router-dom";

const Ldb = () => {
  return (
    <div className="bg-neutral-300">
      <div class="flex lg:min-h-screen  py-6 items-center justify-center ">
        <div class="grid grid-cols-1   gap-5 md:grid-cols-3 lg:grid-cols-4">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_10.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Breakfast
              </h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <Link to="/breakfast">
                <button class="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See Food
                </button>
              </Link>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_7.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Lunch</h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <Link to="/lunch">
                <button class="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See Food
                </button>
              </Link>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="	https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_9.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">Dinner</h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <Link to="/dinner">
                <button class="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See Food
                </button>
              </Link>
            </div>
          </div>
          <div class="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_4.jpg"
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Night Drink
              </h1>
              <p class="mb-3 text-lg  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <Link to="/morningcoffee">
                <button class="rounded-full bg-red-500 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See Food
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ldb;
