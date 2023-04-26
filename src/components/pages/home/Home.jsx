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
import AboutTeam from './OthersDesign/AboutTeam';
import PopularRestaurants from './OthersDesign/PopularRestaurants';
import Celebration from './OthersDesign/Celebration';


const Home = () => {
    return (
      <div>
        <SearchHero />
        <WelcomeRestaurant/>
        <Menus/>
        <PopularRestaurants/>
        <Celebration/>
        <HowItWorks />
        <Restaurants/>
        <TwoCart />
        <About />
        <AboutTeam/>

        <MobileApp />
        <Reviews />
      </div>
    );
};

export default Home;