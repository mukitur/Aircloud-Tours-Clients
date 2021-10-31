import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = ({odr}) => {
    const {name, email,cell, address,status} = odr;
    
    return (
        <div>
            <Container>
                <Col>
                    <Card>
                        <Card.Body>
                        <Card.Text className="text-start">Name:{name}</Card.Text>
                        <Card.Text><p className="text-start">Email: {email}</p> </Card.Text>
                        <Card.Text><p className="text-start">Phone: {cell}</p> </Card.Text>
                        <Card.Text><p className="text-start">Address: {address}</p> </Card.Text>
                        <Card.Text><p className="text-start">Status: {status}</p> </Card.Text>
                        </Card.Body>
                        <Link  className="text-start mb-3 ms-2" to ={"/manageorders"} >
                            <Button>Update Status</Button>
                        </Link>
                        {/* <Link  className="text-start mb-3 ms-2" to ={"/manageorders"} >
                            <Button onClick= {()=> handleDelete(ol._id)}>Delete Order</Button>
                        </Link> */}
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default MyOrder;