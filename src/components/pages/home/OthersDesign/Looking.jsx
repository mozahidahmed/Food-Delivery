import React from 'react';

const Looking = () => {
    return (
      <div
        className="py-24 w-full "
        style={{
          backgroundImage: `url("https://wossthemes.com/jack/wp-content/uploads/2018/05/parallax-cover.jpg")`,
        }}
      >
        <div className="text-white">
          <h1 className="text-center">ABOUT RESTAURANT</h1>
          <p className="text-center mt-4">
            Food, in the end, in our own tradition, is something holy. It’s not{" "}
            <br />
            about nutrients and calories. It’s about sharing. It’s about
            honesty. It’s about identity.
          </p>
          <div className="grid justify-center mt-6">
            <button className="border p-2 px-12 hover:bg-red-500 hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
};

export default Looking;