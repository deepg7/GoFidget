import {BrowserRouter as Router,Route,Switch, useParams} from 'react-router-dom';
import './App.css';
import {useState} from 'react';
// import LeadForm  from './components/LeadForm';
// import ViewLead from './components/ViewLead';
import AddLeadStatus from './components/AddLeadStatus';
import NavBar from './components/NavBar';
// import leads from './leads_data';
import leadStatuses from './leadStatus_data';
import ViewLeadStatus from './components/ViewLeadStatus';
import Lead from './components/Lead';
function App() {
  const [leadStatusArr,setLeadStatus]=useState(leadStatuses)
  // const[leadsArr,setLeads]=useState(leads)
  // const leadSubmitHandler=(enteredLead)=>{
  //     setLeads(prevLeads=>{
  //       return [enteredLead,...prevLeads]
  //     })
  // }

  const leadStatusSubmitHandler = (enteredStatus)=>{
    setLeadStatus(prev=>{
      return [enteredStatus,...prev]
    })
  }
  
  return (
    <Router>
    <NavBar/>
      <div className="">
        <Switch>
          <Route exact path="/">
            <Lead/>
          </Route>
          <Route exact path="/leadStatus/:id">

              <AddLeadStatus onLeadStatusSubmit={leadStatusSubmitHandler}/>
              <div className='flex flex-row'>
                  
                  {leadStatusArr.map(lead=><ViewLeadStatus id={lead.id} status={lead.status} sale_value ={lead.sale_value} updates={lead.updates}/>)}
              </div>
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
