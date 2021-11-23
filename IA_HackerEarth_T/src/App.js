import './App.css';
import React,{useState}  from 'react';
import Candidates from './components/candidates';
import CandidateContext from './candidatesContext';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Header from './components/header'
import Status from './components/status'
import CandidateCard from './components/candidateCard';

// import Candidates from './components/candidates';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  const [rejected, setRejected]=useState([]);
  const [accepted, setAccepted]=useState([]);
  const [candidatesData, setData]= useState([]);

  const value = {
    'rejectedList': rejected,
    'acceptedList': accepted,
    'candidatesData': candidatesData,
    'setAcceptedList': setAccepted,
    'setRejectedList': setRejected,
    'setData': setData 
  }

  return (

    
    <Router history={history}>
    <CandidateContext.Provider value={value}>
    <div className="App">
      <Header/>
      <Switch>
    <Route path="/" exact>
    <Candidates/>
      </Route>
    <Route exact path="/candidates">
      <Candidates/>
      </Route>
      <Route path="/candidates/:id" exact component={CandidateCard} />
      {/* <CandidateCard/>
      </Route> */}
  <Route path="/shortlisted" ><Status accepted /></Route>
  <Route path="/rejected"><Status rejected /></Route>
  </Switch>
  </div>
  </CandidateContext.Provider>
  </Router>
  );
   
//     {/* <Routes>
    
// </Routes> */}
//         {/* <Candidates /> */}
}

export default App;
