function add(){
    let d=[];
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    let c=Number(a)+Number(b);
    d.push(c);
    // alert(c);
    answ(d);
}
function answ(answer_array){
    let k=0;
    for(let i=0; i<answer_array.length; i++){
        k =k+"<li>"+answer_array[i]+"</li>";
    }
    document.getElementById("ans").innerHtml=k;
    
     
}
let list=[]
function addd(){
    let todo=document.getElementById("items").value;
    document.getElementById("items").value="";
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