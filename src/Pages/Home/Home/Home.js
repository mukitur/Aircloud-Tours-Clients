import React from 'react';
import Packages from '../Packages/Packages';
import AirTicketing from './AirTicketing/AirTicketing';
import Banner from './Banner/Banner';
import NewsLetter from './NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <AirTicketing></AirTicketing>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;