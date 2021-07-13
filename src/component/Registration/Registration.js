import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
    const [form, setForm] = useState({});

    const formHandler=async(e)=>{
        e.preventDefault() 
       const temp= await axios.post("http://localhost:8080/reg",form)
       toast.success(`🦄 User Created !!! Please Note Your UserId ${temp.data}`, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
       console.log(temp)
    }


  

    return (
        <div className="container">
            {/* <div className="photo">
        <img src="https://images.unsplash.com/photo-1626005447907-f081d4f0a34e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" srcset="" />
            </div> */}
               <ToastContainer />
            <form onSubmit={formHandler} className="form">

                    <h2>Registration Form</h2>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(e)=>setForm({...form,name:e.target.value})} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e)=>setForm({...form,password:e.target.value})} />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={(e)=>setForm({...form,email:e.target.value})} />

                <label htmlFor="address">Address</label>
                <input type="text" name="address" onChange={(e)=>setForm({...form,address:e.target.value})}  />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
