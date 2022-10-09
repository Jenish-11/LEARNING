// import {addDetails} from '';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee=product;
console.log(namee);
// alert(product);
function display(){
    // let pic =localStorage.getItem("image")
    // console.log(pic);    




    document.addEventListener("DOMContentLoaded", () =>{
        if(resume[0].photo){
            document.querySelector("#img").setAttribute("src",resume[0].photo);
        }
    })




    let nresume=JSON.parse(localStorage.getItem("list"));
    console.log("result"+nresume);
    
    let resume=[];
    
    for(let p=0; p<nresume.length;p++){
        if(nresume[p].name==namee){
            resume.push(nresume[p]);
    console.log(resume);
    // document.getElementById("img").innerHTML=resume[0].photo;
    document.getElementById("Nam").innerHTML=resume[0].name;
    document.getElementById("rol").innerHTML=resume[0].role;
    document.getElementById("objt").innerHTML=resume[0].objective;
    document.getElementById("ph").innerHTML=resume[0].number;
    document.getElementById("em").innerHTML=resume[0].email;
    document.getElementById("lin").innerHTML=resume[0].link;
    document.getElementById("loca1").innerHTML=resume[0].loca1;
    document.getElementById("loca2").innerHTML=resume[0].loca2;
    document.getElementById("loca3").innerHTML=resume[0].loca3;
    document.getElementById("pin").innerHTML=resume[0].loca4;
    let ele="";
            let list_array=resume[0].skills;
            if(list_array!=null){
            console.log(list_array)
            for(let i=0; i<list_array.length; i++){
                ele =ele+"<li class=''>"+list_array[i]+"</li>";
            }
            document.getElementById("skil").innerHTML=ele;}
            // else{
            //     document.getElementById("skil").innerHTML=null;
            // }

    let ele1="";
            let list_array1=resume[0].education;
            if(list_array1!=null){
            console.log(list_array1);
            for(let i=0; i<list_array1.length; i++){
                ele1 =ele1+"<h4 class='qual1 '>"+list_array1[i].study+"</h4>";
                ele1 =ele1+"<li class='ml-5 ed'>"+"<span class=''>Passedout :<span/>"+list_array1[i].Year+"</li>";
                ele1 =ele1+"<li class='ml-5 ed'>"+"<span class=''>InstituteName :<span/>"+list_array1[i].institute+"</li>";
                ele1 =ele1+"<li class='ml-5 ed'>"+"<span class=''>Percentage :<span/>"+list_array1[i].percentage+"</li>";
            }console.log(ele1);
            document.getElementById("ed").innerHTML=ele1;}
    let ele2="";
            let list_array2=resume[0].experiance;
            if(list_array2!=null){
            console.log(list_array2);
            for(let i=0; i<list_array2.length; i++){
                ele2 =ele2+"<h4 class='qual1 '>"+"<span class=''>Company Name :<span/>"+list_array2[i].CompanyName+"</h4>";
                ele2 =ele2+"<li class='ml-5 ed'>"+"<span class=''>Job Role :<span/>"+list_array2[i].JobRole+"</li>";
                ele2 =ele2+"<li class='ml-5 ed'>"+"<span class='text-dark'>Job Details :<span/>"+list_array2[i].JobDetails+"</li>";
                ele2 =ele2+"<li class='ml-5 ed'>"+"<span class=''>Duration: <span/>"+list_array2[i].Duration+"</li>";
            }console.log(ele2);
            document.getElementById("exp").innerHTML=ele2;}
    let ele3="";
            let list_array3=resume[0].personalDetails;
            if(list_array3!=null){
            console.log(list_array3);
            // list_array3=Object.assign({},list_array3);
            for(let i=0; i<list_array3.length; i++){
                // let i=0;
                ele3 =ele3+"<li class=''>"+"<span class=''>Full Name :<span/>"+list_array3[i].FullName+"</li>";
                ele3 =ele3+"<li class=''>"+"<span class=''>DOB :<span/>"+list_array3[i].DOB+"</li>";
                ele3 =ele3+"<li class=''>"+"<span class=''>Gender :<span/>"+list_array3[i].Gender+"</li>";
                ele3 =ele3+"<li class=''>"+"<span class=''>MartialStatus :<span/>"+list_array3[i].Martial+"</li>";
                ele3 =ele3+"<li class=''>"+"<span class=''>Languages :<span/>"+list_array3[i].language1+"\,"+list_array3[i].language2+"</li>";
                ele3 =ele3+"<li class=''>"+"<span class=''>Hobbies :<span/>"+list_array3[i].hobbie1+"\, "+list_array3[i].hobbie2+"\, "+list_array3[i].hobbie3+"</li>";
            }
            console.log(ele3);
            document.getElementById("pd").innerHTML=ele3;}
    let ele4="";
            let list_array4=resume[0].Certification;
            if(list_array4!=null){
            console.log(list_array4);
            for(let i=0; i<list_array4.length; i++){
                ele4 =ele4+"<h4 class='qual1 ed'>"+"<span class=''><span/>"+list_array4[i].CourseName+"</h4>";
                ele4 =ele4+"<li class='ml-5 ed'>"+"<span class=''>Duration :<span/>"+list_array4[i].Duration+"</li>";
                ele4 =ele4+"<li class='ml-5 ed'>"+"<span class=''>Institute Name :<span/>"+list_array4[i].Institute+"</li>";
                ele4 =ele4+"<li class='ml-5 ed'>"+"<span class=''>Place :<span/>"+list_array4[i].Place+"</li>";
            }
            document.getElementById("cer").innerHTML=ele4;}
    let ele5="";
            let list_array5=resume[0].project;
            if(list_array5!=null){
            console.log(list_array5);
            for(let i=0; i<list_array5.length; i++){
                ele5 =ele5+"<h4 class='qual1'>"+"<span class=''>Project Name :<span/>"+list_array5[i].CourseName+"</h4>";
                ele5 =ele5+"<li class=''>"+"<span class=''>Duration :<span/>"+list_array5[i].duration+"</li>";
                ele5 =ele5+"<li class=''>"+"<span class=''>Role :<span/>"+list_array5[i].role+"</li>";
                ele5 =ele5+"<li class=''>"+"<span class=''>Technology Used :<span/>"+list_array5[i].technology+"</li>";
                ele5 =ele5+"<li class=''>"+"<span class=''>Abstract :<span/>"+list_array5[i].abstract+"</li>";
            }
            document.getElementById("pro").innerHTML=ele5;}

 }}
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("rol").innerHTML=resume.role;
    // document.getElementById("Nam").innerHTML=m;
}
display();
// document.addEventListener("DOMContentLoaded", () =>{
//     if(resume[0].photo){
//         document.querySelector("#img").setAttribute("src",resume[0].photo);
//     }
// })