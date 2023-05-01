import React from 'react';
import SearchHero from './OthersDesign/SearchHero';
import MobileApp from './OthersDesign/MobileApp';
import Reviews from './reviews/Reviews';
import About from './OthersDesign/About';
import TwoCart from './OthersDesign/TwoCart';
import Restaurants from './Restaurants.jsx/Restaurants';
import AboutRestaurant from "./OthersDesign/AboutRestaurant";
import Menus from './OthersDesign/Menus';
import AboutTeam from './OthersDesign/AboutTeam';
import Celebration from '../celebration/Celebration';
import Ldb from '../bdl/Ldb';
import OtherInformation from './OthersDesign/OtherInformation';
import OrderNow from './OthersDesign/OrderNow';
// import Looking from './OthersDesign/Looking';




const Home = () => {
    return (
      <div>
        <SearchHero />
        <AboutRestaurant />
        <Ldb />
        <Menus />
        <Restaurants />
        <Celebration />

        <OtherInformation />
        <TwoCart />

        {/* <Looking/> */}
        <About />
        <MobileApp />
        <AboutTeam />
        <Reviews />
        <OrderNow />
      </div>
    );
};

export default Home;