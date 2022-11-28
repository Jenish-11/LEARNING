
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter as Router,useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import logg from "../utils/common";
import { userDetail } from "../Routs";

export default function Login(props){
  var {userinfo,userinfor,login,islog,courseList,setCourse,reg,regis,course,coursefn} = React.useContext(userDetail);
 
    const N=useNavigate()
    const[datas,setdata]=useState({
        request:"candidate_login",
     
    })
    // const[pass,setpass]=useState("")
    const log=async ()=>{
        // axios({
        //     method:"get",
        //     // allRoutes: true,
        //     // origin: '*',
        //     // credentials: true,
        //     url:"https://karka.academy/api/action.php?",
        //     // headers: 'Origin',
        //     data:JSON.stringify(data)
        // })
        // .then((response)=>{
        //     console.log(response);
        //     // if(response.data.status==true){
        //     N('/home')
           
        // }).catch(()=>console.log("Error"))
        const {data}=await axios.post("https://karka.academy/api/action.php?",JSON.stringify(datas))
        console.log(data);
        if(data.status=='success'){
            islog(true)
            userinfor(data.data)
            localStorage.setItem("logins",true)
            console.log(userinfo);
            N('/home')
        }
        else{
            islog(false) 
        }
        
    }
    useEffect(()=>{
      logg(islog,login)
      if(login==true||localStorage.getItem("logins"=="true")){
        N('/home')
      }
      else if(!Login==false){
        N('/')
      }
    },[])
    // console.log(login);
    return(
       
        <><Link to="/create_course">Create New Course</Link>
        <h1>{JSON.stringify(login)}</h1>
        <div className="col-5 m-auto mt-5">
        <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" onChange={(e)=>setdata({...datas,email:e.target.value})}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" onChange={(e)=>setdata({...datas,password:e.target.value})}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>


  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4 w-100" onClick={()=>log()}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">     
        <p>Not a member? <span><Link to="/register">register</Link></span></p>
  </div>
</form>
</div>
     
       </>
    )
}