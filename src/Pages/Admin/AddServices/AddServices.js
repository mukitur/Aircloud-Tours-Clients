//import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
//import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="addServices">
            <h2 className="my-5">Please Add Packages</h2>
            
        </div>
    );
};

export default AddServices;