import { useState } from "react";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Header from "../components/header";
import Course_list from "./Course_list";
import React from "react";
import { userDetail } from "../Routs";
import logg from "../utils/common";
import Show from "./Show";
export var userDetailContext = React.createContext(null);

export default function Home(props){
  var {userinfo,userinfor,login,islog,courseList,setCourse,reg,regis,course,coursefn} = React.useContext(userDetail);
  // console.log(userData)
  // console.log(courseList)
  const[context,contextfn]=useState("Abcd")
  const logout=()=>{
    islog(false)
    props.locals(false)
    localStorage.setItem("logins",false)
     }
  const n=useNavigate()
  useEffect(()=>{
    logg(islog,login)
      if(login==true||props.local==true){
          n('/home')
          // props.locals(true)
      }

      else if(login==false){
          n('/')
          console.log("logout");
      }
  },[login])
    return(
        <>
        {/* <userDetailContext.Provider value={context}> */}
          <Header login={login} islog={islog} logout={logout}/>
        <section className="bg-secondary">
          <h2>{JSON.stringify(login)}</h2>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Course_list courseList={courseList} setCourse={setCourse} />
                </div>
                <div className="col-6">
                  
                </div>
              </div>
            </div>
        </section>
        {/* </userDetailContext.Provider> */}
        </>
    )
}