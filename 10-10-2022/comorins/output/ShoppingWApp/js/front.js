function disp(){                                        //display the products in indexpage dynamically                   
    let list =JSON.parse(localStorage.getItem("items"));
    console.log(list);
    let ele="<div class='col-3 p-4 maxw '>";
    for(let i=0; i<list.length;i++){
        ele=ele+"<div class='card w-100'><a href='second.html?name="+list[i].id+"'target='blank'><img src='"+list[i].pic+"' alt='image' class='img w-100 item_box'></a></div>"+"<h5 class='name'>"+list[i].name+"</h5>"+"<h5 class='rating'>"+list[i].rating+"★"+"</h5>"+"<h5 class='rate'>"+"₹"+list[i].rate+"<span class='discount ml-4'>"+list[i].discounts+"% off"+"</span>"+"</h5>"+"<h5 class='offers'>Back Offers"+"</h5>"+"</div><div class='col-3 p-4'>";
    }document.getElementById("g").innerHTML=ele;
}
disp();
// function search_items() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('name');
      
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";                 
//         }
//     }
// }