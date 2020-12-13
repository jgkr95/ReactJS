import React, { useState } from 'react'
import axios from 'axios'

import { 
	BrowserRouter as Router, 
	Route, 
	Link, 
	Switch,useHistory
} from 'react-router-dom'; 
// import { useHistory } from 'react-router-dom';
// function send(props) {
//   let deleteNote = () => {
//       props.deleteItem(props.id);
//   }
function Login(props) {
  
  const history = useHistory();
  const [isLoggedIn, setLogin] = useState(false)
  const handleClick = () => {
        history.push("/notes");
  }
  const login = (e)=> {
    e.preventDefault();
    let req={
      email: document.getElementById('exampleInputEmail1').value,
      password: document.getElementById('exampleInputPassword1').value
    }
    axios.post('http://localhost:8080/api/login', req)
          .then(response => {
          console.log(response)
          if(response.status === 200){
            console.log("before setting state")
            setLogin(true)
            localStorage.setItem('user', response.data.data._id);
          localStorage.setItem('username',response.data.data.fname);
          console.log(response.data);

          }
          
    });
  }
    return (
         <div className="container">
             <form onSubmit={function(e){
               login(e);
               if(isLoggedIn){
                console.log("inside if condition")
               handleClick()
               }
              }
               }>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <Link to='/register'>Create Account</Link>
  <button type="submit" class="btn btn-primary">Sign-In</button>
  
</form>
         </div>
    )
}


  // console.log(this.res);
export default Login