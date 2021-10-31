import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
//import OrderList from '../OrderList/OrderList';

const MyOrders = () => {
    const [orderLists, setOrderLists] = useState([]);
    const {user} = useAuth();
    useEffect(()=>{
        fetch('https://shielded-basin-54972.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrderLists(data))
    },[])
    console.log(orderLists);
    const getMyOrders = orderLists.filter(od=>od.email === user?.email)
    console.log(getMyOrders);
    
    return (
        <div>
            <h2 className="my-5">My Order Details</h2>
            <Row xs={2} md={3} className="g-4">
                {
                    getMyOrders.map(odr=><MyOrder
                    key={odr._id}
                    odr={odr}
                    ></MyOrder>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;