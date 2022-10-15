let products={
    // id:001,
    // name:"",
    pic:"",
    // title:"",
    // ratings:0,
    // details:"",
    // rate:0,
    // discounts:"",
};
let data; 
    const fileinput =document.getElementById("fileInput");
    fileinput.addEventListener("change", e => {
        const file = fileinput.files[0];
        const reader =new FileReader();
        reader.addEventListener("load", () =>{
            data=reader.result;
            console.log(data);
            // localStorage.setItem("image",JSON.stringify(data))
        });
        reader.readAsDataURL(file);
        console.log(e)
    });
function ls(){
    if(! localStorage.getItem("items")){
        localStorage.setItem("items",JSON.stringify([]));
    }
    let items =JSON.parse(localStorage.getItem("items"));
    items.push(products);
    localStorage.setItem("items",JSON.stringify(items));
    let ele="";
    let items_array=JSON.parse(localStorage.getItem("items"));
    console.log("hj"+items_array);
    for(let i=0; i<items_array.length; i++){
        ele =ele+"<li class='m-3'>"+items_array[i].name+"<a/>"+"<button onclick='clearc("+ i +")' class='ml-3'>"+"X"+"</button>"+"</li>"+"</li>";
    }
    document.getElementById("persons").innerHTML=ele;
}
function addDetails(key,value,index=null,indexkey=null){
    // alert(value);
    if(index==null&&indexkey==null){
         products[key]=value;
         products[key]=value;
    }
    else if(!products[key]&&index!=null&&indexkey==null&&[key!='personalDetails']){
        products[key]=[]
    }
   else if(indexkey==null&& index!=null){
    products[key][index]=value;
   }
 
   else if(key!=null&&indexkey!=null&&index!=null){
        if(!products[key]){
            products[key]=[]
        }
        if(!products[key][index]){
            products[key][index]={};}
            products[key][index][indexkey]=value;
     }
    else if([key=='personalDetails']){
        if(!products[key]){
        products[key]={};
        products[key][indexkey]=value;
        

     }}
     products.pic=data;
    
display();
        
}
function display(){

    document.getElementById("nme").innerHTML=JSON.stringify(products);
  
}
function clearc(position){
    let items =JSON.parse(localStorage.getItem("items"));
    items.splice(position,1);
    localStorage.setItem("items",JSON.stringify(items));
    
}
