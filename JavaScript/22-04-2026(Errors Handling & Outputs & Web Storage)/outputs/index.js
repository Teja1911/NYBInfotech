//Output Methods in JavaScript
//1. console.log(): This method is used to print messages to the browser's console. It is commonly used for debugging purposes.
console.log("Hello, Daily Sessions!");
//2. alert(): This method displays an alert box with a specified message and an OK button. It is often used to show important information to the user.
alert("Welcome to Daily Sessions!");
//3. document.write(): This method writes a string of text directly to the HTML document. 
document.write("This is the output of Daily Sessions.");
//4. prompt(): This method displays a dialog box that prompts the user for input. It returns the input value as a string.
let data=prompt("Please enter your name:");
console.log(data);
let d=document.getElementById("hi");
let d1=document.getElementById("hi1");
console.log(d);
console.log(d1);
//BOM (Browser Object model) Methods in JavaScript
//browser object model
//1. window.open(): This method opens a new browser window or tab with a specified URL.
console.log(screen.width);
console.log(screen.height);
console.log(navigator.userAgent);
let data1=prompt("please enter your name:");
let data1Int=parseInt(data1);
let data1Float=parseFloat(data1);
console.log(typeof(data1Int));
console.log(typeof(data1Float));
console.log(typeof(data1Int.toString()));
let f=10.620609;
console.log(f.toFixed(4));
let q=10.609;
console.log(typeof(q));
// The flow of javascript
// In JavaScript the flow of execution is generally from top to bottom. The code is executed line by line, and the flow can be altered when asynchronous operations are involved such as setTimeout, setInterval, or when using promises and async/await.The call stack will be monitor the synchronous code, while the event loop will handle the asynchronous code. In asynchronous there will micro and macro task queue, the micro task queue will be executed before the macro task queue. In the micro task queue will contain promises and in the macro task queue will contain setTimeout and SetInterval. When the call stack is empty, the event loop will check the micro task queue and execute all the tasks in it before moving to the macro task queue. This allows JavaScript to handle asynchronous operations without blocking the main thread, ensuring a smooth user experience.