//Objects
//In objects data will be stored in key value pairs
//keys will be strings
//value can be of any data type
//key and value will be separated by :
//Each key value pair will be separated by ,
//{}
//Related Data
//Example:
// let employee={
//     employeename:"",
//     employeeid: ,
//     bloodgroup:"",
//     role:"",
//     address:"",
//     salary: ,
//     phonenumber:"",
//     dateofjoining:"",
//     dateofbirth:""
// }

// 4 ways to create a object
// 1. Objectliteral way
let a={};
console.log(a);
//2. New keyword
let b=new Object();
console.log(b);
//3. Constructor
function emp1(name){
    this.name=name;
}
let user1=new emp1("Teja");
console.log(user1);
//4. class 
  class person {
    constructor(name) {
        this.name=name;
    }
}
let user=new person("Teja");
console.log(user);

let c={one:"a",two:"b",three:"c"};
console.log(c.one);//key name should be mention
console.log(c["two"]);//key name mention in square bracket with single or double quotes
// To add the object
c.four="d"
console.log(c);
//To delete the object 
delete c.four
console.log(c)
// To change the value 
c.two=2
console.log(c);
c.two="b"
console.log(c);
// loops in object 
for(i in c){
    console.log(i)
}

//Copying of Objects
//1. Normal Copy
//2. Deep Copy 
//3. Shallow Copy

let original={
    a:"One",
    b:"Two",
    c:"Three",
    original1:{
        g:"Seven"
    }
}

//1. Normal Copy

let copy=original
console.log(original)
console.log(copy)
copy.d="Four";
console.log(copy);
console.log(original);

//2. Deep Copy JSON.parse and JSON.stringfiy 

let copy2=JSON.parse(JSON.stringify(original))
copy2.a="one"
copy2.original1.g="seven"
console.log(copy2)
console.log(original)





// 3. Shallow Copy with the help of spread operator(...)

let copy1={...original}
copy1.e="Five"
original.f="Six"
original.original1.h="Eight"
copy1.original1.h="eight" // it will not change for the primitive data types and it will change the reference datatypes in the copy and also in original
console.log("copy1",copy1);
console.log("original",original)


let obj={
    name:"Teja",
    age:22,
    address:"Hyderabad"
}
//Object.keys
let result=Object.keys(obj);
console.log(result)
//Object.values
let resultvalues=Object.values(obj)
console.log(resultvalues)
//Object.entries
let resultentries=Object.entries(obj)
console.log(resultentries)
// Template literals
console.log(`My name is ${obj.name}. I am ${obj.age}years old and I live in ${obj.address}. `)
//Math 
let ab=10
let bc=10.7
console.log(Math.floor(bc))
console.log(Math.ceil(bc))
console.log(Math.round(bc))
console.log(Math.sqrt(ab))
console.log(Math.pow(2,3))
console.log(Math.floor(Math.random()*10000))
console.log(Math.floor(Math.random() * 101))
// Formula to generate the random numbers with some range(i.e 50 to 100)
// Math.floor(Math.random()*(max-min+1))+min
let max=100
let min=50
let random=Math.floor(Math.random() * (max-min+1))+ min
console.log(random)

//String
let s="Hello"
let s1="World"
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.charAt(1))
console.log(s.concat(" ",s1))
let s2="Tejaswar,rao"
console.log(s2.split(","))
let s3="   Teja     "
console.log(s3.trim())
console.log(s.slice(0,4))





