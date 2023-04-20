import React from 'react';
import SearchHero from './OthersDesign/SearchHero';
import MobileApp from './OthersDesign/MobileApp';
import HowItWorks from './OthersDesign/HowItWorks';
import Reviews from '../reviews/Reviews';

const Home = () => {
    return (
        <div>
            <SearchHero/>
            <HowItWorks/>
            <MobileApp/>
            <Reviews/>
        </div>
    );
};

export default Home;