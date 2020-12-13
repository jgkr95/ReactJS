import React from 'react';
import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 
import x from './Login';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import Note from './Note';
import AddNote from './AddNote'
import { useState,useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import axios from 'axios';
function App() {
  


  

  
  return (
    <>
    
      <Router>
        <Header />
      <Switch> 
              {/* <Route exact path='/' component={Header}></Route>  */}
              <Route exact path='/login' component={Login}></Route> 
              <Route exact path='/notes' component={Notes}></Route>
              <Route exact path='/register' component={Register}></Route> 
            </Switch> 
      </Router>
      
    </>
  );
}

export default App;
