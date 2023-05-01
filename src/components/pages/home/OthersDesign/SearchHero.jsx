import React from 'react';


const SearchHero = () => {
    return (
      <div
        className="py-48 px-12"
        style={{
          backgroundImage: `url("https://wossthemes.com/jack/wp-content/uploads/2018/01/blog_image_7.jpg")`,
        }}
      >
        <h1 className="text-4xl text-center text-white hover:text-red-500">
          It's the food and groceries you love, delivered
        </h1>

        <div className="lg:flex justify-center gap-2 mt-12 ">
          <input
            name="email"
            className="mt-1 px-3 py-6 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-[50%]  w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Enter Your Email"
          />

          <button className="bg-red-500 py-4 rounded-xl px-12 lg:mt-0 md:mt-0 mt-2 font-bold text-white">
            Subscribe
          </button>
        </div>
      </div>
    );
};

export default SearchHero;