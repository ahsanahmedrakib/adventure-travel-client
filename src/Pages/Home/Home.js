import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Newsletter from '../Newslatter/Newsletter';
import RecentTrip from '../RecentTrip/RecentTrip';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="my-home">
            <Banner></Banner>
            <Destination></Destination>
            <Newsletter></Newsletter>
            <Services></Services>
            <RecentTrip></RecentTrip>
        </div>
    );
};

export default Home;