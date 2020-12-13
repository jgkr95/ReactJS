import React from 'react'

import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom'; 

// import './App.css';
// // import Header from './Header';
// import Footer from './Footer';

// import Note from './Note';
// import AddNote from './AddNote'
// import { useState } from 'react';
// import Login from './Login';
// import Register from './Register';

// function Header() {

//   let [addItem,setaddItem]= useState([])

//   const addNote = (note)=>{

//     setaddItem((prev)=>{
//       return [...prev,note]
//     })
    
    
    
//   }
//   const onDelete = (id)=>{

//     setaddItem((oldData)=>
//       oldData.filter((curData,indx)=>{
//         return indx !== id; 
//       }
      
//       )
    

//     );

//   }
//   return (
//     <>
//       {/* <Register /> */}
//       <Router>
//         {/* <Header /> */}
//       <Switch> 
//               <Route exact path='/' component={Header}></Route> 
//               <Route exact path='/login' component={Login}></Route> 
//               <Route exact path='/register' component={Register}></Route> 
//             </Switch> 
//       </Router>
//       {/* <Header /> */}
//       <div className="header">
//              <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" height="70" width ="70"/>
//             <h4> <Link to="/">Keep</Link></h4>
//             <Link to="login">Sign In</Link>
//          </div>
//       <Note passNote = {addNote}/>
     
//       {
//         addItem.map((val,index)=>{
//           return ( <AddNote 
//             key= {index}
//             id={index}
//             title={val.title}
//             content={val.content}
//             deleteItem ={onDelete}
//          />)
          
//         })
//       }

//     </>
//   );
// }

function Header() {
    var username=JSON.stringify(localStorage.getItem('username'));
    console.log(localStorage.getItem('username'));
    return (
         <div className="header">
             <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" height="70" width ="70"/>
            <h4> <Link to="/">Keep</Link></h4>
    { username && username.length > 0? <h6 style={{color: "black",float: "right"}}>{username.substring(1,username.length-1)}</h6>: <Link to="login">Sign In</Link> }
    {/* <Link className="float-right" to="login">Sign In</Link> */}
         </div>
    )
}

export default Header
