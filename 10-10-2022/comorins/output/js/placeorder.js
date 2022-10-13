const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee=product;
console.log(namee);
document.getElementById("disabl").disabled = true;
function displ(){
let ele="";
let logers_array=JSON.parse(localStorage.getItem("logers"));
let logins=JSON.parse(localStorage.getItem("logins"));
for(let i=0; i<logers_array.length; i++){
    if(logers_array[i].name==logins[0].name){       
        ele= ele+"<span>Welcome !</span><h2 classs=''>"+logers_array[i].name+"</h2><h6><span>ph-</span>"+logers_array[i].number+"</h6><h6><span class''> Address :  </span><span class=''>"+logers_array[i].ad1+"</span><span>, "+logers_array[i].ad2+"</span><span>, "+logers_array[i].ad3+"</span></h6>";
        document.getElementById("gk").innerHTML=ele;
}
    else{}
}
}
displ();
let order={

}

let c=0;
function div(){
    let ele="<div class='col-6 p-4'>";
 let list =JSON.parse(localStorage.getItem("items"))
 for(let i=0; i<list.length; i++){
 if(list[i].id==namee&&namee!=null){
    c=i
         order.produ=list[c];
        
       
            ele=ele+"<div class='card w-100'><a href='second.html?name="+list[i].id+"'target='blank'><img src='"+list[i].pic+"' alt='image' class='img w-100'></a></div>"+"<h5 class='name'>"+list[i].name+"</h5>"+"<h5 class='rating'>"+list[i].rating+"★"+"</h5>"+"<h5 class='rate'>"+"₹"+list[i].rate+"<span class='discount ml-4'>"+list[i].discounts+"% off"+"</span>"+"</h5>"+"<h5 class='offers'>Back Offers"+"</h5>"+"</div><div class='col-3 p-4'>";
      
 }} document.getElementById("gp").innerHTML=ele; 
}
 div();
//  if(namee!=null){
   
//  }
 console.log("wed"+c);
function detail(){
 let logers =JSON.parse(localStorage.getItem("logers"));
    let logins=JSON.parse(localStorage.getItem("logins"));
    let list =JSON.parse(localStorage.getItem("items"));
    for(let i=0; i<logers.length; i++){
         if(logers[i].email==logins[0].email){
            order.email=logers[i].email;
            order.number=logers[i].number;
            if(namee==null){
            order.produ=logers[i].carts;
        }
            // else if(namee!=null){
            // for(let j=0; j<list.length;j++){
            //     if(namee==list[j].id){
            //         order.produ=list[i];
            //     }
            // }}

         }
    }
    var ele = document.getElementsByName('cash');
          
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
      order.paymontType=ele[i].value;
    }
}



function ls(){
    if((order.add1&&order.add2&&order.add3&&order.paymontType)!=null){
        if(! localStorage.getItem("orders")){
    localStorage.setItem("orders",JSON.stringify([]));
}
let orders =JSON.parse(localStorage.getItem("orders"))
orders.push(order);
localStorage.setItem("orders",JSON.stringify(orders));
   alert("Your Purchase is Successfully completed")
   document.querySelector("#link").setAttribute("href","index.html");}
   else{
    alert("Please Enter All Details!")
   }
    // localStorage.setItem("orders",JSON.stringify(orders));
}

function details(key,value,index=null,indexkey=null){ 

 if(index==null&&indexkey==null){
         order[key]=value;
         order[key]=value;

    }
    

display();
        }
// function detail(){  
//     // var ele = document.getElementsByName('cash');
          
//     //       for(i = 0; i < ele.length; i++) {
//     //           if(ele[i].checked)
//     //         order.paymontType=ele[i].value;
//     //       }
//           console.log(order.paymontType)

// }  
        function display(){

            document.getElementById("nme").innerHTML=JSON.stringify(order);
          
        }



function dis(){
            let list =JSON.parse(localStorage.getItem("items"));

            console.log(list);
            let ele="<div class='col-3 p-4'>";
            for(let i=0; i<list.length;i++){
                ele=ele+"<div class='card w-100'><a href='second.html?name="+list[i].id+"'target='blank'><img src='"+list[i].pic+"' alt='image' class='img w-100'></a></div>"+"<h5 class='name'>"+list[i].name+"</h5>"+"<h5 class='rating'>"+list[i].rating+"★"+"</h5>"+"<h5 class='rate'>"+"₹"+list[i].rate+"<span class='discount ml-4'>"+list[i].discounts+"% off"+"</span>"+"</h5>"+"<h5 class='offers'>Back Offers"+"</h5>"+"</div><div class='col-3 p-4'>";
            }document.getElementById("g").innerHTML=ele;
        }
        dis();