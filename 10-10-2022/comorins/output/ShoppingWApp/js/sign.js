let person_details={
  
    pic:"",
    carts:[],
 
};
function ls(){    
    let a=true;                                                  //store signup persons datas
    if(! localStorage.getItem("logers")){
        localStorage.setItem("logers",JSON.stringify([]));
    }

    let logers =JSON.parse(localStorage.getItem("logers"));
    for(let i=0; i<logers.length;i++){
       if(logers[i].email!=person_details.email||logers[0]==null){
        a=true}
        else{
            a=false
        };
     }
     console.log("fdsafas",a)
     if(a==true){
        logers.push(person_details);
        alert("ok")
        window.location.href="login.html";
     
    }
    else if(a==false){
        alert("UserID Already Exit Please try Differnt Email ")
        window.location.href="signup.html";
        
    }
    localStorage.setItem("logers",JSON.stringify(logers));
    let ele="";
    let logers_array=JSON.parse(localStorage.getItem("logers"));
    // console.log(logers_array)
    for(let i=0; i<logers_array.length; i++){
        ele =ele+"<li class='m-3'>"+logers_array[i].name+"<a/>"+"<button onclick='clearc("+ i +")' class='ml-3'>"+"X"+"</button>"+"</li>"+"</li>";
    }
    document.getElementById("persons").innerHTML=ele;
}
function addDetails(key,value,index=null,indexkey=null){            //obtain user input
    // alert(value);
    let logers =JSON.parse(localStorage.getItem("logers"));
   
    if(index==null&&indexkey==null){
         person_details[key]=value;
         person_details[key]=value;
    }
    

    
display();
        
}
function display(){

    document.getElementById("nme").innerHTML=JSON.stringify(person_details);
  
}
