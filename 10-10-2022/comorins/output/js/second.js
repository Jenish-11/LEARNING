
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee=product;
console.log(namee);
// alert(product);
let list =JSON.parse(localStorage.getItem("items"));
function disp(){
    

    console.log(list);
    let ele="";
    let ele2="";
    let path="";
    for(let i=0; i<list.length;i++){
        if(namee==list[i].id){
       ele="<li class='l1'>"+list[i].title+"</li>"+"<li class='l2'>"+list[i].name+"</li>"+"<li class='l3'>"+"₹"+list[i].rate+"<span class='disc ml-5'>"+list[i].discounts+"% off"+"</span>"+"</li>"+"<li class='l4'>"+list[i].rating+"★"+"</li>"+"<h5 class='mt-3'>Available Offers</h5>"+"<li class='l5 of'>"+list[i].offer1+"</li>"+"<li class='l5 of'>"+list[i].offer2+"</li>"+"<li class='l5 of'>"+list[i].offer3+"</li>"+"<li class='l5 of'>"+list[i].offer4+"</li>"+"<li class='l5 of'>"+list[i].offer5+"</li>"+"<li class='l6'>"+"<span class='details'>Describtion</span><li class='det'>"+list[i].details+"</li></li>"
 
    document.querySelector("#im").setAttribute("src",list[i].pic);
    ele2="<a href='third.html?name="+list[i].id+"' id='ad' onclick='cart("+i+")'> <button class='px-5 py-3 d-inline but atc' >ADD TO CART</button></a> <a href='placeorder.html?name="+list[i].id+"' id='ad2'><button class='px-5 py-3 float-right d-inline but bn' onclick='add_orders("+i+")'>BUY NOW</button></a>"
    path=`<span>${list[i].categery}></span><span>${list[i].title}></span><span>${list[i].name}</span>`
    
    // document.querySelector("#img").setAttribute("src",resume[0].photo);
}document.getElementById("path").innerHTML=path
document.getElementById("lists").innerHTML=ele;

}document.getElementById("butt").innerHTML=ele2;
}
disp();
let a=0;
let v=0;

function ad(){
    

let logers =JSON.parse(localStorage.getItem("logers"));
let logins=JSON.parse(localStorage.getItem("logins"));
for(let i=0; i<logers.length; i++){
    if(logers[i].email==logins[0].email){
        a=i;
    }
}console.log(a);
} ad();
function cart(position){
      if(! localStorage.getItem("cart_list")){
        localStorage.setItem("cart_list",JSON.stringify([]));
    }
    // let cart_list =JSON.parse(localStorage.getItem("cart_list"));
    // cart_list.push(list[0]);
    logers[a].carts.push(list[position]);
    console.log(logers[a]);
    localStorage.setItem("logers",JSON.stringify(logers));
    // console.log(cart_list);

}
