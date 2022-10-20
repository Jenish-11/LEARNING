let logers =JSON.parse(localStorage.getItem("logers"));
let logins=JSON.parse(localStorage.getItem("logins"));
console.log(logins);
for(let i=0; i<logers.length; i++){
let element="";
let element2="";
let b;
if(logins[0]){
if(logins[0].name==logers[i].name){
    element=element+"<a class='nav-link' href='placeorder.html' id='user'><button class='px-4 py-1 border-0 log' onclick='profile("+i+")'>"+logers[i].name+"<span class='sr-only'>(current)</span></button></a>"
    element2 ="<a class='nav-link text-white' href='' onclick='removec()' >Logout</a>"
    document.getElementById("user").innerHTML=element
    document.getElementById("hidelogout").innerHTML=element2;
    b=true;
}  }
else{
    b=false;
}
// else{
//     element=element+"<a class='nav-link' href='login.html' id='user'><button class='px-4 py-1 border-0 log'>Login<span class='sr-only'>(current)</span></button>"
//     document.getElementById("log").innerHTML=ele
// }

}
let ele="";
    function removec(){
        
        let logins =JSON.parse(localStorage.getItem("logins"));
        logins.splice(0,1);
        localStorage.setItem("logins",JSON.stringify(logins));
        
       
        // disp();
    }






    // function profile(position){
    //     let logers =JSON.parse(localStorage.getItem("logers"));
    //     let orders =JSON.parse(localStorage.getItem("orders"));
    //     let list =JSON.parse(localStorage.getItem("items"));
    //     let elem="<div class='col-3 p-4'>";
    //     for(let i=0; i<orders.length+list.length;i++ ){
    //         if(logers[position].email==orders[i].email&&orders[i].produ==list[i]){
    //             ele=ele+"<div class='card w-100'><a href='second.html?name="+list[i].id+"'target='blank'><img src='"+list[i].pic+"' alt='image' class='img w-100'></a></div>"+"<h5 class='name'>"+list[i].name+"</h5>"+"<h5 class='rating'>"+list[i].rating+"★"+"</h5>"+"<h5 class='rate'>"+"₹"+list[i].rate+"<span class='discount ml-4'>"+list[i].discounts+"% off"+"</span>"+"</h5>"+"<h5 class='offers'>Back Offers"+"</h5>"+"</div><div class='col-3 p-4'>";
    //         }
            
    //     }document.getElementById("main").innerHTML=ele;
    
    // }


let no=0;
    function nof(){                                                                 //display no of products in carts

        let logers =JSON.parse(localStorage.getItem("logers"));
        for(let i=0; i<logers.length;i++){
            if(logins[0].email==logers[i].email) {
           no= logers[i].carts.length;}
        }
       
        console.log("hjkl"+no);
    }
    nof();
    document.getElementById("nofi").innerHTML=no;