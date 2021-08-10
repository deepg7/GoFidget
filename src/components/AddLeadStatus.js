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
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="Lead Id" onChange={idChangeHandler}></input><br/>
        <input type="text" placeholder="Updates" onChange={updateChangeHandler}></input><br/>
        <select onChange={statusChangeHandler}>
            <option value="Status">Select Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
        </select><br/>
        <input type="number" onChange={saleChangeHandler} placeholder="Sale Value"></input>
        <button type="submit">Submit Status</button>
        </form>
    );
}

export default AddLeadStatus