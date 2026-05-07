// Arrays in JavaScript
// Collection of items stored at contiguous memory locations
// To store multiple values in a single variable instead of declaring separate variables for each value
// To represent an a array we use square brackets [] and separate the values with commas
// It can hold multiple arrays in a single array, which is called a multidimensional array
// It can hold different data types in a single array, which is called a heterogeneous array

// Creating an array
let arr=[1,2,3,4,5];
console.log(arr); // [1,2,3,4,5]
// Multidimensional array
let arr2=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2); // [[1,2,3],[4,5,6],[7,8,9]]

// Accessing elements in an array
// It starts from 0 and ends at n-1, where n is the number of elements in the array
console.log(arr[0]); //1
console.log(arr[4]); //5
console.log(arr[arr.length - 1]); //5


// push() method adds an element to the end of the array
arr.push(6); 
console.log(arr); // [1,2,3,4,5,6]

function addElement(element){
    arr.push(element);
    console.log(arr);
}
addElement(7); // [1,2,3,4,5,6,7]

// Unshift() method adds an element to the beginning of the array
arr.unshift(0);
console.log(arr); // [0,1,2,3,4,5,6,7]

// splice() method adds an element at a specific index
arr.splice(3,0,10); // (index, number of elements to remove, element to add)
console.log(arr); // [0,1,2,10,3,4,5,6,7]

// Remove elements from an array
// pop() method removes the last element from the array
arr.pop();
console.log(arr); // [0,1,2,10,3,4,5,6]

// shift() method removes the first element from the array
arr.shift();
console.log(arr); // [1,2,10,3,4,5,6]

// splice() method removes an element at a specific index
arr.splice(2,1); // (index, number of elements to remove)
console.log(arr); // [1,2,3,4,5,6]

arr.splice(0,0,0);
console.log(arr); // [0,1,2,3,4,5,6]
arr.splice(arr.length,0,7);
console.log(arr); // [0,1,2,3,4,5,6,7]

arr.splice(0,1);
console.log(arr); // [1,2,3,4,5,6,7]
arr.splice(arr.length-1,1);
console.log(arr); // [1,2,3,4,5,6]

// Length of an array
console.log(arr.length); // 6

let count=0;
for(let i of arr){
    count++;
}
console.log(arr); // [1,2,3,4,5,6]
console.log(count); //6

// IndexOf is used to find the particular element in a array
// If the value is not present in the array it will return -1
console.log(arr.indexOf(3));

//includes returns true or false
console.log(arr.includes(5)); // If value present it will return true or else false 

// lastIndexOf it will 
console.log(arr.lastIndexOf(5));

let arr3=[1,2,3,4,5];
//splice
// arr3.splice(0,arr3.length);
// console.log(arr3);
//Making array length to 0
console.log(arr3.length);
arr3.length=0;
console.log(arr3.length);
//Assign Empty array
arr3=[];
console.log(arr3);

//combining two arrays

// concat
let arr4=[1,2,3]
let arr5=["a","b","c"];
console.log(arr4,arr5);
let arr6=arr4.concat(arr5);
console.log(arr6);

// spread operator (...)
let arr7=[...arr4,...arr5];
console.log(arr7); 

for(k of arr5){
    console.log(k);
}

// Testing the array
// some and every
 
console.log(arr.some(i => i>3));
console.log(arr.every(i => i>2));

//join
console.log(arr5.join(" "));
//sort
let a=[5,19,12,11,3]; // It will take first digit when we take more than one digit it will compare the first digit will be compared with entire elements in the array

console.log(a.sort());

for(let i=0;i<a.length-1;i++){
    for(let j=0;j<a.length-1-i;j++){
        if(a[j]>a[j+1]){
            let temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp;
        }
    }
}
console.log(a);

//Flattening of array
let b=[1,2,3,4,[1,2,3,[2,1,3]]];
console.log(b.flat(2));

//Remove Duplicates

let m=[1,2,1,3,4,5,4,6,4,7,8];
console.log(... new Set(m));

let n=[];
for(let i of m){
    if(n.indexOf(i) == -1){
        n.push(i);
    }
}
console.log(n);
// Map , Filter and Reduce Methods
console.log(a.map(a => a-1));
console.log(a.filter(i => i>4)); //returns the array  
console.log(a);
console.log(a.reduce((acc,curr) => acc +  curr, 0)); // Reduces to single array