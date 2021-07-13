import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
const Feedback = () => {
    const [form, setForm] = useState({});
    const [getForm, setgetForm] = useState([]);
    const formHandler=async(e)=>{
        e.preventDefault() 
        console.log(form)
       const temp= await axios.post("http://localhost:8080/fb",form)
       console.log(temp)
    }


     const getFeedback=async(e)=>{
        e.preventDefault() 
        const tempFb= await axios.get("http://localhost:8080/fb")
        console.log(tempFb.data)
        setgetForm(tempFb.data);
     }
     

    return (
        <div className="container">
           <div>

           </div>
            
          <div>
          <form onSubmit={formHandler} className="form">
                    <h2>Feedback Form</h2>
                <label htmlFor="name">userId</label>
                <input type="number" name="userId" onChange={(e)=>setForm({...form,userId:e.target.value})} />

                <label htmlFor="para">Feedback</label>
                <input type="text" name="text" onChange={(e)=>setForm({...form,feedback:e.target.value})} />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={(e)=>setForm({...form,email:e.target.value})} />
                <label htmlFor="Course">Course</label>
                <input type="text" name="email" onChange={(e)=>setForm({...form,course:e.target.value})} />

               
                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
}

export default Feedback;
