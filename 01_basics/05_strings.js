const name = "Pranjal"
const repoCount = 1

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pranjal-kuamr-js')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
console.log(gameName.length)
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice( 1, -6)
console.log(anotherString);

const newStringOne = "   pranjal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pranjalkumar.com/pranjal%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));