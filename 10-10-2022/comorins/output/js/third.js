const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee=product;
console.log(namee);
// alert(product);
function disp(){
    let list =JSON.parse(localStorage.getItem("cart_list"));

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
    for(let i=0; i<list.length;i++){
            tp=(+list[i].rate)+tp;
            dis=((+list[i].rate/100)*(+list[i].discounts))+dis;
            dis=dis-tp;
            del=(tp>1000)? 25:'FREE';
            if(del==true){
                dc="₹"+25;
            }
            if(dis<0){
                save=save-dis;
            }
            else{
                 save=save+dis;
            }
            total=total+tp+dis+dc+pkf;
            ele =ele+"<div class='col-12 mt-2'><img src='"+list[i].pic+"' alt='' class='text-left w-25 imj'><ul class='d-inline cul'><li class='na'>"+list[i].name+"</li><li class='id mt-2'>"+list[i].id+"</li><li class='ti mt-1'>"+list[i].title+"</li><li class='na'>"+list[i].seller+"</li><li class='ra mt-4'>"+"₹"+list[i].rate+"<span class='di'>"+list[i].discounts+"% off"+"</span>"+"</li><li class='pf'>29₹ Secured Packaging Fee<li class='re mt-4 ml-5'><button class='border-0 re'onclick='clearc("+i+")'>REMOVE</button></li></ul></div>"
            // ele1=ele1+"<h2 class='pd'>PRICE DETAILS</h2><li class='tp'>"+"<span class='plt'>Price</span><h5 class='d-inline'>"+"₹"+tp+"</h5></li>"+"<li class='dc'>"+"<span class='plt'>Discount</span><h5 class='d-inline text-success'>"+dis+"₹"+"</h5></li>"+"<li>"+"<span class='plt'>Delivery Charges</span><h5 class='d-inline text-success'>"+del+"</h5></li>"+"<li class='pb-2'>"+"<span class='plt'>Secured Packaging Fee</span><h5 class='d-inline'>"+"₹"+pkf+"</h5></li><hr>"+"<li class='ta mb-1'>"+"<span class='plt'>Total Amount<span><h5 class='d-inline'>"+"₹"+total+"</h5></li><hr>"+"<li class='save'>You will save "+"₹"+save+" on this order</li>";


}
ele1=ele1+"<h2 class='pd'>PRICE DETAILS</h2><li class='tp'>"+"<span class='plt'>Price</span><h5 class='d-inline'>"+"₹"+tp+"</h5></li>"+"<li class='dc'>"+"<span class='plt'>Discount</span><h5 class='d-inline text-success'>"+dis+"₹"+"</h5></li>"+"<li>"+"<span class='plt'>Delivery Charges</span><h5 class='d-inline text-success'>"+del+"</h5></li>"+"<li class='pb-2'>"+"<span class='plt'>Secured Packaging Fee</span><h5 class='d-inline'>"+"₹"+pkf+"</h5></li><hr>"+"<li class='ta mb-1'>"+"<span class='plt'>Total Amount<span><h5 class='d-inline'>"+"₹"+total+"</h5></li><hr>"+"<li class='save'>You will save "+"₹"+save+" on this order</li>";

document.getElementById("p").innerHTML=ele
document.getElementById("pl").innerHTML=ele1

}
function clearc(position){
    let cart_list =JSON.parse(localStorage.getItem("cart_list"));
    cart_list.splice(position,1);
    localStorage.setItem("cart_list",JSON.stringify(cart_list));
    disp();
}
disp();
