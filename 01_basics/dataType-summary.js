//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// myFunction()// calling a function 

// console.log(typeof anotherId);



//++++++++++++++++++++++++++++++++++++


// stack(primitive ), Heap(Non-Primitive)

let myName = "Pranjal Kumar"

let anotherName = "anushk"
anotherName = "Montu"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@oksbi"
}
 
let userTwo = userOne 

userTwo.email ="pranjal#$@.cm"

console.log(userOne.email)
console.log(userTwo.email);




