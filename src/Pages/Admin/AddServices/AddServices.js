import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://shielded-basin-54972.herokuapp.com/services', data)
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
            <h2 className="my-5">Please Add Packages for <br/> New Destination</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-2 w-75" {...register("name", { required: true, maxLength: 100 })} placeholder="Package Name" /><br/>
                <textarea className="mb-2 w-75" {...register("description")} placeholder="Package Description"/><br/>
                <input className="mb-2 w-75" type="price" {...register("price")} placeholder="Price" /><br/>
                <input className="mb-4 w-75" {...register("image")} placeholder="Add Image" /><br/>
                <input type="submit" value="Add Packages"/>
            </form>
        </div>
    );
};

export default AddServices;