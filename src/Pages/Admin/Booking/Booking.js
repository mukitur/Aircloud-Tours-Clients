import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const [singlePackage, setsinglePackage] = useState({});
    const {id} = useParams();
    useEffect( () => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setsinglePackage(data))
    },[])
    return (
        <div>
            <h3 className="my-5">Thanks for Choosing AIRCLOUD...</h3>
            
            <Container>
                <Row className="text-start">
                    <Col sm={6}>
                        <img className="rounded" src = {singlePackage.image} width={'100%'} alt="" />
                        <p className="mt-3">Tour Details: {singlePackage.description} </p>
                        <h3 className="text-warning">COST: BDT {singlePackage.price}</h3>
                    </Col>
                    <Col sm={6}>
                        <h2>{singlePackage.name}</h2>
                        <p><small>your Booking Id: {id}</small></p>
                        <p>Tour Details: {singlePackage.description} </p>
                        <h3 className="text-warning">COST: BDT {singlePackage.price}</h3>
                        <Button>Place Order</Button>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default Booking;