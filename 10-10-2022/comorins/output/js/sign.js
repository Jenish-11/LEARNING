let person_details={
  
    pic:"",
    carts:[],
 
};
// let data; 
//     const fileinput =document.getElementById("fileInput");
//     fileinput.addEventListener("change", e => {
//         const file = fileinput.files[0];
//         const reader =new FileReader();
//         reader.addEventListener("load", () =>{
//             data=reader.result;
//             console.log(data);
//             // localStorage.setItem("image",JSON.stringify(data))
//         });
//         reader.readAsDataURL(file);
//         console.log(e)
//     });
function ls(){
    if(! localStorage.getItem("logers")){
        localStorage.setItem("logers",JSON.stringify([]));
    }
    let logers =JSON.parse(localStorage.getItem("logers"));
    logers.push(person_details);
    localStorage.setItem("logers",JSON.stringify(logers));
    let ele="";
    let logers_array=JSON.parse(localStorage.getItem("logers"));
    // console.log(logers_array)
    for(let i=0; i<logers_array.length; i++){
        ele =ele+"<li class='m-3'>"+logers_array[i].name+"<a/>"+"<button onclick='clearc("+ i +")' class='ml-3'>"+"X"+"</button>"+"</li>"+"</li>";
    }
    document.getElementById("persons").innerHTML=ele;
}
function addDetails(key,value,index=null,indexkey=null){
    // alert(value);
    if(index==null&&indexkey==null){
         person_details[key]=value;
         person_details[key]=value;
    }
    else if(!person_details[key]&&index!=null&&indexkey==null&&[key!='personalDetails']){
        person_details[key]=[]
    }
   else if(indexkey==null&& index!=null){
    person_details[key][index]=value;
   }
 
   else if(key!=null&&indexkey!=null&&index!=null){
        if(!person_details[key]){
            person_details[key]=[]
        }
        if(!person_details[key][index]){
            person_details[key][index]={};}
            person_details[key][index][indexkey]=value;
     }
    else if([key=='personalDetails']){
        if(!person_details[key]){
        person_details[key]={};
        person_details[key][indexkey]=value;
        

     }}
    //  person_details.pic=data;
    
display();
        
}
function display(){

    document.getElementById("nme").innerHTML=JSON.stringify(person_details);
  
}
