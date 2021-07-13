import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react';

import {Link } from "react-router-dom"


export default function Course() {
    const [form, setForm] = useState({});
    const [course, setCourse] = useState([]);

    const formHandler=async(e)=>{
        e.preventDefault() 
        console.log(form)
       const temp= await axios.post(`http://localhost:8080/course`,form)
       setForm({...form,title:"",desc:""})
    }

    const getCourse=async()=>{
        const temp= await axios.get(`http://localhost:8080/courses`)
        setCourse(temp.data)
        console.log(temp.data)
    }
        useEffect(() => {
            getCourse()
        }, []);

        useEffect(() => {
           getCourse()
            
        }, [formHandler]);

         
    return (
       <div className="course">
           <div className="headerLink" >
           <Link  style={{padding:"15px"}} to="/login">Home</Link>
           </div>
          
            <div >
                    <h2>Present Course</h2>
                    {
                      course.map((e)=>{
                         return(   <div className="icourse">
                                <h2>{e.title}</h2>
                                <p>{e.desc}</p>
                            </div>
                         )
                      })
                    }
            </div>
        <div className="inForm">
               <form   onSubmit={formHandler} className="form">
                  <h2>Add Course</h2>
                  <label htmlFor="name">Tilte</label>
                  <input type="text" name="userId" onChange={(e)=>setForm({...form,title:e.target.value})} />
  
                  <label htmlFor="para">Desc</label>
                  <input type="text" name="text" onChange={(e)=>setForm({...form,desc:e.target.value})} />
   
  
                 
                  <button type="submit">Submit</button>
              </form>
        </div>
       </div>
    )
}
