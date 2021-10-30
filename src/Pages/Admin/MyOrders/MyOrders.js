import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OrderList from '../OrderList/OrderList';

const MyOrders = () => {
    const [orderLists, setOrderLists] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=>res.json())
        .then(data=>setOrderLists(data))
    },[])
    return (
        <div>
            <h2 className="my-5">My Order Details</h2>
            {
                orderLists.map(ol =><OrderList
                    key={ol._id}
                    ol={ol}
                ></OrderList>)
            }
        </div>
    );
};

export default MyOrders;