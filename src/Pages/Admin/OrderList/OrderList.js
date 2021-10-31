import React, { useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderList = ({ol}) => {
    const {name, email,cell, address,status} = ol;
    const [services, setServices] = useState([]);

    const handleDelete = id=>{
       const proceed = window.confirm('Are you sure? Do you want to delete the order?')
       if(proceed){
        const url =`https://shielded-basin-54972.herokuapp.com/deleteorders/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert('Order Successfully Deleted') 
            }
        })
       }
    }
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
                        <Link  className="text-start mb-3 ms-2" to ={"/"} >
                            <Button>Update Status</Button>
                        </Link>
                        <Link  className="text-start mb-3 ms-2" to ={"/manageorders"} >
                            <Button onClick= {()=> handleDelete(ol._id)}>Delete Order</Button>
                        </Link>
                    </Card>
                </Col>
            </Container>
            
        </div>
    );
};

export default OrderList;