import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import {Link} from "react-router-dom"
export default function Admin() {
    
    const [form, setForm] = useState({});
    const [temp, setTemp] = useState(false);

    const formHandler=async(e)=>{
        e.preventDefault() 
        console.log(form)
       const temp= await axios.get(`http://localhost:8080/admin/${form.Id}`)
       if(temp.data==true){
          setTemp(true)
       }else{
           console.log("please login")
       }
        
    }
    

    return (
        <div className="admin">
        {
                        temp?(
                        <div>
                            <Header prop={temp} />
                               
                        </div>
                        
                        ):
                        <h3>please Login First</h3>
                    }
            <div className="heading">
                <h2>Admin Portal</h2>
            </div>

            <div className="admin_login">
            <form onSubmit={formHandler} className="form">
                  
                <label htmlFor="name">Id</label>
                <input type="number" name="userId" onChange={(e)=>setForm({...form,Id:e.target.value})} />

                <label htmlFor="para">Name</label>
                <input type="text" name="text" onChange={(e)=>setForm({...form,name:e.target.value})} />

                <label htmlFor="email">Password</label>
                <input type="text" name="email" onChange={(e)=>setForm({...form,password:e.target.value})} />

               
                <button type="submit">Submit</button>
            </form>
            
            </div>
        </div>
    )
}
