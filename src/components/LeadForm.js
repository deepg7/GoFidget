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
    if(name=='' || email =="" || type=='' || phone==''){
        return window.alert('Enter All Details')
    }
    const lead = {name,email,phone,type,id:Math.floor(Math.random() * 1000000)}
    props.onLeadSubmit(lead)
    console.log(lead)
}


    return (
        <form onSubmit={submitHandler} id ='lf' className="m-4 p-2 border-black border-2 rounded-2xl w-1/3 text-center">
        <input placeholder="Name" onChange={nameChangeHandler} className="border-black border-2 m-2 p-2 rounded-lg"/><br/>
        <input placeholder="Email" type='Email' onChange={emailChangeHandler} className="m-2 border-black border-2 p-2 rounded-lg"/><br/>
        <input type="number" placeholder="Phone" onChange={phoneChangeHandler} className="m-2 border-black border-2 p-2 rounded-lg"/> <br/>
        <select onChange={typeChangeHandler} className="border-black border-2 m-2 p-2 rounded-lg"><br/>
        <option className="m-2 p-2" value="" disabled selected>Type of Insurance</option>
            <option value="Motor Insurance">Motor</option>
            <option value="Health Insurance">health</option>
            <option value="Life Insurance">life</option>
            <option value="Travel Insurance">travel</option>
        </select><br/>
        <button type="submit" className="bg-primary rounded-md border-black border-2 border-solid bg-blue-400 m-2 p-2">Add Lead</button>
        </form>
    );
}
export default LeadForm
//<input placeholder="Email" type='Email' onChange={emailChangeHandler} className="m-2 border-black border-2 p-2 rounded-lg"/><br/>