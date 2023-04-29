import React from 'react';
import SearchHero from './OthersDesign/SearchHero';
import MobileApp from './OthersDesign/MobileApp';
import HowItWorks from './OthersDesign/HowItWorks';
import Reviews from './reviews/Reviews';
import About from './OthersDesign/About';
import TwoCart from './OthersDesign/TwoCart';
import Restaurants from './Restaurants.jsx/Restaurants';
import AboutRestaurant from "./OthersDesign/AboutRestaurant";
import Menus from './OthersDesign/Menus';
import AboutTeam from './OthersDesign/AboutTeam';
import PopularRestaurants from './OthersDesign/PopularRestaurants';
import Celebration from './OthersDesign/Celebration';
import Ldb from './OthersDesign/Ldb';



const Home = () => {
    return (
      <div>
        <SearchHero />
        <AboutRestaurant />
        <Ldb />
        <Menus />
        <Restaurants />
        <PopularRestaurants />
        <Celebration />
        <AboutRestaurant />
        <HowItWorks />

        <TwoCart />
        <About />

        <AboutTeam />

        <MobileApp />
        <Reviews />
      </div>
    );
};

export default Home;