
import ViewLeadStatus from "./ViewLeadStatus";
import './ViewLead.css'
import { Link } from "react-router-dom";
function ViewLead(props){
    function showStatus(){
            <ViewLeadStatus/>
        
    }
    return(

        <div className="bg-gray-100 rounded-2xl m-4 p-2">
        {props.name}<br/>
        {props.email}<br/>
        {props.id}<br/>
        {props.type}<br/>
        {props.phone}<br/>
        <Link to={`/leadStatus/${props.id}`} className="bg-blue-800 text-white">Check Status</Link>
        
        </div>
    );
}

export default ViewLead