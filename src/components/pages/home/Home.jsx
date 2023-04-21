import React from 'react';
import SearchHero from './OthersDesign/SearchHero';
import MobileApp from './OthersDesign/MobileApp';
import HowItWorks from './OthersDesign/HowItWorks';
import Reviews from './reviews/Reviews';
import About from './OthersDesign/About';
import TwoCart from './OthersDesign/TwoCart';
import Restaurants from './Restaurants.jsx/Restaurants';


const Home = () => {
    return (
      <div>
        <SearchHero />
        <HowItWorks />
       <Restaurants/>
        <TwoCart />
        <About />

        <MobileApp />
        <Reviews />
      </div>
    );
};

export default Home;