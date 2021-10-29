import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';

const SinglePackage = ({sp}) => {
    const {name, description, image, price} = sp;
    return (
        <div>
            <Container>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={image} alt =""/>
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description.slice(0,100)}</Card.Text>
                        <Card.Text><h5 className="text-warning">BDT {price}</h5> </Card.Text>
                        </Card.Body>
                        <Button>Book {name}</Button>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default SinglePackage;