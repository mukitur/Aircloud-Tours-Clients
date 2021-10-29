import React from 'react';
import { Card } from 'react-bootstrap';
import bannerImage from '../../../../images/banner.jpg';

const Banner = () => {
    return (
        <div>
            <Card className="bg-dark text-dark border-white">
            <Card.Img src= {bannerImage} alt="Card image" />
            <Card.ImgOverlay>
                {/* <Link to = "/">
                    <Button variant="primary" size="lg"> Book Packages </Button>
                </Link> */}
            </Card.ImgOverlay>
          </Card>
        </div>
    );
};

export default Banner;