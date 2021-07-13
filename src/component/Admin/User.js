import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function User() {
    const [getForm, setgetForm] = useState([]);
    const formHandler=async(e)=>{
       const temp= await axios.get("http://localhost:8080/reg")
       console.log(temp.data)
       setgetForm(temp.data)
    }
    useEffect(() => {
       formHandler();
    }, []);
    return (
        <div>
            <h1>Registration Details</h1>
            <div style={{display:"flex" ,padding:"5px"}}>
                <h2  style={{margin:"1px",padding:"15px"}}>UserId</h2>
                <h2 style={{margin:"1px",padding:"15px"}}>Name</h2>
                <h2 style={{margin:"1px",padding:"15px"}}>Email</h2>
                <h2 style={{margin:"1px",padding:"15px"}}>Address</h2>
            </div>
            {
                
                getForm.map((e)=>{
                    return(
                        <div>
                            
                              <div style={{display:"flex"}}>
                                    <p style={{margin:"15px",padding:"15px"}}>{e.userid}</p>
                                    <p style={{margin:"15px",padding:"15px"}}>{e.name}</p>
                                    <p style={{margin:"15px",padding:"15px"}}>{e.email}</p>
                                    <p style={{margin:"15px",padding:"15px"}}> {e.address}</p>
                        </div>
                        </div>
                      
                    )
                })
            }
        </div>
    )
}
