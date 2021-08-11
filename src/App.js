import {BrowserRouter as Router,Route,Switch, useParams} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Lead from './components/Lead';
import LeadStatus from './components/LeadStatus';
import Commission from'./components/Commission';
function App() {
 
  
  return (
    <Router>
    <NavBar/>
      <div className="">
        <Switch>
          <Route exact path="/addLead">
            <Lead/>
          </Route>
          <Route exact path="/leadStatus/:id">
            <LeadStatus/>              
          </Route>
          <Route exact path="/commission">
          <Commission/>
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
