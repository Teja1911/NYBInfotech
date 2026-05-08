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