// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// let product = urlParams.get('name');
// let namee=product;
// console.log(namee);
document.getElementById("disabl").disabled = true;
function displ(){
let ele="";
let logers_array=JSON.parse(localStorage.getItem("logers"));
let logins=JSON.parse(localStorage.getItem("logins"));
for(let i=0; i<logers_array.length; i++){
    if(logers_array[i].name==logins[0].name){       
        ele= ele+"<span>Welcome !</span><h2 classs=''>"+logers_array[i].name+"</h2><h6><span>ph-</span>"+logers_array[i].number+"</h6><h6><span class''> Address :  </span><span class=''>"+logers_array[i].ad1+"</span><span>, "+logers_array[i].ad2+"</span><span>, "+logers_array[i].ad3+"</span></h6>";
        document.getElementById("g").innerHTML=ele;
}
    else{}
}
}
displ();
let order={
// paymontType:"",
// email:"",
// phoneNumber:0,
// produ:"",
}

let c=0;






// function ls(){
//         if(! localStorage.getItem("orders")){
//     localStorage.setItem("orders",JSON.stringify([]));
// }
// let orders =JSON.parse(localStorage.getItem("orders"))
// orders.push(order);
// localStorage.setItem("orders",JSON.stringify(orders));
//     let logers =JSON.parse(localStorage.getItem("logers"));
//     let logins=JSON.parse(localStorage.getItem("logins"));
//     for(let i=0; i<logers.length; i++){
//          if(logers[i].email==logins[0].email){
//             orders.email=logers[i].email;
//             orders.number=logers[i].number;
//             orders.produ=logers[i].carts;

//          }
//     }
//     localStorage.setItem("orders",JSON.stringify(orders));
// }

function details(key,value,index=null,indexkey=null){ 

 if(index==null&&indexkey==null){
         order[key]=value;
         order[key]=value;

    }
    
// var ele = document.getElementsByName('cash');
          
//           for(i = 0; i < ele.length; i++) {
//               if(ele[i].checked)
//             order.paymontType=ele[i].value;
//           }
//           console.log(orders.paymontType)
// display();
        }


        function display(){

            document.getElementById("nme").innerHTML=JSON.stringify(order);
          
        }
        



// details();
