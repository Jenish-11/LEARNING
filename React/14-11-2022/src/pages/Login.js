import Register from "./Register"
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
export default function Login(props){
    var emailid="jenish"
    var password="123"
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")
    const history=useHistory()
    const log=()=>{
        // if("jenish"==email&&"123"==pass){
        //     props.islog(true)
        //     history.push('/home')
        // }
        let data={
            request : "candidate_login",
            email :"jegan" ,
            password : 1234567890
        }
        let option={
          method:"post",
          body:JSON.stringify(data)
        }
       const da= fetch('http://karka.academy/api/action.php',option)
        .then(da=>da.json())
        .then((response)=>console.log(response,"t"))}
    
    return(
      
        <>
        {/* <Router>
            <Switch>
          <Route path="/register">
            <Register/>
            </Route>
        </Switch> */}

        <div className="col-5 m-auto mt-5">
        <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" onKeyUp={(e)=>setemail(e.target.value)}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" onKeyUp={(e)=>setpass(e.target.value)}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      {/* <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div> */}
    </div>

    {/* <div class="col"> */}
      {/* <!-- Simple link --> */}
      {/* <a href="#!">Forgot password?</a> */}
    {/* </div> */}
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4 w-100" onClick={()=>log()}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    
        
        <p>Not a member? <span><Link to="/register">register</Link></span></p>
        
    
    {/* <p>or sign up with:</p> */}
   
  </div>
</form>
</div>
      {/* </Router>  */}
       </>
    )
}