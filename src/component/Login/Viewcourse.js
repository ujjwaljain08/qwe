import React from 'react'
import axios from 'axios';
import  { useEffect, useState } from 'react';

import {Link } from "react-router-dom"


export default function Viewcourse() {
    const [form, setForm] = useState({});
    const [course, setCourse] = useState([]);



    const getCourse=async()=>{
        const temp= await axios.get(`http://localhost:8080/courses`)
        setCourse(temp.data)
        console.log(temp.data)
    }
        useEffect(() => {
            getCourse()
        }, []);

  

         
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

       </div>
    )
}
