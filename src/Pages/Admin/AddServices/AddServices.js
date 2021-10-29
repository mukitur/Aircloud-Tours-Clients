//import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="addServices">
            <h2 className="my-5">Please Add Packages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" /><br/>
                <textarea {...register("description")} placeholder="Package Description"/><br/>
                <input type="price" {...register("Price")} placeholder="Price" /><br/>
                <input type="submit" value="Add Packages"/>
            </form>
        </div>
    );
};

export default AddServices;