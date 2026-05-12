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