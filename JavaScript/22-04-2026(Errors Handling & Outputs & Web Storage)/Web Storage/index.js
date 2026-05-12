//Web Storage
//In this the data will be stored in the form of an object and the data will be stored in the form of key value pair
//setItem to store the data in the web storage
//getItem to get the data from the web storage
//removeItem to remove the data from the web storage
//clear to clear the web storage
//There are two types of web storage we can store upto 5MB to 10MB of data in the web storage
//1. Local Storage
//2. Session Storage

//Local Storage
localStorage.setItem("name","Teja");
localStorage.setItem("age",22);
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
localStorage.removeItem("name");
console.log(localStorage.getItem(name));


//Session Storage
//In session storage the data will be stored until the browser is closed and the data will be stored in the form of key value pair
sessionStorage.setItem("Name","Teja");
sessionStorage.setItem("Age",22);
console.log(sessionStorage.getItem("Name"));
console.log(sessionStorage.getItem("Age"));
//sessionStorage.removeItem("Name");
sessionStorage.clear();
console.log(sessionStorage.getItem("Name"));
console.log(sessionStorage.getItem("Age"));

// Task 1: In ui welcome message and logout button when we click on logout button to access please login should be displayed 
// 1st screen  use dom manipulation to diplay please login message and a login button when we click on the login button then we should authenticate the token and store the token in the local storage and then we should display Hello User message in place of please login and beside there will be the logout button when we click on the logout button then it should display again please login message 
// please login use h1 tag and we should get it and we should that this token is available in the local storage or not if it is available then we should display Hello User message in place of please login and beside there will be the logout button when we click on the logout button then it should display again please login message
// login button --> authtenticate token in the  local storage