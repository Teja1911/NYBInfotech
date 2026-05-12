//Destructing 
// 1.Array Destructing 
let a=[1,2,3,4,5]
let [A,B,C,D,E]=a
console.log(a[0])
console.log(a[1])
console.log(A,B,C,D,E)
//2.Object Destructing

let obj={
    name:"Teja",
    location:"Hyderabad"
}
let name=obj.name
console.log(name)

//Iterator(Array) & generator
let ita=[1,2,3]
for(i in ita)
console.log(i)

let num=[1,2,3]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

//Generators
function* hello(){
    yield "Hello"
    yield "Bye"
    yield "Done"    
}
let n=hello()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())

//Destructing nested array
let arr=[1,2,3,4,[5,6,7,8,[9,10]]]
let [A1,B1,C1,D1,[E1,F1,G1,H1,[I1,J1]]]=arr
console.log(A1,B1,C1,D1,E1,F1,G1,H1,I1,J1)

//Destructing  nested object 
let obj1={
    Name:"Teja",
    Location:"Hyderabad",
    Details:{
        Age:22,
        Role:"Associate Software Engineer"
    }
}
let {Name,Location,Details:{Age,Role}}=obj1
console.log(Name,Location)
console.log(Age,Role)
// let obj1={
//     name1:"Teja",
//     Location1:"Hyderabad",
//     details:{
//         age:25,
//         profession:"Software Engineer"
//     }
// }
// let {name1,Location1,details:{age,profession}}=obj1;
// console.log(name1,Location1);
// console.log(age,profession);

