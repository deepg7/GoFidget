
import ViewLeadStatus from "./ViewLeadStatus";
import './ViewLead.css'
import { Link } from "react-router-dom";
function ViewLead(props){
    return(
        <div id="viewLead" className="w-1/5 rounded-2xl m-4 p-2 border-solid border-2 border-white text-center">
            <div className="mp">POS ID: {props.pos_id}</div>
            <div className="mp">Name: {props.name}</div>
            <a href={`mailto:${props.email}`} className="mp">Mail: {props.email}</a>
            <div className="mp">Lead ID: {props.id}</div>
            <div className="mp">Type: {props.type}</div>
            <div className="mp">{props.phone}</div>
            <Link to={`/leadStatus/${props.id}`} id="leadFormButton" className="mp text-white border-solid border-2 border-black rounded-md shadow-2xl">Check Status</Link>
        </div>
    );
}

export default ViewLead