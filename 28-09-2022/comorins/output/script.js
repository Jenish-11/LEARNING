let resume={
            name:"jenish",
            hobbies:["playing","Gaming", "travel"],
            education:[{
                        study:12,
                        group:"Maths",
                        Year:2017,
                        institute:"Vavrai",
                        Percentage:79},
                        {
                        study:"10",
                        group:"",
                        Year:2021,
                        institute:"Vavarai",
                        Percentage:93},
                        {
                        study:"BE",
                        group:"Mechanical",
                        Year:2021,
                        institute:"MarEphraem",
                        Percentage:78}],
            personalDetails:[
                        {
                            email:"jenishkl21@gmail.com",
                            ph:8056669838,
                            DOB:"28-04-2000",
                            
                        
                        },
                        {
                            motherName:"YYYYYY",
                            FatherName:"XXXXXXX",
                            Sister:"ZZZZZ",
                        }

                            ],
            skils:["html","Js","Css","Bootstrap"],
            Certification:["Degree","Mep","HSC","Java"],
            experiance:["12YearsExp in Google","10YearsExp in AlienTechlogy in Mars, 20 yearsExp in unknowntechonology in unknown planet"],
            AreaOfInterest:"Technology"
        
            };
// console.log(resume);
// console.log(resume.personalDetails[0]);
let result;
let total=0;
let percent;
let j=0;
// let totalpercentage=0;
result=resume.education;
console.log(result);
for(let i=0; i<result.length; i++){
    // console.log(result[i].institute);
    percent=result[i].Percentage;
    j++
    // console.log(percent);
    total=total+percent;
    // console.log(total)

}
let totalpercentage=(total/j);
console.log(totalpercentage);

