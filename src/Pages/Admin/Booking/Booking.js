import React, { useEffect, useState } from 'react';
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
            <h2>Booking Page id: {id}</h2>
            {
                <h2>{singlePackage.name}</h2>
            }
        </div>
    );
};

export default Booking;