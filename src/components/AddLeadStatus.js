 import { useState } from "react";


function AddLeadStatus(props){
const[id,setId]=useState('')
const[status,setStatus]=useState('')
const[update,setUpdate]=useState('')
const[sale_value,setSale]=useState('')

const statusChangeHandler = (event) =>{setStatus(event.target.value)}
const idChangeHandler = (event) =>{setId(event.target.value)}
const saleChangeHandler = (event) =>{setSale(event.target.value)}
const updateChangeHandler = (event) =>{setUpdate(event.target.value)}
const submitHandler = (event) =>{
    event.preventDefault()
    const leadStatus = {id,status,updates:update,sale_value}
    props.onLeadStatusSubmit(leadStatus)

}
    return(
        <form onSubmit={submitHandler} id ='lf' className="m-4 p-2 border-black border-2 rounded-2xl w-1/3 text-center" >
        <input className="border-black border-2 m-2 p-2 rounded-lg" type="text" placeholder="Lead Id" onChange={idChangeHandler}></input><br/>
        <input className="border-black border-2 m-2 p-2 rounded-lg" type="text" placeholder="Updates" onChange={updateChangeHandler}></input><br/>
        <select className="border-black border-2 m-2 p-2 rounded-lg" onChange={statusChangeHandler}>
            <option value="Status" disabled selected>Select Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
        </select><br/>
        <input className="border-black border-2 m-2 p-2 rounded-lg" type="number" onChange={saleChangeHandler} placeholder="Sale Value"></input><br/>
        <button id="leadFormButton" className="mp text-white border-solid border-2 border-black rounded-md shadow-2xl" type="submit">Submit Status</button>
        </form>
    );
}

export default AddLeadStatus