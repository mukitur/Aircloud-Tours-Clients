import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faMobileAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import banner from '../../../images/aboutus-banner.jpg';
import { useForm } from "react-hook-form";

const Contact = () => {
    return (
        <div>
            <h2 className="my-5"><img src ={banner} width={"100%"} alt=""/></h2>
            <Container>
                <Row className="text-start">
                    <Col sm={6}>
                        <h2>Contact Address</h2>
                        <p>Head Office & sales Office:<br/>
                            <FontAwesomeIcon icon={faAddressBook} /> House#20, Road#20, Sector#11, Uttara, Dhaka-1230.</p>
                    </Col>
                    <Col sm={6} className="text-center">
                        <h2 v>Contact Details</h2>
                        <p><FontAwesomeIcon icon={faMobileAlt} /> +880 111 444 000</p>
                        <p><FontAwesomeIcon icon={faMobileAlt} /> +880 222 444 001</p>
                        <p><FontAwesomeIcon icon={faEnvelopeOpenText} /> info@aircloud.com</p>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default Contact;