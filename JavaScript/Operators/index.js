// Operators in JavaScript
//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Bitwise Operators
//6. Ternary Operators
//7. Type Operators

// Arithmetic Operators
let a=10;
let b=20;
console.log(a+b); //30
console.log(a-b); //-10
console.log(a*b); //200
console.log(a/b); //0.5
console.log(a%b); //10 in these line a is 10 and b is 20 so when we divide a by b the remainder will be 10
//Increment post and pre increment
console.log(a++); //10 in these line a is 10 but after this line a will be 11 because of post increment
console.log(++a); //12 in these line a is 12 because of pre increment it will increment first and then it will print
//Decrement post and pre decrement
console.log(a--); //12
console.log(--a); //10

// Assignment Operators
let c=10;
c+=5; // c = c + 5
console.log(c); //15
c-=3; // c = c - 3
console.log(c); //12
c*=2; // c = c * 2
console.log(c); //24
c/=4; // c = c / 4
console.log(c); //6
c%=5; // c = c % 5
console.log(c); //1
c**=3; // c = c ** 3
console.log(c); //1 because 1 to the power of 3 is 1

// Comparison Operators
let x=10;
let y=20;
console.log(x>y); //false
console.log(x<y); //true
console.log(x>=y); //false
console.log(x<=y); //true
console.log(a==b); //false
console.log(a!=b); //true
console.log(a===b); //false
console.log(a!==b); //true
let z=10;
let t='10';
console.log(x==t); // true because x and t are both 10 but of different type 
console.log(x===z); // true because x and z are both 10 and of the same type 
console.log(x===t); // false because x and t are both 10 but of different data type 

// Logical Operators 
// And (&&), Or (||), Not (!)
let p=10;
let q=20;
console.log(p>5 && q>15); // true because both conditions are true
console.log(p>15 || q>15); // true because one of the conditions is true 
console.log(!(p>5)); // false because p is greater than 5 so the condition is true but we are negating it so it will be false
console.log(!(p>15)); // true because p is not greater than 15 so the condition is false but we are negating it so it will be true

// Bitwise Operators
// And (&), Or (|), Xor (^), Not (~), Left Shift (<<), Right Shift (>>), Zero Fill Right Shift (>>>)
let m=5; // in binary 0101
let n=3; // in binary 0011
console.log(m & n); // 1 in binary 0001
console.log(m | n); // 7 in binary 0111
console.log(m ^ n); // 6 in binary 0110 both bits are different so it will be 1 if both bits are same it will be 0
console.log(~m); // -6 in binary 1010 because of two's complement because of the way negative numbers are represented in binary
console.log(m << 1); // shortcut rule is m<<1 = m * 2 <<1=*2 <<2=*4 <<3=*8 if m is 5 the m<<1 is 10 10 in binary 1010 because we are shifting the bits to the left by 1 position and filling the rightmost bit with 0
console.log(m >> 1); // shortcut rule is n >> k = math.floor(n / 2^k) if m is 5 the m>>1 is 2 because we are shifting the bits to the right by 1 position and filling the leftmost bit with 0
console.log(m >>> 1); // Output is 2 because we are shifting the bits to the right by 1 position and filling the leftmost bit with 0

// Ternary Operator
let age=18;
age>=18 ? console.log("You are an adult") : console.log("You are a minor"); // Output is "You are an adult" it is shortcut for if else statement if the condition is true it will execute the first statement otherwise it will execute the second statement
