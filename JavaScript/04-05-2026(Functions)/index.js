//Functions JavaScript

//Function Declaration
function add(a , b){
    return a + b;
}
let sum=add(2,3);
console.log(sum);

//Function Expression , Named Function , Anonymous Function , Arrow Function

function num(num1=50,num2=60){ // Default parameter
    console.log(num1 , num2);
    return 
}
num(10,20); // Arguments will have the higher priority than the default parameter
num(10); // If we are passing only one argument then the second parameter will take the default value
num(); // If we are not passing any argument then both the parameters will take the default value 

// Rest parameter and aruguments object
function res(a,b,c,d,e,...f){ // Rest parameter will take the remaining arguments as an array
    console.log(a,b,c,d,e);
    console.log(f); // Rest parameter will contain the remaining arguments as an array
    console.log(arguments); // Arguments object will contain all the arguments passed to the function
} // Rest parameter will take the remaining arguments as an array
res(1,2,3,4,5,6,7,8,9);

// Recursive function
function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1); // Recursive call function calling itself inside the function
}
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

let a=function fun(){
    console.log("Named Function Expression");
}
a(); // Named Function Expression

let b=function(){
    console.log("Anonymous Function Expression");
}
b(); // Anonymous Function Expression

let c=()=>{
    console.log("Arrow Function Expression");
}
c(); // Arrow Function Expression

// Difference between var , let and const 
//               var   let  const
//re-declaration yes   no    no
//re-assignment  yes   yes   no
//initialization yes   yes   no
//hoisting       yes   no    no (let and const are stored in the script temporal dead zone until they are initialized)
//scope       function block block

var x=10;
console.log(x);
var x=20; // Re-declaration is allowed with var
console.log(x);

let y=30;
console.log(y);
//let y=40;  Re-declaration is not allowed with let
console.log(y);

const z=50;
console.log(z);
//const z=60; Re-declaration is not allowed with const

var a1=100;
a1=200; // Re-assignment is allowed with var
console.log(a1);

let b1=300;
b1=400; // Re-assignment is allowed with let
console.log(b1);

const c1=500;
//c1=600; Re-assignment is not allowed with const
console.log(c1);

var d1; // Initialization is not required with var
console.log(d1); // Output: undefined

//let d1; // Initialization is not required with let 
console.log(d1); // Output: undefined

//const d1; // Initialization is required with const
console.log(d1); // Output: SyntaxError: Missing initializer in const declaration

console.log(e1); // Output: undefined (var is hoisted)
var e1=700;
console.log(e1); // Output: 700

//console.log(f1); // Output: ReferenceError: cannot access 'f1' before initialization (let and const are not hoisted)

var g1=800;
function test(){
    // var is function scoped
    console.log(g1); // Output: 800
}
test();
console.log(g1); // Output: 800


function test1(){
    let h1=1100; // let is block scoped
    console.log(h1); // Output: 1100
}
test1();
// console.log(h1); Output: ReferenceError: h1 is not defined (let is block scoped)



function test2(){
    const i1=1300; // const is block scoped
    console.log(i1); // Output: 1300
}
test2();
// console.log(i1); Output: ReferenceError: i1 is not defined (const is block scoped)

// Function var , let and const
// var  --> This can be accessed outside the function 
// let and const --> This cannot be accessed outside the function

// Block var , let and const
// var --> This can be accessed outside the block
// let and const --> This cannot be accessed outside the block

// var is a functional scope 
// let and const are block scope

//IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("IIFE Function");
})(); // IIFE function is a function that is immediately invoked after its declaration.

// Function Currying
// function sum(a){
//     function (){
//         function (){
//             function (){
//                 function (){

//                 }
//             }
//         }
//     }

// }

function num(a){
    return function(b){
        console.log(a , b);
        return a,b;
    }
}
let num1=num(10)(20); // Function Currying is a technique of transforming a function with multiple arguments into a sequence of functions that take a single argument.
console.log(num1); // Output: 10 20 

function percentage(marks){
    return function(totalMarks){
        console.log((marks/totalMarks)*100);
        return (marks/totalMarks)*100;
    }
}
let student1=percentage(80)(100); //  Function currying
let student2=percentage(75)(100);
console.log(student1); // Output: 80
console.log(student2); // Output: 75