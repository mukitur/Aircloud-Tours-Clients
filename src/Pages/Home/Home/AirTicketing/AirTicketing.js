import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import intl from '../../../../images/International-Air-Ticketing.jpg';
import domestic  from '../../../../images/domestic-air-ticketing.jpg';

const AirTicketing = () => {
    return (
        <div>
            <h2 className="my-5 text-success bg-light p-5">CHOOSE YOUR FAVOURATE AIRLINES <br/>FOR YOUR BUSINESS TRIP <br/>AND DISCOVER LUXURY TRAVEL</h2>

            <Container>
                <Row className="text-start">
                    <Col sm={6}>
                        <img src={intl} width={"100%"} alt=""/>
                        
                    </Col>
                    <Col sm={6} className="text-center">
                        <img src={domestic} width={"100%"} alt=""/>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AirTicketing;