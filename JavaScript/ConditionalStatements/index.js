//Conditional Statements in JavaScript
//1. If Statement
//2. If...Else Statement
//3. If...Else If...Else Statement
//4. Switch Statement

function checkage(age){
    if(age>18){
        console.log("You are an adult");
    }
}
let age=22;
checkage(age); // You are an adult
// Truthy value and Falsy value in JavaScript
// Truthy value 1,"Hello",true,{},[]
// Falsy value 0,"",false,null,undefined,NaN
if(true){
    console.log("Truthy Value")
}
if(false){
    console.log("Falsy Value");
}
// If...Else Statement
if(age>18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
// If...Else If...Else Statement
let a=10;
if(a<0){
    console.log("Negative Number");
}
else{
    console.log("Positive Number");
    if(a%2==0 && a!=0){
        console.log("Even Number");
    }
}
//Else If...Else statement
let marks=99;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else if(marks>=60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}
//Switch Statement
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}