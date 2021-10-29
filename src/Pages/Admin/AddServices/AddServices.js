import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('added successfully');
            }
            reset();
        })
    }

    return (
        <div className="addServices">
            <h2 className="my-5">Please Add Packages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Package Name" /><br/>
                <textarea {...register("description")} placeholder="Package Description"/><br/>
                <input type="price" {...register("price")} placeholder="Price" /><br/>
                <input {...register("image")} placeholder="Add Image" /><br/>
                <input type="submit" value="Add Packages"/>
            </form>
        </div>
    );
};

export default AddServices;