import React from 'react';
import SearchHero from './OthersDesign/SearchHero';
import MobileApp from './OthersDesign/MobileApp';
import HowItWorks from './OthersDesign/HowItWorks';
import Reviews from './reviews/Reviews';
import About from './OthersDesign/About';
import TwoCart from './OthersDesign/TwoCart';
import Restaurants from './Restaurants.jsx/Restaurants';
import WelcomeRestaurant from './OthersDesign/WelcomeRestaurant';
import Menus from './OthersDesign/Menus';


const Home = () => {
    return (
      <div>
        <SearchHero />
        <WelcomeRestaurant/>
        <Menus/>
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