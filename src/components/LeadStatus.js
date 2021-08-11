import { useState } from "react";
import AddLeadStatus from "./AddLeadStatus";
import ViewLeadStatus from "./ViewLeadStatus";
import leadStatuses from "../leadStatus_data";
import { useParams } from "react-router-dom";
function LeadStatus(){
    const [leadStatusArr,setLeadStatus]=useState(leadStatuses)
  
    const leadStatusSubmitHandler = (enteredStatus)=>{
      setLeadStatus(prev=>{
        return [enteredStatus,...prev]
      })
    }
    let final = []
    
 let {id} = useParams()
//  const filter =()=> {
//     console.log(leadStatusArr)
//      if(id!=='all'){
//          console.log(leadStatusArr)
//         leadStatusArr.forEach(lead=>{
//             console.log(leadStatusArr)
//             if(Number(lead.id)===(id)){
//                 final.push(lead)
//             }
//         })
//         console.log(final)
//      }
//      else{
//          final = leadStatusArr
//      }
//  }
    return(
        <div>
        <AddLeadStatus onLeadStatusSubmit={leadStatusSubmitHandler}/>
              <div className='flex flex-row'>
                  {leadStatusArr.map(lead=>
                    <ViewLeadStatus id={lead.id} status={lead.status} sale_value ={lead.sale_value} updates={lead.updates}/>)}
              </div>
        </div>
    );
}

export default LeadStatus