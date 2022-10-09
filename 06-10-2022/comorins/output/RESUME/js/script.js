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
            if(! localStorage.getItem("list")){
                localStorage.setItem("list",JSON.stringify([]));
            }
            let list =JSON.parse(localStorage.getItem("list"));
            list.push(resume);
            if(resume.name!=null&&resume.name!=""){
            localStorage.setItem("list",JSON.stringify(list));}
            let ele="";
            let list_array=JSON.parse(localStorage.getItem("list"));
            // console.log(list_array)
            for(let i=0; i<list_array.length; i++){
                ele =ele+"<li class='m-3'>"+"<a href='temp2.html?name="+list_array[i].name+"' target='blank'>"+list_array[i].name+"<a/>"+"<button onclick='clearc("+ i +")' class='ml-3'>"+"X"+"</button>"+"</li>"+"</li>";
            }
            document.getElementById("persons").innerHTML=ele;
        }
function clearc(position){
            let list=JSON.parse(localStorage.getItem("list")); 
             list.splice(position,1);
             console.log(list);
             localStorage.setItem("list",JSON.stringify(list));
             ls();
             }
let resume={
    photo:""
    
    };
        function addDetails(key,value,index=null,indexkey=null){
            // alert(value);
            if(index==null&&indexkey==null){
                 resume[key]=value;
                //  resume[key]=value;
            }
            else if(!resume[key]&&index!=null&&indexkey==null&&[key!='personalDetails']){
                resume[key]=[]
            }
           else if(indexkey==null&& index!=null){
            resume[key][index]=value;
           }
         
           else if(key!=null&&indexkey!=null&&index!=null){
                if(!resume[key]){
                    resume[key]=[]
                }
                if(!resume[key][index]){
                    resume[key][index]={};}
                    resume[key][index][indexkey]=value;
             }
            else if([key=='personalDetails']){
                if(!resume[key]){
                resume[key]={};
                resume[key][indexkey]=value;
                
     
             }}
   
        resume.photo=data;
  
            display();
        
        }
        function display(){

            document.getElementById("nme").innerHTML=JSON.stringify(resume);
          
        }
        

      
