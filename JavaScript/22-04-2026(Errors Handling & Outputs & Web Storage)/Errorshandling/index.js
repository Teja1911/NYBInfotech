console.log("Errors handling in JavaScript");
//Errors handling in JavaScript 
//In JavaScript we have three types of errors
//1. Syntax Errors
//2. Runtime Errors 
//3. Logical Errors

//try catch block
//In try catch block we can handle the errors in JavaScript
//try block is used to write the code which may throw an error and catch block is used to handle the error 
//finally block is used to execute the code which will be executed whether the error is thrown or not 

//console.log(hi);
try{
    console.log("hi");
    throw("An error occurred");
}
catch(r){
    console.log(r);
    console.log("An error occurred");
}
finally{
    console.log("This will be executed whether the error is thrown or not");
}
console.log("This is the end of the code");