const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee=product;
console.log(namee);
// alert(product);
let d=0;
function disp(){                                                //diplay the price list  and diaplay the carts
    let logers =JSON.parse(localStorage.getItem("logers"));
    let logins=JSON.parse(localStorage.getItem("logins"));
     if(logins[0]){
    for(let i=0; i<logers.length;i++){
       if(logers[i].email==logins[0].email){
        d=i;
       }
    
    }
    let list =JSON.parse(localStorage.getItem("logers"));
    let g=list[d].carts

    console.log(list);
    let ele="";
    let ele1="";
    let tp=0;
    let dis =0;
    let del=0
    let pkf=25;
    let dc=0;
    let save=0;
    let total=0;
    for(let i=0; i<list[d].carts.length;i++){
            tp=(+list[d].carts[i].rate)+tp;
            dis=((+list[d].carts[i].rate/100)*(+list[d].carts[i].discounts))+dis;
            dis=dis-tp;
            del=(tp>1000)? 25:'FREE';
            if(del==true){
                dc="₹"+25;
            }
            if(dis<0){
                dis=(+dis)*(-1)
            }
           
             save=save+dis;
            
            total=total+tp+dc+pkf-dis;
            ele =ele+"<div class='col-12 mt-2 karts'><img src='"+list[d].carts[i].pic+"' alt='' class='text-left w-25 imj'><ul class='d-inline cul'><li class='na'>"+list[d].carts[i].name+"</li><li class='id mt-2'>"+list[d].carts[i].id+"</li><li class='ti mt-1'>"+list[d].carts[i].title+"</li><li class='na'>"+list[d].carts[i].seller+"</li><li class='ra mt-4'>"+"₹"+list[d].carts[i].rate+"<span class='di'>"+list[d].carts[i].discounts+"% off"+"</span>"+"</li><li class='pf'>29₹ Secured Packaging Fee<li class='re mt-4 ml-5'><button class='border-0 re'onclick='clearc("+i+")'>REMOVE</button></li></ul></div>";
}

ele1=ele1+"<h2 class='pd'>PRICE DETAILS</h2><li class='tp'>"+"<span class='plt'>Price</span><h5 class='d-inline'>"+"₹"+tp+"</h5></li>"+"<li class='dc'>"+"<span class='plt'>Discount</span><h5 class='d-inline text-success'>"+dis+"₹"+"</h5></li>"+"<li>"+"<span class='plt'>Delivery Charges</span><h5 class='d-inline text-success'>"+del+"</h5></li>"+"<li class='pb-2'>"+"<span class='plt'>Secured Packaging Fee</span><h5 class='d-inline'>"+"₹"+pkf+"</h5></li><hr>"+"<li class='ta mb-1'>"+"<span class='plt'>Total Amount<span><h5 class='d-inline'>"+"₹"+total+"</h5></li><hr>"+"<li class='save'>You will save "+"₹"+save+" on this order</li>";

document.getElementById("p").innerHTML=ele
document.getElementById("pl").innerHTML=ele1
}
else{
    document.getElementById("body").innerHTML=`<div class='col-12 pob'><a href="login.html" onclick="order_details()"><button class='float-right bg-primary po'>LOGIN</button></a></div>
    `
}

}
function clearc(position){                                          //remove karts, funtion
    let logers =JSON.parse(localStorage.getItem("logers"));
    logers[d].carts.splice(position,1);
    localStorage.setItem("logers",JSON.stringify(logers));
    disp();
    window.location.reload();
}
disp();
