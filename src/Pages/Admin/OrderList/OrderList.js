import React from 'react';

const OrderList = ({ol}) => {
    const {name, email} = ol;
    return (
        <div>
            <h6>Name: {name} Email: {email}</h6>
        </div>
    );
};

export default OrderList;