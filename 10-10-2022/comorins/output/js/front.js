function disp(){
    let list =JSON.parse(localStorage.getItem("items"));
    console.log(list);
    let ele="<div class='col-3 p-4'>";
    for(let i=0; i<list.length;i++){
        ele=ele+"<img src='"+list[i].pic+"' alt='image'>"+"<h5>"+list[i].name+"</h5>"+"<h5>"+list[i].title+"<h5>"+"<h5>"+list[i].rating+"</h5>"+"<h5>"+list[i].rate+"</h5>"+"<h5>"+list[i].discounts+"</h5>"+"</div><div class='col-3 p-4'>";
    }document.getElementById("g").innerHTML=ele






//     ele="<div class='card' style='width: 18rem;'>"
//     "<img src='...' class='card-img-top' alt='...'>"
//     "<div class='card-body'>"
//       "<h5 class='card-title'>"+list[i].name+"</h5>"
//       "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>"
//     "</div>"
//     "<ul class='list-group list-group-flush'>"
//      " <li class='list-group-item'>An item</li>"
//      "<li class='list-group-item'>A second item</li>"
//       "<li class='list-group-item'>A third item</li>"
//     "</ul>"
//    " <div class='card-body'>"
//      "<a href='#' class='card-link'>Card link</a>"
//       "<a href='#' class='card-link'>Another link</a>"
//     "</div>"
//   "</div>"
  
//   }
}
disp();