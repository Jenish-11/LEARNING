import axios from "axios"
import React, { useState } from "react"
import Header from "../components/header";
import { userDetail } from "../Routs";

let c={

}
export default function CreateC(){
    var {userinfo,userinfor,login,islog,courseList,setCourse,reg,regis,course,coursefn} = React.useContext(userDetail);
 
const[create, createfn]=useState({
    request:"create_course",
    name:"",
    video_id:"",
    description:"",
    price:0
})
const add=async ()=>{
    const response=await axios.post("https://karka.academy/api/action.php?",JSON.stringify(create))
     console.log(response);
}
    return(
        <>
        <Header/>
        {/* <h1>create course</h1> */}
        <input type="text" placeholder="Name" onKeyUp={(e)=>createfn({...create,name:e.target.value})}/>
        <input type="text" placeholder="videoID" onKeyUp={(e)=>createfn({...create,video_id:e.target.value})}/>
        <input type="text" placeholder="Describtion" onKeyUp={(e)=>createfn({...create,description:e.target.value})}/>
        <input type="number" placeholder="Prize" onKeyUp={(e)=>createfn({...create,price:e.target.value})}/>
        <button type="button" onClick={add}>Create</button>


        </>
    )
}