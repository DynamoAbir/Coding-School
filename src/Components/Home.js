import React from 'react';
import Banner from './Banner';
import Team from './Team';
import Features from './Features';
import Courses from './Courses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Features></Features>
            <Team></Team>
            
        </div>
    );
};

export default Home;