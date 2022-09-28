function add(){
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    let c=Number(a)+Number(b);
    alert(c);
}
let list=[]
function addd(){
    let todo=document.getElementById("items").value;
    list.push(todo);
    console.log(list);
    display(list);
}
function display(list_aray){
    let ele="";
    for(let i=0; i<list_aray.length; i++){
        ele =ele+"<li>"+list_aray[i]+"</li>";
    }
    document.getElementById("todo").innerHTML=ele;
    
}