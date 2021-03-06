import React, { useEffect, useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
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
        const url = `https://shielded-basin-54972.herokuapp.com/services/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setsinglePackage(data))
    },[])

    const onSubmit = data => {
        console.log(data)
        axios.post('https://shielded-basin-54972.herokuapp.com/orders', data)
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
                    <Col sm={6} className="text-center">
                        <h2>{singlePackage.name}</h2>
                        <p><small className="text-success">Please fillup the form for complete the order.</small></p>
                        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                            <input className="mb-2 w-75" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 100 })} placeholder="Package Name" /><br/>
                            <input className="mb-2 w-75" defaultValue={user.email} {...register("email", { required: true, maxLength: 50 })} placeholder="Package Name" /><br/>
                            <input className="mb-2 w-75" type="number" {...register("cell")} placeholder="Cell Number" /><br/>
                            <textarea className="mb-2 w-75 rounded" {...register("address")} placeholder="Address"/><br/>
                           <input className="mb-4 w-75" {...register("city")} placeholder="City"/><br/>
                           <input className="mb-4 w-75" {...register("status")}  defaultValue="Pending"/><br/>
                            <input type="submit" value="Place Order"/>
                        </form>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default Booking;