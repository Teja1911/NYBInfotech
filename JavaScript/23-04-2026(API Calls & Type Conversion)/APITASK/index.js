//Task  when we click on the get data button it should print on the ui all the users with the following details but after clicking the button it should not be visible in the ui and when we click on the clear data button it should clear the data from the ui.and clear button should not be visible in the ui before the data is fetched and after the data is cleared it should not be visible in the  ui.
// Name
// Username
// Email
// Address sub geo

//First we need to take buttons with there id with the help of getElementById and also we need to take the container where we want to show the data on the ui .Next we need to add event listener on the get data button and inside the event listener we will make a fetch call to the api and we will use the async await to get the data from the api and then we will  loop through the data with the forEach loop so it will display all the users data on the ui and after that we created the new element with the help of createElement we used the variable to store the created element and we used the innerHTML to display in the ui we fetch the server data  with specific key values which are required with the of backticks and we will append the user data to the container and after that we will hide the get data button and show the clear data button and for the clear data button we will add event listener and inside the event listener we will clear the data from the ui and hide the clear data button and show the get data button.

let getDataBtn=document.getElementById('getDataBtn');
let clearDataBtn=document.getElementById('clearDataBtn');
let userDataContainer=document.getElementById('userDataContainer');
getDataBtn.addEventListener('click',async()=>{
    let res=await fetch('https://jsonplaceholder.typicode.com/users');
    let data=await res.json();
    userDataContainer.innerHTML='';
    data.forEach(user =>{
        let userCard=document.createElement('div');
        userCard.innerHTML=`
        <h3>Name: ${user.name}</h3>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.geo.lat}, ${user.address.geo.log}</p>
        `;
        userDataContainer.appendChild(userCard);
    });
    getDataBtn.style.display='none';
    clearDataBtn.style.display='block';
});
clearDataBtn.addEventListener('click',()=>{
    userDataContainer.innerHTML='';
    clearDataBtn.style.display='none';
    getDataBtn.style.display='block';
});

