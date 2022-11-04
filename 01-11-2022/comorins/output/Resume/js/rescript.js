let resume={
    photo:""
    
    };
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
        function show(){
            $(document).ready(function(){
            $.ajax({
                type:"get",
                url:"http://karka.academy/api/action.php",
                data:{
                    request : "get_user_resume",
                    user : "jenish",
                },
                success:function(response){
                    var datas=(JSON.parse(response));
                    console.log(datas);
                    let ele=""
                    for(let i=0; i<datas.data.length;i++){
                        var res=JSON.parse(datas.data[i].data);
                        datas.data[i].data=res
                   $(document).ready(function(){
                    ele=ele+`<tr><td>${datas.data[i].id}</td>
                    <td>${datas.data[i].user}</td>
                    <td>${datas.data[i].data.name}</td>
                    <td id="check_email">${datas.data[i].data.email}</td>
                    <td id="check_number">${datas.data[i].data.number}</td>
                    <td><button id="delete" class="bg-danger border-0" value="${datas.data[i].id}">DELETE</button</td>
                    <td><a href="temp.html?name=${datas.data[i].id}"><button class="bg-primary border-0" type="button" value="${datas.data[i].id}" id="get">
                    View
                  </button></a></td>
                  
                    </tr>`;
                    $("#persons").html(ele);
                    $("#check_box").html(` <td><input type="checkbox" value="" placeholder="" id="check">Email</td>
                    <td><input type="checkbox" value="" placeholder="" id="checkn">Number</td>`)
                })

                $(document).on("click","#check",function(){
                    console.log("we")
                    if (this.checked) {
                        $('#check_email').hide();
                    }
                }) 
                $(document).on("click","#checkn",function(){
                    console.log("we")
                    if (this.checked) {
                        $('#check_number').html(" ");
                    }
                }) 

                } 
                   
            }
            })
        })
        }
        show()
        
        $("#submit").click(function(){
            $.ajax({
                type:"post",
                url:"http://karka.academy/api/action.php",
                data:{
                    request : "create_resume",
                    user : "Jenish",
                    resume,
                    
                },
                success:function(){
                    show();
                }
            })
        })

        // $(document).on("click","#get",function(){
        //     var h= $(this).val();
        //     console.log(h)
        //     $.ajax({
        //         type:"get",
        //         url:"http://karka.academy/api/action.php",
        //         data:{
        //             request : "get_user_resume",
        //             user : "jenish",
        //             id:h
        //         },
        //         success:function(response){
                  
        //             var datas=(JSON.parse(response));
        //             console.log(datas);
        //             let ele=""
        //             for(let i=0; i<datas.data.length;i++){
        //                 var res=JSON.parse(datas.data[i].data);
        //                 datas.data[i].data=res
        //                 
        //                     console.log(datas.data[i].data.name)
        //                 $("#Nam").html(datas.data[i].data.name)
        //                 $("#rol").html(datas.data[i].data.fole)
        //                 $("#objt").html(datas.data[i].data.objective)
        //                 $("#Nam").html(datas.data[i].data.name)
        //                 $("#Nam").html(datas.data[i].data.name)
        //                 $("#Nam").html(datas.data[i].data.name)
        //                 $("#Nam").html(datas.data[i].data.name)
        //                 $("#Nam").html(datas.data[i].data.name)
                    
                    
        //             }
        //             }
           
           
        //         }
        //     })
        // })
        $("body").on("click","#delete",function(){
            // alert()
           var d= $(this).val();
           console.log("y:"+d);
            $.ajax({
                type:"get",
                url:"http://karka.academy/api/action.php",
                data:{
                request:"delete_user_resume",
                user :"jenish",
                id:d
                },
                success:function(){
                   show();
                },
                error:function(){
                    console.log("fail")
                }

            })
        })
        
        // $('body').on("click","#check",function(){
        //     console.log("we")
        //     if (this.checked) {
        //         $('#check_email').html(" ");
        //     }
        // }) 
        // $('body').on("click","#checkn",function(){
        //     console.log("we")
        //     if (this.checked) {
        //         $('#check_number').html(" ");
        //     }
        // }) 

        
            // $("#temp").on("click","#get",function(){
            //     var h= $(this).val();
            //     console.log(h)
            //     $.ajax({
            //         type:"get",
            //         url:"http://karka.academy/api/action.php",
            //         data:{
            //             request : "get_resume_by_id",
            //             user : "jenish",
            //             id:h
            //         },
            //         success:function(response){
                      
            //             var datas=(JSON.parse(response));
            //             console.log(datas);
            //             let ele=""
            //                 var res=JSON.parse(datas.data[i].data);
            //                 datas.data.data=res
                            
            //                     console.log(datas.data.data.name)
            //                 $("#Nam").html(datas.data.data.name)
            //                 $("#rol").html(datas.data.data.fole)
            //                 $("#objt").html(datas.data.data.objective)
            //                 $("#Nam").html(datas.data.data.name)
            //                 $("#Nam").html(datas.data.data.name)
            //                 $("#Nam").html(datas.data.data.name)
            //                 $("#Nam").html(datas.data.data.name)
            //                 $("#Nam").html(datas.data.data.name)
                        
                        
                        
                        
               
               
            //         }
            //     })
            // }) 
            let a=0;
            $("#more").click(function(){
               
                    a++;
                
                $("#edu_add").append(` <tr><td><input type="text" class="tab" onkeyup="addDetails('education',this.value,${a},'study')"placeholder="EnterYourCourse"></td>
                <td><input type="text"class="tab"onkeyup="addDetails('education',this.value,${a},'Year')"placeholder="YearOfPassedout"></td>
                <td><input type="text" class="tab"onkeyup="addDetails('education',this.value,${a},'institute')"placeholder="EnterYourInstitueName"></td>
                <td><input type="text" class="tab"onkeyup="addDetails('education',this.value,${a},'percentage')"placeholder="EnterYourPercentage"></td></tr>.`)
            })
            // `<td><input type="text" class="tab" onkeyup="addDetails('education',this.value,0,'study')"placeholder="EnterYourCourse"></td>
            // <td><input type="text"class="tab"onkeyup="addDetails('education',this.value,0,'Year')"placeholder="YearOfPassedout"></td>
            // <td><input type="text" class="tab"onkeyup="addDetails('education',this.value,0,'institute')"placeholder="EnterYourInstitueName"></td>
            // <td><input type="text" class="tab"onkeyup="addDetails('education',this.value,0,'percentage')"placeholder="EnterYourPercentage"></td>`