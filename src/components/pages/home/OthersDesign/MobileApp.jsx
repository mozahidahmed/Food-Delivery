import React from 'react';
import { RxAvatar } from 'react-icons/rx';

const MobileApp = () => {
    return (
        <div className='px-12 py-6 bg-[#dee2e6]'>
            <div className="grid lg:grid-cols-2 justify-center items-center">
                <div className="">
                    <h2 className='font-bold text-red-600'>BEST APP FOR FOODS ORDERING</h2>
                    <h1 className='text-4xl font-bold text-black'>Manage Your Restaurant <br /> Anytime! Anywhere!</h1>
                   <div className="mt-6">
                     <div className="flex  gap-2 items-center">
                        <RxAvatar/>
                        <p>Higher Reach - Minimal Effort</p>
                    </div>
                    <div className="flex  gap-2 items-center">
                        <RxAvatar/>
                        <p>Showcase your Brand</p>
                    </div>
                    <div className="flex  gap-2 items-center">
                        <RxAvatar/>
                        <p>Exclusive offers & discounts</p>
                    </div>
                   </div>
                </div>



                <div className="">
                    <img src="https://winsfolio.net/html/foodio/assets/img/manage-your.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileApp;