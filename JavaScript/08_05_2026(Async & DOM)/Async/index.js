//Async 

console.log("One")
//with the help of setTimeout method i can make the async function 
//setTimeout 
setTimeout(()=>{
    console.log("Two")
},2000) // It will take in milliseconds 
console.log("Three")
//setInterval
let clear=setInterval(()=>{
    console.log("Four")
},3000)
//clearInterval
setTimeout(()=>{
clearInterval(clear)
},6000)


let two=setInterval(()=>{
    console.log("Hello World")
},4000)
setTimeout(()=>{
    clearInterval(two)
},8000)
