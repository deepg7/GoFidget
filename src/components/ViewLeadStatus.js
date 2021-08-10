//import { useParams } from "react-router-dom";

function ViewLeadStatus(props){

    return (
        <div className="m-4 p-2">
        {props.id}<br/>
        {props.updates}<br/>
        {props.status}<br/>
        {props.sale_value}<br/>
        </div>
    );
}

export default ViewLeadStatus