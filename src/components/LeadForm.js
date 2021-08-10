import { useState } from "react"
import './LeadForm.css'
function LeadForm(props){

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[type,setType]=useState('')

    const nameChangeHandler = (event)=>{setName(event.target.value)}
    const emailChangeHandler = (event) =>{setEmail(event.target.value)}
    const phoneChangeHandler = (event)=>{setPhone(event.target.value)}
    const typeChangeHandler = (event)=>{setType(event.target.value)}

const submitHandler=(event)=>{
    event.preventDefault()
    const lead = {name,email,phone,type,id:Math.floor(Math.random() * 1000000)}
    props.onLeadSubmit(lead)
    console.log(lead)
}


    return (
        <form onSubmit={submitHandler} className="m-2">
        Add a new Lead<br/>
        <input placeholder="Name" onChange={nameChangeHandler}/><br/>
        <input placeholder="Email" type='Email' onChange={emailChangeHandler}/><br/>
        <input type="number" placeholder="Phone" onChange={phoneChangeHandler}/> <br/>
        <select onChange={typeChangeHandler}><br/>
        <option value="" disabled selected>Type of Insurance</option>
            <option value="motor insurance">Motor</option>
            <option value="health insurance">health</option>
            <option value="life insurance">life</option>
            <option value="travel insurance">travel</option>
        </select><br/>
        <button type="submit" className="bg-gray-300">HI</button>
        </form>
    );
}
export default LeadForm