import React from "react";

const HowItWorks = () => {
    
    https: return (
      <div
        className="py-12 container mx-auto"
        style={{
          backgroundImage: `url("https://www.khanidani.com/assets/images/works.jpg")`,
        }}
      >
        <h1
          className="text-3xl text-center mb-2 
         inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-red-500
                before:via-red-400
                before:to-red-500
                hover:before:w-full
                hover:before:opacity-100
        
        
        "
        >
          HOW IT WORK
        </h1>

        <div className="grid lg:grid-cols-4 justify-center py-2 sm:grid-cols-2 gap-4">
          <div className="card   shadow-xl p-12 rounded-xl">
            <div className="grid justify-center">
              <img
                src="https://www.khanidani.com/assets/images/step1.png"
                alt=""
                className="bg-red-500 rounded-full"
              />
            </div>
            <h1 className="text-3xl text-center mt-2 mb-2 ">Search</h1>
            <p className="text-center">
              Find all restaurants available near you
            </p>
          </div>
          <div className="card   shadow-xl p-12 rounded-xl">
            <div className="grid justify-center">
              <img
                src="https://www.khanidani.com/assets/images/step2.png"
                alt=""
                className="bg-red-500 rounded-full"
              />
            </div>
            <h1 className="text-3xl text-center mt-2 mb-2 ">Choose</h1>
            <p className="text-center">
              Find all restaurants available near you
            </p>
          </div>
          <div className="card  r shadow-xl p-12 rounded-xl">
            <div className="grid justify-center">
              <img
                src="https://www.khanidani.com/assets/images/step3.png"
                alt=""
                className="bg-red-500 rounded-full"
              />
            </div>
            <h1 className="text-3xl text-center mt-2 mb-2 ">Pay</h1>
            <p className="text-center">
              Find all restaurants available near you
            </p>
          </div>
          <div className="card  shadow-xl p-12 rounded-xl">
            <div className="grid justify-center">
              <img
                src="https://www.khanidani.com/assets/images/step4.png"
                alt=""
                className="bg-red-500 rounded-full"
              />
            </div>
            <h1 className="text-3xl text-center mt-2 mb-2 ">Enjoy</h1>
            <p className="text-center">
              Find all restaurants available near you
            </p>
          </div>
        </div>
      </div>
    );
};

export default HowItWorks;
