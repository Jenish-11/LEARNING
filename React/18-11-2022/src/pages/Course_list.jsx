import axios from "axios"
import { useState,useEffect } from "react"
import { Link,useNavigate } from "react-router-dom";
export default function Course_list(props){
    useEffect(()=>{
        getcourse()

    },[]
    )
    const getcourse=async()=>{
        const {data}=await axios.get("https://karka.academy/api/action.php?request=getCourses")
        if(data.status){
            props.setCourse(data.data)
        }
    }
    return(
        <><h2></h2>
            <h1>Course List</h1>
            <div>{props.courseList.map(c=>{
                return (<li className=""><Link to={`/course/${c.id}`} className="text-decoration-none text-dark">{c.name}</Link></li>)
            })}</div>
        </>
    )
}