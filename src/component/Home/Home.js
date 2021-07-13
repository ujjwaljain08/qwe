import React from 'react'
import {Link } from "react-router-dom"
export default function Home( ) {
    return (
        <div className="home headerLink">
            <Link to="/home"><h1>Home</h1></Link>
           
            <div className="links">
                <Link target="_blank" style={{padding:"15px"}} to="/admin">Admin Login</Link>
                <Link style={{padding:"15px"}} to="/login">Student Login</Link>
                <Link style={{padding:"15px"}} to="/registration">Student Registration</Link>
            </div>

            
        </div>
    )
}
