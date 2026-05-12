//API Methods
//GET, POST, PUT, PATCH, DELETE

//GET - To fetch data from the server
//POST - To send data to the server
//PUT - To update data on the server
//PATCH - To update a part of the data on the server
//DELETE - To delete data from the server

//https://jsonplaceholder.typicode.com /users
//https://jsonplaceholder.typicode.com/albums
// Fe --> API (get) --> BE( Routes, middleware, controllers)
let data={
    name:"John Doe"
}
fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    return data.json();
   
})
.then(res => console.log(res))
.catch(err => console.log(err));
//we use stringify to convert the data into string format before sending to the server 
//Post request
// fetch('url',{
//     method:'POST',
//     body:JSON.stringify(data),
//     headers:{
//         'Content-Type':'application/json'
//     }
// })

// Task  when we click on the get data button it should print on the ui all the users with the following details but after clicking the button it should not be visible in the ui and when we click on the clear data button it should clear the data from the ui.and clear button should not be visible in the ui before the data is fetched and after the data is cleared it should not be visible in the  ui.
// Name
// Username
// Email
// Address sub geo