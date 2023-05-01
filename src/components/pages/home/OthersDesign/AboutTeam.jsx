import React from 'react';
import { BsFacebook, BsFillPhoneVibrateFill, BsLinkedin } from 'react-icons/bs';

const AboutTeam = () => {
    return (
      <div className="container mx-auto">
        <h1
          className="text-3xl lg:text-start md:text-center text-center mb-2
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
          popular chefs
        </h1>
        <p className=" lg:text-start md:text-center text-center">
          Selected with custamer reviews
        </p>
        <div className="grid lg:grid-cols-4  md:grid-cols-2  gap-4 py-6">
          <div class="flex   justify-center bg-slate-100">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl "
                    src=" 	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-1.webp"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Joken</h1>
                    <p class="text-lg">Photographer & Art</p>
                    <p class="text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                      <BsFacebook />
                      <BsLinkedin />
                      <BsFillPhoneVibrateFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex   justify-center bg-slate-100">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl "
                    src=" 	https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-3.webp"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Mozahid</h1>
                    <p class="text-lg">Photographer & Art</p>
                    <p class="text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                      <BsFacebook />
                      <BsLinkedin />
                      <BsFillPhoneVibrateFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex   justify-center bg-slate-100">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl "
                    src=" https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-5.webp"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Joken</h1>
                    <p class="text-lg">Photographer & Art</p>
                    <p class="text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                      <BsFacebook />
                      <BsLinkedin />
                      <BsFillPhoneVibrateFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex   justify-center bg-slate-100">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full rounded-xl object-cover shadow-xl "
                    src=" https://reactheme.com/products/wordpress/dinenos/wp-content/uploads/2023/02/img-2.webp"
                    alt=""
                  />
                </div>
                <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div class="flex min-h-full flex-col items-center justify-center">
                    <h1 class="text-3xl font-bold">Anindra</h1>
                    <p class="text-lg">Photographer & Art</p>
                    <p class="text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                    <div className="flex gap-4 text-2xl mt-6 justify-center items-center">
                      <BsFacebook />
                      <BsLinkedin />
                      <BsFillPhoneVibrateFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutTeam;