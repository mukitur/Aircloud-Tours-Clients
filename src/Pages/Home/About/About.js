import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/aboutus-banner.jpg';

const About = () => {
    return (
        <div>
            <h2><img src ={banner} alt=""/></h2>
            <div className="text-start mx-5 my-5">
                <h1>Welcome to AirCloud Tours</h1>
                <p>AirCloud is a full-service Outbound Tour Operator in Bangladesh. The founder of AirCloud is a 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy. Our specialized departments with expertise offer a variety of services. Each department works independently to provide the best services to our customers& clients and become the best travel agency in Bangladesh, focusing on creating friendship and a long-lasting relationship with our beloved clients. In the year 2010, we decided to create a tour company by the name AirCloud to specialize in the receptive tourism market and to achieve the title of the best tours and travel company in Bangladesh. In this regard, we have contracts and alliances with most of the hotels, tourist organizations & companies in most of the countries around the world that help us provide the best quality service to our clients. Therefore, we investigate every single detail of your trip, to ensure each sector has all the ingredients to satisfy our clients and help us become the best tour operator in Bangladesh. </p>
                <button className="bg-white">
                    <Link to = "/packages">View Tour Packages</Link>     
                </button>
            </div>
            
            <div className="text-start mx-5 my-4 bg-light p-3">
                <h3>Our Vision</h3>
                <p>To dominate the tourism industry by excellence in service with innovation & creative concepts in the global marketplace for our clients that will help us achieve the title of best travel agency in Bangladesh.  </p>
            </div>
            <div className="text-start mx-5 my-4 bg-light p-3">
                <h3>Our Mission</h3>
                <p>Provide our clients with unforgettable travel experiences with guaranteed more than satisfactory services that exceed the level of their expectations.    </p>
            </div>
        </div>
    );
};

export default About;