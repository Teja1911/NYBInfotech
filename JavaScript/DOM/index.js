// DOM in JavaScript
//Document object model
//It will attach the document in the form of a tree structure
//HTML
// <html> <head><meta> <body> <header> <section> <footer>
//reading dom properties
//selecting DOM Element 
//getElementById()
//getElementByClassName
//getElementByTagName
//querySelector
//querySelectorAll


let h1=document.getElementById("h1")
console.log(h1)
//It will change the text in the html by getting the html element with id so we can change the content of that id 
h1.innerText="Document Object Model"
console.log(h1)
let heading=document.getElementsByClassName("heading")//
console.log(heading)

//DOM traversing
//parentElement
//children
//firstElementChild
//lastElementChild

let h=document.querySelector("h1")// It will return the first occurrence of the same tag 
console.log(h)
let name=document.getElementById("name")
let email=document.getElementById("email")
console.log(name)
let parentelement=name.parentElement
console.log(parentelement)
console.log(parentelement.children)
console.log(parentelement.firstElementChild)
console.log(parentelement.lastElementChild)

//Creating the new element
let newelement=document.createElement("h1")
newelement.innerText="+91 8877996655"
console.log(newelement)
//appendChild
parentelement.appendChild(newelement)
//prepend
parentelement.prepend(newelement)
//before and after methods for the target location for the new Element
//email.before(newelement)
name.after(newelement)

let btn=document.getElementById("btn")
console.log(btn)
btn.addEventListener("mouseover" ,() =>{
    alert("Button Clicked")
    btn.innerText="Button Clicked"

})
let reset=document.getElementById("reset")
reset.addEventListener("click",() =>{
    btn.innerText="Click"
})

//Event bubbling event travels from the child element to parent element 
//capturing event travels from parent element to child element
//delegation used in dynamic application there will be no limited child elements in it .In these we will attach the event to the parent element 

let inner=document.getElementById("inner")
function action(){
    console.log("Inner h1 Clicked")
}
inner.addEventListener("click",action)



let innerdiv=document.getElementById("innerdiv")
function action2(){
    console.log("Inner div")
}
innerdiv.addEventListener("click",action2)

let outer=document.getElementById("outer")
function action1(){
    console.log("Outer h1 Clicked")
}
outer.addEventListener("mouseover",action1)

let outerdiv=document.getElementById("outerdiv")
function action3(){
    console.log("Outer div")
}
outerdiv.addEventListener("mouseover",action3,true)//if we add the true in the parent element id  it will considered as event capturing(it will traversal from parent element to child element) by default event bubbling false value it will be traversal from child to parent 

let list=document.getElementById("list")
function listclick(){
    console.log("list Clicked")
}
list.addEventListener("click",(e) =>{
console.log(e.target)
})
//Normal Event
let button=document.getElementById("btn1")
let a=0
let b=0
let c=0
let d=0
let lastclick=0
button.addEventListener("click",()=>{
    a+=1
    console.log("The a value is:",a)
    console.log("Button Clicked")
})
//Throttling Event
button.addEventListener("click",()=>{
    let initial=Date.now()
    if(initial - lastclick >2000){
        b+=1
        console.log("The b value is:",b)
        lastclick=initial
    }
  
    console.log("Button Clicked")
})

//Debouncing in these we given 2seconds timeout if we click after second 1 then it will again count from the 0,1,2 if we trigger before the time it will take from the starting 
//It will give the better performance while handling multiple API'S
let clear
button.addEventListener("click",function(){
    clearTimeout(clear)
    clear=setTimeout(function(){
        d+=1
        console.log("Value of c:",d)
    },2000)
})

//JavaScript is multi thread
//Callback Function in these function can be called inside the parent function. In these first parent function will be executed then child function will be executed
function function1(s){
    console.log(s)
}
function one(a,b,c){
    console.log("One function is executed")
    c(a+b)
}
one(1,2,function1)

//Promise
//If we have a multiple functions then we can use the promise to handle the functions 
//pending , resolve/reject
let prom=new Promise((resolve,reject) => {
    let status=true
    if(status){
        //console.log("Resolved")
        resolve("Function Successful Resolved")
    }
    else{
        //console.log("Reject")
        reject("Function Rejected")
    }
})
//.then success case resolve
//.catch failure reject 

prom.then((a)=>{
    console.log(a)
})
.catch((b)=>{
    console.log(b)
})

let prom1=Promise.resolve("Completed")
let prom2=Promise.reject("Failure")
Promise.all([prom1,prom2])
.then(()=>{
    console.log("Done")
})
.catch(()=>{
    console.log("Not Done")
})
// Promise.race which promise will be completed first whether it is resolve or reject it will return which one is first executed
//let pa=Promise.resolve("P1 done")
//let pb=Promise.reject("P2 done")
let pa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("pa is done")
    },1000)
})
let pb=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("pb is done")
    },2000)
})
Promise.race([pa,pb])
.then((pa)=>{
    console.log(pa)
})
.catch((pb)=>{
    console.log(pb)
})

//Promise.allSettled() it will return whether it is resolved or reject 
Promise.allSettled([pa,pb])
.then((a)=>{
    console.log(a)
})

//Promise.any() it will return which promise is resolved first will be returned
Promise.any([prom1,prom2,pa,pb])
.then((a)=>{
    console.log(a)
})

//Async/await in these we will get the promise as return whether it is resolved or not if we added the await it will wait until the promise is resolved then it will return the promise 
function hi(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    })

}
async function hello(){
    return await hi()
}
let s = hello()
console.log(s)