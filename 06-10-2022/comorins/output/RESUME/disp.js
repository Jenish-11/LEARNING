// import {addDetails} from '';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee=product;
console.log(namee);
// alert(product);
function display(){
    
    let resume=JSON.parse(localStorage.getItem("list"));
    // console.log(nresume);
    // console.log(nresume[0].name);
    
    // let resume=[];
    
    // for(let i=0; i<nresume.length;i++){
    //     if(nresume[i].name==JENISH){
    //         resume.push(nresume[i])
    //     }
    // }resume=Object.assign({},resume);
    console.log(resume);
    
    // document.getElementById("nme").innerHTML=JSON.stringify(resume);
    document.getElementById("Nam").innerHTML=resume.name;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("objt").innerHTML=resume.objective;
    document.getElementById("ph").innerHTML=resume.number;
    document.getElementById("em").innerHTML=resume.email;
    document.getElementById("lin").innerHTML=resume.link;
    let ele="";
            let list_array=resume[0].skills;
            console.log(list_array)
            for(let i=0; i<list_array.length; i++){
                ele =ele+"<li class=''>"+list_array[i]+"</li>";
            }
            document.getElementById("skil").innerHTML=ele;
    // document.getElementById("skil").innerHTML=resume.skills;

    let ele1="";
            let list_array1=resume[0].education;
            // console.log(list_array)
            for(let i=0; i<list_array1.length; i++){
                ele1 =ele1+"<li class='m-3'>"+list_array1[i].study+"</li>";
                ele1 =ele1+"<li class='m-3'>"+list_array1[i].Year+"</li>";
                ele1 =ele1+"<li class='m-3'>"+list_array1[i].institute+"</li>";
            }
            document.getElementById("todo").innerHTML=ele1;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("Nam").innerHTML=m;
}
display();