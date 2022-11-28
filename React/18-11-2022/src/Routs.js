import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate
}from 'react-router-dom'
import Home from "./pages/Home";
import Register from './pages/Register';
import Course_list from './pages/Course_list';
import Course from './pages/Course';
import logg from './utils/common';
import CreateC from './pages/Create_course';
import Members from './pages/Members';
export var userDetail = React.createContext(null);
export default function MainRout(){
    // localStorage.setItem("logins",false)
    // var get =localStorage.getItem("logins")
  
    
    const[reg,regis]=useState([])
    const[courseList,setCourse] = useState([])
    const[login,islog]=useState(false)
    const[local,locals]=useState(localStorage.getItem("logins"))
    const[course,coursefn]=useState([])
    const[userinfo,userinfor]=useState([])
    const[getM,getMembers]=useState([])
    const parms = useParams();
    const {
        host, hostname, href, origin, pathname, port, protocol, search
      } = window.location
    //   var n=useNavigate()

      // useEffect(()=>{
      //   logg(islog,login)
      //     if(login==true||local==true){
      //       //   n(`"${pathname}"`)
      //         // props.locals(true)
      //     }
    
      //     else if(login==false){
      //       //   n('/')
      //         console.log("logout");
      //     }
      // })
    // useEffect(()=>{
    //     if(localStorage.getItem("logins")=="true"){
            
    //         islog(true)
    //         console.log(login);
    //     }
    //         else if(localStorage.getItem("logins")=="false"){
    //             islog(false)
    //             console.log(login);
    //         }
    //         })
    return(
        <userDetail.Provider value={{userinfo,userinfor,login,islog,courseList,setCourse,reg,regis,course,coursefn,getM,getMembers}}>

       <Router>
        {/* <h1>jhg{JSON.stringify(pathname)}</h1> */}
            <Routes>
                
                <Route path="/home" element={<Home local={local} locals={locals} />}/>
                <Route path="/" element={<Login local={local} locals={locals} />} />
                <Route path="/register"  element={<Register />}/>
                {/* <Route path="/courselist" element={<Course_list courseList={courseList} setCourse={setCourse}/>}/> */}
                <Route path={`/course/:id`} element={<Course />}/>
                <Route path="/create_course" element={<CreateC/>}/>
                <Route path="/members" element={<Members/>}/>
         </Routes>
        </Router>
      </userDetail.Provider>

    )
}