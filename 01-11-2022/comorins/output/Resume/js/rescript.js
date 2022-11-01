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
   
        // resume.photo=data;
  
            display();
        
        }
        function display(){

            document.getElementById("nme").innerHTML=JSON.stringify(resume);
          
        }
        $("#submit").click(function(){
            $.ajax({
                type:"post",
                url:"http://karka.academy/api/action.php",
                data:{
                    request : "create_resume",
                    user : "Jenish",
                    resume
                },
                success:function(data){
                    console.log(data);
                }
            })
        })

        $("#submit").click(function(){
            $.ajax({
                type:"get",
                url:"http://karka.academy/api/action.php",
                data:{
                    request : "get_user_resume",
                    user : "jenish",
                },
                success:function(data){
                    console.log(data);
                }
            })
        })