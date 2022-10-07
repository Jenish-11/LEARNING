
function ls(){
if(! localStorage.getItem("list")){
    localStorage.setItem("list",JSON.stringify([]));
}
let list =JSON.parse(localStorage.getItem("list"));
list.push(resume);
localStorage.setItem("list",JSON.stringify(list));
            let ele="";
            let list_array=JSON.parse(localStorage.getItem("list"));
            // console.log(list_array)
            for(let i=0; i<list_array.length; i++){
                ele =ele+"<li class='m-3'>"+"<a href='temp.html?name="+list_array[i].name+"' target='blank'>"+list_array[i].name+"<a/>"+"</li>";
            }
            document.getElementById("persons").innerHTML=ele;
        }
let resume={
    
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
        //    if(key!=null&&indexkey!=null&&index==null){
                
                resume[key][indexkey]=value;
                
            // }
            // else if(indexkey=='languages'){}
             }}
           
            //  let b=localStorage.setItem("list",JSON.stringify(resume));
             list.push(resume);
            //  localStorage.setItem("list",JSON.stringify(list));
            //  r=localStorage
             console.log(list);
            // display();
        
        }
        function display(){
            // resume=JSON.parse(localStorage.getItem("list"));
            // console.log(resume);
            // document.getElementById("nme").innerHTML=JSON.stringify(resume);
            // let listt=JSON.parse(localStorage.getItem(resume));
            // document.getElementById("persons").innerHTML=listt
            
            // document.getElementById("Nam").innerHTML=resume.name;
            // document.getElementById("Nam").innerHTML=m;
        }
        display();
      
        
    