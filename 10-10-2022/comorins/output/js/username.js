let logers =JSON.parse(localStorage.getItem("logers"));
let logins=JSON.parse(localStorage.getItem("logins"));
console.log(logins);
for(let i=0; i<logers.length; i++){
let element="";
let element2="";
if(logins[0].name==logers[i].name){
    element=element+"<a class='nav-link' href='#'' id='user'><button class='px-4 py-1 border-0 log'>"+logers[i].name+"<span class='sr-only'>(current)</span></button></a>"
    element2 ="<a class='nav-link ' href='' onclick='removec()' class='text-white' >Logout</a>"
    document.getElementById("user").innerHTML=element
    document.getElementById("hidelogout").innerHTML=element2;
}
// else{
//     element=element+"<a class='nav-link' href='login.html' id='user'><button class='px-4 py-1 border-0 log'>Login<span class='sr-only'>(current)</span></button>"
//     document.getElementById("log").innerHTML=ele
// }

}
let ele="hbbhj";
    function removec(){
        
        let logins =JSON.parse(localStorage.getItem("logins"));
        logins.splice(0,1);
        localStorage.setItem("logins",JSON.stringify(logins));
        
       
        // disp();
    }