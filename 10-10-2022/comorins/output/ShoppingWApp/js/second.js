
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee=product;
console.log(namee);
// alert(product);

let list =JSON.parse(localStorage.getItem("items"));
function disp(){                                                //diplay the product information dynamically 
let logins=JSON.parse(localStorage.getItem("logins"));
    
    console.log(list);
    let ele="";
    let ele2="";
    let path="";
    let specs ="";
    for(let i=0; i<list.length;i++){
        if(namee==list[i].id){
       ele="<li class='l1'>"+list[i].title+"</li>"+"<li class='l2'>"+list[i].name+"</li>"+"<li class='l3'>"+"₹"+list[i].rate+"<span class='disc ml-5'>"+list[i].discounts+"% off"+"</span>"+"</li>"+"<li class='l4'>"+list[i].rating+"★"+"</li>"+"<h5 class='mt-3'>Available Offers</h5>"+"<li class='l5 of'>"+list[i].offer1+"</li>"+"<li class='l5 of'>"+list[i].offer2+"</li>"+"<li class='l5 of'>"+list[i].offer3+"</li>"+"<li class='l5 of'>"+list[i].offer4+"</li>"+"<li class='l5 of'>"+list[i].offer5+"</li>"+"<li class='l6'>"+"<span class='details'>Describtion</span><li class='det'>"+list[i].details+"</li></li>"
 if(list[i].spec1){
    specs=`<span fs-2>Specifications<span><li>${list[i].spec1}</li><li>${list[i].spec2}</li><li>${list[i].spec3}</li><li>${list[i].spec4}</li><li>${list[i].spec5}</li>`;
    document.getElementById("specs").innerHTML=specs;
 }
    document.querySelector("#im").setAttribute("src",list[i].pic);
    if(logins[0]){
    ele2="<a href='third.html?name="+list[i].id+"' id='ad' onclick='cart("+i+")'> <button class='px-5 py-3 d-inline but atc' >ADD TO CART</button></a> <a href='placeorder.html?name="+list[i].id+"' id='ad2'><button class='px-5 py-3 float-right d-inline but bn' onclick='add_orders("+i+")'>BUY NOW</button></a>"
   } 
   else{
     ele2="<a href='login.html?name="+list[i].id+"' id='ad' onclick='cart("+i+")'> <button class='px-5 py-3 d-inline but atc' >ADD TO CART</button></a> <a href='login.html?name="+list[i].id+"' id='ad2'><button class='px-5 py-3 float-right d-inline but bn' onclick='add_orders("+i+")'>BUY NOW</button></a>"
 
   }
   path=`<span>${list[i].categery}></span><span>${list[i].title}></span><span>${list[i].name}</span>`
    
    // document.querySelector("#img").setAttribute("src",resume[0].photo);
}document.getElementById("path").innerHTML=path         //path of the product
document.getElementById("lists").innerHTML=ele;         //product informations

}document.getElementById("butt").innerHTML=ele2;        //place order buy now buttons
}
disp();

let a=0;
let v=0;

function cart(position){                                                                        //add cart function
      let logins=JSON.parse(localStorage.getItem("logins"));

    let logers =JSON.parse(localStorage.getItem("logers"));
for(let i=0; i<logers.length; i++){
    if(logers[i].email==logins[0].email){
        a=i;
    }
}console.log(a);
    //   if(! localStorage.getItem("cart_list")){
    //     localStorage.setItem("cart_list",JSON.stringify([]));
    // }
    // let cart_list =JSON.parse(localStorage.getItem("cart_list"));
    // cart_list.push(list[0]);
    // let logers =JSON.parse(localStorage.getItem("logers"));
    logers[a].carts.push(list[position]);
    console.log(logers[a]);
    localStorage.setItem("logers",JSON.stringify(logers));
    // console.log(cart_list);

}
