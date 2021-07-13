import React from 'react'
import {Link} from "react-router-dom"
export default function Header({prop,log}) {
 
    return (
         
            <div >
            
        
               {
                 prop?(
                
                        <div className="headerLink">
                              <Link target="_blank"  style={{padding:"15px"}}  to="/fbadmin">View Feedback</Link>
                            <Link target="_blank"  style={{padding:"15px"}} to="/Courses">View/Add Couses</Link>
                            <Link target="_blank"  style={{padding:"15px"}} to="/user">View Registration </Link>
                        </div>
                  
                 ):
                 <div  className="elseheader" style={{padding:"15px" ,width:"100%",backgroundColor:"lightcyan"}}>
                        <h3  className="elseheader" >Please Login First</h3>
                 </div>
               
               }

               {
                      log?(
                            <div className="headerLink">
                              <Link target="_blank"  style={{padding:"15px"}}  to="/fb">Feedback</Link>
                            <Link target="_blank"  style={{padding:"15px"}} to="/viewcourse">View Couses</Link>
                            <Link target="_blank"  style={{padding:"15px"}} to="/updatedt">View Registration </Link>
                        </div>
                      ):
                      <div  className="elseheader" style={{padding:"15px" ,width:"100%",backgroundColor:"lightcyan"}}>
                    
                            </div>
               }
 
    </div>
 
    )
}
{/* <Link  to="/admin">Admin</Link>
<Link  to="/admin">Couses</Link>
<Link  to="/admin">Registration </Link> */}