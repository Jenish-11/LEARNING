import axios from "axios"
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Header from "../components/header";
import { userDetail } from "../Routs";
import Course_list from "./Course_list";

export default function Course(props){
    var {userinfo,userinfor,login,islog,courseList,setCourse,reg,regis,course,coursefn} = React.useContext(userDetail);
 
    const n=useNavigate()
    const parms = useParams();
    useEffect(()=>{
        if(!login){
            n('/')
        }
       
       get_course()
    },[parms.id])
    
    const get_course=async()=>{
        const {data} = await axios.get(`http://karka.academy/api/action.php?request=getCourseDetails&id=${parms.id}`)
        if(data.status){
        coursefn([data.data])
       console.log(course)}
    }
       
    return(
        <>

<Header/>
        <section className="bg-secondary">
          <h2>{JSON.stringify(login)}</h2>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Course_list courseList={courseList} setCourse={setCourse} />
                </div>
                <div className="col-6">
                {course.map((c)=>{
                    return(
                        <>
                    <li>{c.name}</li>
                    <li>{c.price}</li>
                    <li>{c.time}</li>
                    <li>{c.video_id}</li>
                    </>
                    )
                })}
                </div>
              </div>
            </div>
        </section>
            {/* <div>
                {course.map((c)=>{
                    return<li>{c.name}</li>
                })}
            </div> */}
        </>
    )
}