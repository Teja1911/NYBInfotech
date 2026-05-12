//Loops
//1. For Loop
//For of Loop
//For in Loop
//For Each Loop
//2. While Loop
//3. Do While Loop


for(let i=0; i<=5; i++){ //When we know the number of iterations, we use for loop 
    console.log(i);
}
let grades=[90,80,70,60];
for(let i=0; i<grades.length; i++){
    console.log(grades[i]);
}
let day=2;
day === 1 ? console.log("Monday") : day === 2 ? console.log("Tuesday") : day === 3 ? console.log("Wednesday") : day === 4 ? console.log("Thursday") : day === 5 ? console.log("Friday") : day === 6 ? console.log("Saturday") : day === 7 ? console.log("Sunday") : console.log("Invalid Day");

//While Loop 
//When we don't know the number of iterations, we use while loop
let i=0;
while(i<=10){
    console.log(i);
    i+=1;
}
let j=1;
let count=0;
while(count<10){
    if(j%2==0){
        console.log(j);
        count++;
    }
    j++; 
}

//Do While Loop
//When we want to execute the block of code at least once, we use do wile loop
do{
    console.log("Hello");
}while(false)
while(false){
    console.log("World");
}

// For of Loop
//When we want to iterate over the elements of an array, we use for of loop return the value of the element in each iteration
let colors=["Red","Green","Blue"]; // it will used only for iterable objects like arrays, strings, maps, sets etc;
for(color of colors){
    console.log(color);
}
for(color in colors){ // keys are the index of the array
    console.log(colors[color]);
}

//For in Loop
//When we want to iterate over the properties of an object, we use for in loop key is the variable that will hold the property name of the object in each iteration return the key
let person={
    name:"Teja",
    age:22
}
for(key in person){
    console.log(key);
    console.log(person[key]);
}