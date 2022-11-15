let company=[
  {
  name:"google",
  category:"product",
  startDate:new Date(1998, 11, 4),
  endDate:new Date(2760, 11, 4)
},
  {
  name:"Amazon",
  category:"retail",
  startDate:new Date(1994, 11, 4),
  endDate:new Date(2390, 11, 4)
},
  {
  name:"Flipkart",
  category:"retail",
  startDate:new Date(2007, 11, 4),
  endDate:new Date(2050, 11, 4)
},
  {
  name:"marvel",
  category:"retail",
  startDate:new Date(1939, 11, 4),
  endDate:new Date(3000, 11, 4)
},
  {
  name:"Microsoft",
  category:"product",
  startDate:new Date(1975, 4, 4),
  endDate:new Date(3000, 11, 4)
},
]
let date=new Date()
// Exercise 1: In index.js print the name of each company using forEach
let print=company.forEach(element => {
    console.log(element.name);
});
// for(let x of company){
//   console.log(x.name)
// }

// // Exercise 2: In index.js print the name of each company that started after 1987

let get_company=company.map((item)=>{
  if(item.startDate>new Date(1987, 11, 4)){
    console.log("Company after 1987: "+item.name);
  }
})

// // Exercise 3: In index.js get only the companies that have category Retail, increment
// // their start by 1 and append in the DOM a div that has the name, the category, the
// // start and the end in paragraphs elements

let find=company.map((item)=>{
  if(item.category=="retail"){
    item.startDate=item.startDate.getFullYear()+1
    $("#retail").append(`<div class="col-3 card"><h1>name</h1><span>${item.name}</span><h2>category<h2>${item.category}<h3>start date<h3>${item.startDate}<div>`)
  }
})

// // Exercise 4: In index.js sort the companies based on their end date in asceding order

let sort_company=company.sort((a,b)=>{
      return a.endDate.getFullYear()-b.endDate.getFullYear();
})
console.log("sorrted company: ",sort_company)


// //Exercise 5 In index.js sort the ages array in desceding order

let calculate_age=company.map((item)=>{ 
  var get_age = Date.now() - item.startDate;
  var age = new Date(get_age); 

  return (Math.abs(age.getUTCFullYear() - 1970));
})
calculate_age.sort()
console.log(calculate_age.reverse())




// // Exercise 6: In index.js print the sum if you add all the ages using reduce
var sum_of_ages=calculate_age.reduce((previousValue, currentValue)=>{
  return previousValue+currentValue;

})
console.log("Sum of  ages: "+sum_of_ages);



// // Exercise 7: In index.js make an new object that has the properties of name and
// // category same as the companies[0] and a method print that prints out the name, use
// // object destructuring and ES6 JS
let company2=[
  {
  name:"google",
  category:"product",
  startDate:new Date(1998, 11, 4),
  endDate:new Date(2760, 11, 4),
  print:()=>{
    return 4;
  }
},
  {
  name:"Amazon",
  category:"retail",
  startDate:new Date(1994, 11, 4),
  endDate:new Date(2390, 11, 4),
  print:()=>{
    return 3;
  }
},
  {
  name:"Flipkart",
  category:"retail",
  startDate:new Date(2007, 11, 4),
  endDate:new Date(2050, 11, 4),
  print:()=>{
    return 2;
  }
},
  {
  name:"marvel",
  category:"retail",
  startDate:new Date(1939, 11, 4),
  endDate:new Date(3000, 11, 4),
  print:()=>{
    return 1;
  }
},
  {
  name:"Microsoft",
  category:"product",
  startDate:new Date(1975, 4, 4),
  endDate:new Date(3000, 11, 4),
  print(){
    return 0;
  }

},
]
let example7=company2.map((item)=>{
  let {name:companyname,category:cate,print:p}=item
  console.log(companyname,"catergory: "+cate,p())
})

// // Exercise 8: In index.js create a funcion that takes an unkown number of arguments
// // that are numbers and return their sum;

let example8=(...arr1)=>{
  total=0;
  for(let t of arr1){
    total+=t;
  }
  return total;
}
console.log(example8(3,2,3,4,5,5,66,6,6,))


// // Exercise 9: In index.js make a function that takes an unkown number of arguments of
// // any type and adds them in an array and returns the array, if the argument is an array
// // it should add it's values to the array that will be returned by the function
var arr2=[2,4,5,"2dd"];
let example9=(...arr)=>arr
console.log(example9("dcrfv",123,"xxh",...arr2))


// // Exercise 10:index.js distructure the property street in a variable named street from
// // the object person

let obj=[{
  name:"dhf",
  street:"MarsColony"
},{
  name:"kjsx",
  street:"VenusColony"
}]

let{street,name}={street:obj.map((a)=>a.street),name:obj.map((a)=>a.name)}
// let{street}={name:obj.map((a)=>a.name)}
console.log("Street",street);
console.log("Names: ",name);


// // Exercise 11: In index.js write a function that everytime you call it, it returns a number
// // that increments starting from 0
var a=0;
let example11=()=>a++;
console.log(example11())
console.log(example11())
console.log(example11())
console.log(example11())
console.log(example11())


// // Exercise 12: In index.js create a function that distructures the query parameters of a
// // url and adds them in an object as key value pairs and then returns the object


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let product = urlParams.get('name');
let namee="Jenish";  //example i give urm parm as string
console.log(namee);
let qobj={};
let queryparam=(name,namme)=>{
    qobj[name]=namme
    console.log(qobj)
}
console.log(queryparam( "urlname",namee))















// // part2
// // Exercise 1: In index.js create a function called sum that takes 2 arguments type
// // numbers and returns their sum. If you do not provide the second argument then it will
// // use the value of the first plus 1
let sum=(a,b=2)=>a+b
console.log(sum(1))



// // Exercise 2: In index.js create a constructor that returns an instance even if you do not
// // add the keyword new

var c=new class{


  constructor(name){
    this.name=name
   console.log("part2 exeercise2")
  }
  geet(namee){
    
   console.log("part2 exeercise2")
   console.log(namee)
  }
  }
  console.log(c)


//   // Exercise 3: In index.js Write a JavaScript program to compare two objects to
//   // determine if the first one contains equivalent property values to the second one


let obj1={
  name:"jenish",
  age:2
}

let obj2={
  name:"jenish",
  age:22
}
let final=(a,b)=>{
 if(JSON.stringify(a)==JSON.stringify(b)){
  return true;
 }
else{
  return false
}
  

}
console.log(final(obj1,obj2))




// // Exercise 4: In index.js Write a JavaScript program to filter out the specified values
// // from a specified array. Return the original array without the filtered values
let array1=[1,2,3,5,6,7,7,7,7,12,21,23,44,]
let filter_exercise=array1.filter((item)=>{
  if(item%2==0){
    
    return item;
  }
  else item2(item)
})
console.log("even:  ",filter_exercise);
function item2(item){
  array1=item;
  console.log("odd:  ",array1)
}

// // Exercise 5: In index.js write a programm that check if a value is null or undefined and
// // returns a string saying what it is


let what =(val)=>{
  val===null||val===undefined?console.log("What it is?"):console.log("Good");
}
console.log(what())



// // Exercise 6: Write a JavaScript program to target a given value in a nested JSON
// // object, based on the given key
let cars=
  { name:"BMW",
    Networth:"300B",
    model:[{
      namme:"udf",
      color:{
        red:"dark"
      }
    },
  {
    namme:"Volt"
  }]

  }

    let functionk=(object,key)=>{
      if(key in object){
        console.log(object[key])
      }
      else {
        Object.values(object).reduce((keey,val)=>{
          if (keey !== undefined) return keey;
          if (typeof val === 'object') return functionk(val, key);
        },undefined)
      }
    }
    console.log(functionk(cars,"namme"))



// // part3
// // Exercise 1: In index.js Loop and print the properties of person;
let person=[{
  name:"jensih",
  age:22,
  status:"single"
}]
let prop_person=person.map((a)=>`Name`+a.name+`age`+a.age+a.status)

console.log(prop_person);

// // Exercise 2: Create a function that you provide an even number and it creates a multi
// // dimensional Array. Example if I give 2 I should get; const array = [ [1, 2], [1, 2] ]; Then
// // print that last index of the last array.
let arr=[1,2,3,4]
let f=arr.map((b)=>{
  let a=1;
  return([a,b])
})
console.log(f)


// // Exercise 3: Write a console statement that prints a warning of 'please update your
// // browser'?

console.warn("please update your browser'?")


// // Exercise 4: Write a console statement that prints an error of 'invalid password'?
console.error("'invalid password'")

// // Exercise 5: Write a console statement that prints the properties of an element p.
let element =[{
  NAME:"JENSH",
  age:22
},
{
  name:"nathika",
  age:20
}]
let[m,p]=element;
console.log(p);

// // Exercise 6: Write a try catch statement that prints out an error. In both cases it will
// also print out finally
let errorhandle=(str)=>{
  try{
    if(str/2==0){
      return true
    }

  }
  catch(e){
    return false;
  }
  finally{
    return 0
  }
}
console.log(errorhandle("h"))

// // example 7: Write a switch statement that check and prints out which day do we have,
// // ex Thursday
let d=new Date()
switch (d.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);



// // Exercise 8: Write 5 different ways to check if an object is empty
let objs={};
if(Object.keys(objs).length==0){
  console.log("Mt")
}
const check_mtobj=JSON.stringify(objs)
if(check_mtobj==="{}"){
  console.log("MT")
}
if(Object.values(objs)==""){
  console.log("Mt")
}
if(Object.keys(objs)==""){
  console.log("Mt")
}
let five=(objs,key)=>{
if(key in objs){
  console.log("not mt")}
  else {
  console.log("mt")}
}
console.log(five(objs,""));


// // Exercise 9: Write 4 different ways to find a value in an Array, write your own smart
// // examples
let array8=[2,3,5,6,7,7,7,];
let array9=[
  {
    name:"jenish",
    age:22
  },
  {
    name:"akash",
    age:26
  },
  {
    name:"paraksh",
    age:21
  },
];
let filter_method=array8.filter((a)=>{
  return a>5
})
let find_method=array8.find((a)=>{
  return a>5
})
console.log(`filterMethod`,filter_method)
console.log(`findMethod`,find_method)
  
let mapmethod=array8.map((a)=>{
  if(a>5){
    console.log( `MapMethod`,a)
  }
})
// // let include_method=array9.map((a)=>{
 let check=array9.find((a)=>a.name=="jenish")
  console.log(check)
 let check2=array9.find(({name})=>name=="jenish")
  console.log(check2)

let every_method=array8.every((c)=>{
   console.log(c > 1);
})
if(array9.includes(7)){
  console.log(array8);
}

// // })


// // part4
// // Exercise 1: Create a function that takes an array as an argument and removes all
// // duplicates;
let _duparray=[1,1,3,3,3,2,4,5]
let set=new Set(_duparray)
console.log(set);

// // Exercise 2: Create a function that takes 3 arguments. The first is an array, the
// // seconds is a value and the third is a string. According to the string it will add that
// // values or remove a value from the begging of the array, or add that value or remove
// // a value from the end of the array.
let arj=["m",12,75,998,0];
let fun4=(a,b,c)=>{
  if(c=="Add"){
    a.push(b)
    return a
  }
  else if(c=="Remove"){
    var ind=a.indexOf(b)
    a.splice(ind,1)
    return a
  }
}
console.log(fun4(arj,12,"Remove"))

// // Exercise 3: Create a function that takes in an array filters everything besides
// // numbers and then make it fail so you can debug it.
let debug_fun=arj.filter((a)=>{
  try{
    return a===0;
  }
  catch(e){
    return false;
  }
  finally{
    return 8
  }
})
console.log(debug_fun);


// // Exercise 4: Do the filter Exercise

let filter_ex=company.filter((a)=>{
  return a.category==="product"
})
console.log(filter_ex)
// // part5
// // Exercise 1: Concat nums1 into nums2, then clone it into nums3 and find the max and
// // the min number;

let mm=(...a)=>{
console.log(Math.min(...a))
console.log(Math.max(...a))
}
console.log(mm(12,2,3,21,34))

// // Exercise 2: Sum the total score of all the fishermen. Also get the average score and
// // print the names of those that have a score higher then 100

let scores=[
  {
      name:"benish",
      score:87,
},
  {
      name:"bibin",
      score:87,
},
  {
      name:"prakash",
      score:87,
},
]
let initialValue = 0
let sc = scores.reduce((a,b)=>{
    return a + b.score
}, initialValue)
console.log(sc)


// // Exercise 3: Write a regular expression that finds all numbers in a string.
var string = "jfsuycfyucgf8i7c834tf384f3bf743837683683br6438fb38bffb3fbffbf";
var numbers = string.match(/\d+/g).map(Number);
console.log(numbers.join(""));

// // Exercise 4: Write a function that checks if scores are all positive numbers and an
// // other function if there is a value that is not a number
let check_posiitive=(...a)=>{
  var sc=[]
  for(let m of a){
    if(m>0){
      sc.push(m)
      console.log("positive scores ",sc)
    }
    else if(m<0){
      console.log(m,' is negative score')
    }
    else{
      return hk(m)
    }
  }
}
let hk=(m)=>{
  console.log(m," is NaN")
}
console.log(check_posiitive(12,7,-5,5,"yusdu"))


// // Exercise 5: Write a function that takes 2 arguments and checks if both are positive if
// // one is positive and if both are negative.

let positive_negative=(a,b)=> a>0&&b>0? console.log("positive"):console.log("negative")
console.log(positive_negative(12,34))

// var arr=[1,3,4,,45,45,23,44,2,2,67,20];
// // class Filter{
// //     constructor(a){
// //       this.a=a;
// //     }
    
//      let final=arr.filter((item)=>{
//       console.log(item>18);
//       return arr
//     })
//     console.log(final)
//     // }
    
    // let obj =new Filter(arr);
    // console.log(obj.final())