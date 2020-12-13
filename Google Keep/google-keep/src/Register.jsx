import React from 'react'
import axios from 'axios'

function Register() {
    return (
         <div className="container">
             <form onSubmit={function(e){
               register(e);
             }}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First name</label>
    <input type="text" class="form-control" id="fname" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lname" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mobile number</label>
    <input type="text" class="form-control" id="mobile" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  {/* <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Re-enter Password</label>
    <input type="password" class="form-control" id="exampleInputPassword2" style="width: 15rem" />
  </div> */}
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
         </div>
    )
}

function register(e){
  e.preventDefault();
  let user={
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('exampleInputEmail1').value,
    mobile: document.getElementById('mobile').value,
    password: document.getElementById('exampleInputPassword1').value
  }
  axios.post('http://localhost:8080/api/register', user)
        .then(response => console.log(response));
  console.log(user);
}

export default Register