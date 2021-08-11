import { useState } from "react";
import {deals,commission} from '../closed_deals'
function Payout(){
    
    const[closed_deals,setDeals]=useState(deals)

    return(
        <div>
        {closed_deals}
        </div>
    );
}