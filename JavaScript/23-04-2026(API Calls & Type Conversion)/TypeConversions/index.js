//TypeConversions in JavaScript
//Implicit Type Conversions
//Explicit Type Conversions

//Implicit Type Conversions where JavaScript automatically converts one data type to another when performing operations.
let num=5;
let str="10";
let result=num+str; // Here, JavaScript converts the number 5 to a string "5" and concatenates it with "10"
console.log(result); // Output: "510"
//Boolean to Number
let bool=true;
let num2=bool+2; // Here, JavaScript converts the boolean true to the number 1 and adds it to 2
console.log(num2); // Output: 3
//Equality Comparison
let a=5;
let b="5";
let isEqual=(a==b); // Here, JavaScript converts the string "5" to the number 5 before comparing
console.log(isEqual); // Output: true
//Automatic Conversion in Logical Operations 
let res=Boolean('');
let res1=Boolean('Hello');
console.log(res); // Output: false (empty string is falsy)
console.log(res1); // Output: true (non-empty string is truthy)

//Explicit Type Conversions where developers manually convert data types using built-in functions or methods.
let num3=10;
let str2=String(num3);
let str3=num3.toString(); // Explicitly converting number to string
console.log(str2); // Output: "10"
console.log(str3); // Output: "10"
//String to Number
let str4="20";
let num4=Number(str4); // Explicitly converting string to number
let num5=parseInt(str4); // Using parseInt to convert string to integer
console.log(num4); // Output: 20
console.log(num5); // Output: 20
//Boolean to String
let bool2=false;
let str5=String(bool2); // Explicitly converting boolean to string
console.log(str5); // Output: "false"
//Converting to Boolean
let str6="Hello";
let bool3=Boolean(str6); // Explicitly converting string to boolean 
let str7="";
let bool4=Boolean(str7); // Explicitly converting string to boolean
console.log(bool3); // Output: true (non-empty string is truthy)
console.log(bool4); // Output: false (empty string is falsy)