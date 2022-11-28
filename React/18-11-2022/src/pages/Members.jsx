import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Header from "../components/header";
import { userDetail } from "../Routs";

export default function Members(){
    var {userinfo,userinfor,login,islog,courseList,setCourse,reg,regis,course,coursefn,getM,getMembers} = React.useContext(userDetail);
 
const get_members=async ()=>{
    const {data}=await axios.get("https://karka.academy/api/action.php?request=getAllMembers")
    console.log(data);
    getMembers(data.data);
}
useEffect(()=>{
    get_members()
},[])
return(
    <>
        <Header/>
        <div>
            {getM.map((to,index)=>{
              return  <li>{to.name}</li>
            })}
        </div>
    </>
)
}