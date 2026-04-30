//If we create a variable will create the address for the variable
//JavaScript execution done in two phases memory creation and then code execution
//JavaScript Data Types 
//1.Primitive Data Types
//2.Non Primitive Data Types
//1. Primitive Data Types stores single value ,immutable values(values cannot be changed) and are copied by a value.
//Number
let age=22;
let price=30.99;
console.log(typeof(age));//typeof will help us to show what type of data as be stored in a variable
console.log(age);
console.log(typeof(price));
console.log(price);
//String
let name="Teja";
console.log(typeof(name));
console.log(name);
//Boolean 
let bool=true;
let bool1=false;
console.log(typeof(bool));
console.log(bool);
console.log(typeof(bool1));
console.log(bool1);
//Undefined a variable declared but not assigned any value automatically gets undefined
let x;
console.log(typeof(x));
console.log(x);
//Null is explicitly assigned by the developer to represent no value
let user=null;
console.log(typeof(user));
console.log(user);
//BigInt
let bigin=123457891234567890n;
console.log(typeof(bigin));
console.log(bigin);
//Symbol
let syb=Symbol("id");
console.log(typeof(syb));
console.log(syb);

//2.Non Primitive Data Types
//Non primitive data type stores collections of data and are copied by a reference
//Object
let obj={
    name:"Teja",
    age:22
}
console.log(typeof(obj));
console.log(obj);
//Array
let arr=[12,19,3,11];
console.log(typeof(arr));
console.log(arr);
//Function
function hi(){
    console.log("Hello");
}
console.log(typeof(hi));
console.log(hi);
//Date
let date=new Date();
console.log(date);
console.log(date.getFullYear());
