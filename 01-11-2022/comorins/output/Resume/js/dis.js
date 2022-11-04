
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let product = urlParams.get('name');
        let namee=product;
        console.log(namee);
        $(document).ready(function(){
            var h= namee
            console.log(h)
            $.ajax({
                type:"get",
                url:"http://karka.academy/api/action.php",
                data:{
                    request : "get_resume_by_id",
                    user : "jenish",
                    id:h
                },
                success:function(response){
                  
                    var datas=(JSON.parse(response));
                    console.log(datas);
                    var res=JSON.parse(datas.data.data);
                        datas.data.data=res
                        console.log(datas.data.data.name)
                        $("#Nam").html(datas.data.data.name)
                        $("#rol").html(datas.data.data.fole)
                        $("#objt").html(datas.data.data.objective)
                        $("#ph").html(datas.data.data.number)
                        $("#em").html(datas.data.data.email)
                        $("#lin").html(datas.data.data.link)
                        $("#Nam").html(datas.data.data.name)
                        $("#Nam").html(datas.data.data.name)
                        $("#loca1").html(datas.data.data.loca1);
                        $("#loca2").html(datas.data.data.loca2);
                        $("#loca3").html(datas.data.data.loca3);
                        $("#pin").html(datas.data.data.loca4);
                        $("#akn").html(datas.data.data.akn);
           

                        let ele="";
                        let list_array=res.skills;
                        if(list_array!=null){
                        console.log(list_array)
                        for(let i=0; i<list_array.length; i++){
                            ele =ele+"<li class=''>"+list_array[i]+"</li>";
                        }
                        $("#skil").html(ele)}

                        let ele1="<tr>";
                        let list_array1=res.education;
                        if(list_array1!=null){
                        console.log(list_array1);
                      
                        for(let i=0; i<list_array1.length; i++){
                            ele1 =ele1+"<td>"+list_array1[i].study+"</td>"+
                            "<td >"+list_array1[i].Year+"</td>"+
                            "<td>"+list_array1[i].institute+"</td>"+
                            "<td>"+list_array1[i].percentage+"</td>"+"</tr>";
                        }console.log(ele1);
                            $("#g").html(ele1);
                        }
                        let ele2="<tr>";
                        let list_array2=res.experiance;
                        if(list_array2!=null){
                        console.log(list_array2);
                        for(let i=0; i<list_array2.length; i++){
                            ele2 =ele2+"<td>"+list_array2[i].CompanyName+"</td>"+
                            "<td>"+list_array2[i].JobRole+"</td>"+
                            "<td>"+list_array2[i].JobDetails+"</td>"+
                            "<td>"+list_array2[i].Duration+"</td>"+"</tr>";
                        }
                       $("#gg").html(ele2);
                    }

                        let ele3="";
                        let list_array3=res.personalDetails;
                        if(list_array3!=null){
                        console.log(list_array3);
                        // list_array3=Object.assign({},list_array3);
                        for(let i=0; i<list_array3.length; i++){
                            // let i=0;
                            ele3 =ele3+"<li class=''>"+"<span class=''>Full Name :<span/>"+list_array3[i].FullName+"</li>"+
                            "<li class=''>"+"<span class=''>DOB :<span/>"+list_array3[i].DOB+"</li>"+
                            "<li class=''>"+"<span class=''>Gender :<span/>"+list_array3[i].Gender+"</li>"+
                            "<li class=''>"+"<span class=''>MartialStatus :<span/>"+list_array3[i].Martial+"</li>"+
                            "<li class=''>"+"<span class=''>Languages :<span/>"+list_array3[i].language1+"\,"+list_array3[i].language2+"</li>"+
                            "<li class=''>"+"<span class=''>Hobbies :<span/>"+list_array3[i].hobbie1+"\, "+list_array3[i].hobbie2+"\, "+list_array3[i].hobbie3+"</li>";
                        }
                        console.log(ele3);
                        $("#pd").html(ele3);
                    }

                    let ele4="<tr>";
                    let list_array4=res.Certification;
                    if(list_array4!=null){
                    console.log(list_array4);
                    for(let i=0; i<list_array4.length; i++){
                        ele4 =ele4+"<td>"+list_array4[i].CourseName+"</td>"+
                        "<td>"+list_array4[i].Duration+"</td>"+
                        "<td>"+list_array4[i].Institute+"</td>"+
                       "<td>"+list_array4[i].Place+"</td>"+"</tr>";
                    }
                    $("#ggg").html(ele4);
                }

                let ele5="";
                let list_array5=res.project;
                if(list_array5!=null){
                console.log(list_array5);
                for(let i=0; i<list_array5.length; i++){
                    ele5 =ele5+"<h4 class='qual1'>"+"<span class=''>Project Name :<span/>"+list_array5[i].CourseName+"</h4>"+
                    "<li class=''>"+"<span class=''>Duration :<span/>"+list_array5[i].duration+"</li>"+
                    "<li class=''>"+"<span class=''>Role :<span/>"+list_array5[i].role+"</li>"+
                    "<li class=''>"+"<span class=''>Technology Used :<span/>"+list_array5[i].technology+"</li>"+
                    "<li class=''>"+"<span class=''>Abstract :<span/>"+list_array5[i].abstract+"</li>";
                }
                document.getElementById("pro").innerHTML=ele5;}
                
                }
            })
        })