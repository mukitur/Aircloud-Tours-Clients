import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const Booking = () => {
    const [singlePackage, setsinglePackage] = useState({});
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    useEffect( () => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setsinglePackage(data))
    },[])

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/orders', data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('Thank You, Successfully placed your order');
            }
            reset();
        })
    }


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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 100 })} placeholder="Package Name" /><br/>
                            <input defaultValue={user.email} {...register("email", { required: true, maxLength: 50 })} placeholder="Package Name" /><br/>
                            <input type="number" {...register("cell")} placeholder="Cell Number" /><br/>
                            <textarea {...register("address")} placeholder="Address"/><br/>
                           <input {...register("city")} placeholder="City"/><br/>
                          
                            <input type="submit" value="Place Order"/>
                        </form>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default Booking;