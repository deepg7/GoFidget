import LeadForm from "./LeadForm";
import ViewLead from "./ViewLead";
import {useState} from 'react'
import leads from "../leads_data";

function Lead(){
    const[leadsArr,setLeads]=useState(leads)
    const leadSubmitHandler=(enteredLead)=>{
        setLeads(prevLeads=>{
          return [enteredLead,...prevLeads]
        })
    }
    return(
        <div>
        <div className="text-2xl font-bold m-2 text-white">Add a new Lead</div>
        <LeadForm onLeadSubmit={leadSubmitHandler}/>
          <div className="flex flex-row flex-wrap">
          {leadsArr.map(lead=><ViewLead name={lead.name} email={lead.email} id={lead.id} type={lead.type} phone={lead.phone} pos_id={lead.pos_id}/>)}
          </div>
        </div>
    );
}

export default Lead