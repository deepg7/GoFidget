//import { useParams } from "react-router-dom";
import './ViewLead.css'
function ViewLeadStatus(props){

    return (
        <div id="viewLead" className="w-1/5 rounded-2xl m-4 p-2 border-solid border-2 border-white text-center">
        <div className="mp">{props.id}</div>
        <div className="mp">{props.updates}</div>
        <div className="mp">{props.status}</div>
        <div className="mp">{props.sale_value}</div>
        </div>
    );
}

export default ViewLeadStatus