import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header/Header';


const Login = () => {
    const [form, setForm] = useState({});
    const [temp, setTemp] = useState(false);

    const formHandler=async(e)=>{
        e.preventDefault() 
       const temp= await axios.get(`http://localhost:8080/reg/${form.id}`)
       toast.success(`🦄 Login  !!!`, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        if(temp.data==true){
            setTemp(true)
          
        }
       console.log(temp)
    }


  

    return (
        <div className="container">
            {/* <div className="photo">
        <img src="https://images.unsplash.com/photo-1626005447907-f081d4f0a34e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" srcset="" />
            </div> */}
               <ToastContainer />
                
               {
                temp?(
                <div>
                    <Header log={temp} />
                       
                </div>
                
                ):
                <h3></h3>
            }


            <form onSubmit={formHandler} className="form">

                    <h2>Login Form</h2>

                        <label htmlFor="name">UserID</label>
                        <input type="text" name="name" onChange={(e)=>setForm({...form,id:e.target.value})} />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(e)=>setForm({...form,name:e.target.value})} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e)=>setForm({...form,password:e.target.value})} />
 
 
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
