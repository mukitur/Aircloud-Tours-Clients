import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faMobileAlt, faEnvelopeOpenText  } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fb from '../../../images/social/fb-icon.png';
import ln from '../../../images/social/ln-icon.png';
import yt from '../../../images/social/yt-icon.png';
import tw from '../../../images/social/twitter.png';


const Footer = () => {
    return (
        <div className="bg-light text-dark mt-5">
            <Container>
                <Row>
                    <Col className="my-5" md={4}>
                        <h4>Find us on</h4>
                        <p>
                            <img className="mb-3" src= {fb} width="25px" height="25px" alt=""/> {''}
                            <img className="mb-3" src= {ln} width="25px" height="25px" alt=""/> {''}
                            <img className="mb-3" src= {yt} width="25px" height="25px" alt=""/> {''}
                            <img className="mb-3" src= {tw} width="25px" height="25px" alt=""/>
                        </p>
                        <h6>Your Trusted Travel Partner</h6>
                        

                    </Col>
                    <Col className="my-5 text-start"  md={4}>
                        <h4>Quick Links</h4>
                        <ul>
                            <Link className="text-dark" style={{ textDecoration: 'none'}} to ="/about" ><li>About Us</li></Link>
                            <Link className="text-dark" style={{ textDecoration: 'none'}} to ="/" ><li>Add Services</li></Link>
                            <Link className="text-dark" style={{ textDecoration: 'none'}} to ="/" ><li>Manage Services</li></Link>
                            <Link className="text-dark" style={{ textDecoration: 'none'}} to ="/" ><li>Order Status</li></Link>
                            <Link className="text-dark" style={{ textDecoration: 'none'}} to ="/login" ><li>Login</li></Link>
                        </ul>
                    </Col>
                    <Col className="my-5 text-start" xs={6} md={4}>
                        <h4>Booking Office</h4>
                        <p> <FontAwesomeIcon icon={faAddressBook} /> House#20, Road# 02, Uttara, Dhaka</p>
                        <p><FontAwesomeIcon icon={faMobileAlt} /> +880 1715 0555 63</p>
                        <p><FontAwesomeIcon icon={faEnvelopeOpenText} /> info@aaircloud.com</p>
                    </Col>
                </Row>
            </Container>
            <p><small className="bg-light my-3">copyright@2021. All  rights reserved</small></p>
        </div>
    );
};

export default Footer;