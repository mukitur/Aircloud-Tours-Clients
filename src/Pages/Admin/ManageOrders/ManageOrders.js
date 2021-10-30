import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import OrderList from '../OrderList/OrderList';

const ManageOrders = () => {
    const [orderLists, setOrderLists] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrderLists(data))
    },[])

    return (
        <div>
            <h2 className="my-5">Manage All Orders</h2>
            <Row xs={2} md={3} className="g-4">
                {
                    orderLists.map(ol =><OrderList
                        key={ol._id}
                        ol={ol}
                    ></OrderList>)
                }
            </Row>
        </div>
    );
};

export default ManageOrders;