import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinglePackage = ({sp}) => {
    const {name, description, image, price, _id} = sp;
    return (
        <div>
            <Container>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image} alt =""/>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description.slice(0, 120)}</Card.Text>
                        <Card.Text><h5 className="text-warning">BDT {price}</h5> </Card.Text>
                        </Card.Body>
                        <Link to ={`/booking/${_id}`} >
                            <Button className="mb-3">Book {name}</Button>
                        </Link>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default SinglePackage;