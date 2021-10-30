import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

const NewsLetter = () => {
    return (
        <div className=" bg-light pb-5">
            <h2 className="mt-5 text-success p-5">HEY YOU, SIGN UP AND <br/>CONNECT TO AIRCLOUD! <br/><small>Be the first to learn about our latest packages and get exclusive offers</small></h2>
            <Container className="text-center">
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Enter Your Email Address"
                    className="me-1"
                    />
                    <Button variant="outline-success">Send</Button>
                </Form>
            </Container>
            <p><small>Will be used in accordance with our Privacy Policy</small></p>
        </div>
    );
};

export default NewsLetter;