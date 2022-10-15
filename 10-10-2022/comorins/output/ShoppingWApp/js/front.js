function disp(){
    let list =JSON.parse(localStorage.getItem("items"));
    console.log(list);
    let ele="<div class='col-3 p-4 '>";
    for(let i=0; i<list.length;i++){
        ele=ele+"<div class='card w-100'><a href='second.html?name="+list[i].id+"'target='blank'><img src='"+list[i].pic+"' alt='image' class='img w-100 item_box'></a></div>"+"<h5 class='name'>"+list[i].name+"</h5>"+"<h5 class='rating'>"+list[i].rating+"★"+"</h5>"+"<h5 class='rate'>"+"₹"+list[i].rate+"<span class='discount ml-4'>"+list[i].discounts+"% off"+"</span>"+"</h5>"+"<h5 class='offers'>Back Offers"+"</h5>"+"</div><div class='col-3 p-4'>";
    }document.getElementById("g").innerHTML=ele;
}
disp();


// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// let product = urlParams.get('name');
// let namee=product;
// console.log(namee);
// alert(product);
// let logers =JSON.parse(localStorage.getItem("logers"));
// let logins=JSON.parse(localStorage.getItem("logins"));
// console.log(logins);
// for(let i=0; i<logers.length; i++){
// let element="";
// if(logins[i].name==logers[i].name){
//     element=element+"<a class='nav-link' href='#'' id='user'><button class='px-4 py-1 border-0 log'>"+logins[i].name+"<span class='sr-only'>(current)</span></button></a>"
//     document.getElementById("user").innerHTML=element
// }
// // else{
// //     element=element+"<a class='nav-link' href='login.html' id='user'><button class='px-4 py-1 border-0 log'>Login<span class='sr-only'>(current)</span></button>"
// //     document.getElementById("log").innerHTML=ele
// // }

// }