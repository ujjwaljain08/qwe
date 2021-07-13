import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function User() {
    const [getForm, setgetForm] = useState([]);
    const [form, setForm] = useState({});

    const formHandler=async(e)=>{
       const temp= await axios.put("http://localhost:8080/reg",form )
       console.log(temp.data)
       setgetForm(temp.data)
       toast.success(`🦄 User Updated ${temp.data}`, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

 

    return (
        <div>
                <ToastContainer />
                <form onSubmit={formHandler} className="form">

                        <h2>Update Registration Form</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"  onChange={(e)=>setForm({...form,userid:e.target.value})} />

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"  onChange={(e)=>setForm({...form,name:e.target.value})} />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={(e)=>setForm({...form,password:e.target.value})} />

                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={(e)=>setForm({...form,email:e.target.value})} />

                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" onChange={(e)=>setForm({...form,address:e.target.value})}  />
                        <button type="submit">Submit</button>
                </form>
        </div>
    )
}
