import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
const Feedback = () => {
    
    const [getForm, setgetForm] = useState([]);
 


     const getFeedback=async(e)=>{
     
        const tempFb= await axios.get("http://localhost:8080/fb")
        console.log(tempFb.data)
        setgetForm(tempFb.data);
     }
     useEffect(() => {
        getFeedback()
     }, [])

    return (
        <div className="getFB">
           <div>
        <h1>FB</h1>
           </div>
            {
                getForm.map((e)=>{
                    return(
                        <div className="fbadmin">
                            <h3>{e.para}</h3>
                            <p>{e.email}</p>
                        </div>

                    )
                })
            }
        </div>
    );
}

export default Feedback;
