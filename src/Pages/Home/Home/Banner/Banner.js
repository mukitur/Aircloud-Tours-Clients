import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImage from '../../../../images/banner1.jpg';
import bannerImage1 from '../../../../images/banner2.jpg';
import bannerImage2 from '../../../../images/banner3.jpg';


const Banner = () => {
    return (
        <div>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImage}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImage1}
                alt="Second slide"
                />  
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImage2}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;