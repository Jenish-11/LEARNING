import React, { useEffect, } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { userDetail } from "../Routs";


export default function Header(props){
    const {
        host, hostname, href, origin, pathname, port, protocol, search
      } = window.location
    var {userinfo,userinfor,login,islog,courseList,setCourse,reg,regis,course,coursefn} = React.useContext(userDetail);
    const parms = useParams();
    return(
        <>
        <header className="bg-primary">
        <div className="">
        <button className="ml-auto border-0 bg-transparent" onClick={props.logout} >Logout</button> 

            <h2 className="text-white float-right d-inline">{userinfo.name}</h2>
            </div>

                {(pathname=="/members")&&<h1 className=" text-center" id="jk"> This is Members Page</h1>}
                {(pathname=="/create_course")&&<h1 className=" text-center" id="jk">Create Your Course</h1>}
                {(pathname=="/home")&&<h1 className=" text-center" id="jk">Welcome our TuTo</h1>}
                {(pathname==`/course/${parms.id}`)&&<h1 className=" text-center" id="jk">{course&&course.map((c)=>{
                return(c.id==parms.id?c.name:null)
                })}</h1>}
                <div className="text-center mr-3">
                <span><Link to="/home" className="text-white mx-2 text-decoration-none">Home</Link></span>
                <span><Link to="/create_course" className="text-white mx-2 text-decoration-none">CreateCourse</Link></span>
                <span className=""><Link className="text-white mx-2 text-decoration-none" to="/members">Members</Link></span>
                </div>
         </header>
        </>
    )
}