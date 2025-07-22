//singleton 
// object literals 
const mySym = Symbol("key1")

const jsUser = {
    name: "Pranjal "
    ,"full name": "pranjal Kuamr"
    , [mySym]: "myKey1"
    ,age: 23 
     ,location: "Dehradun"
     ,email: "pranjalkumar@gmail.com"
     ,isLoggedIn : false     
     ,lastLoginDays : ["monday" , "saturday"]

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(  jsUser[mySym]);

jsUser.email = "prnjal12@gmail.com"
// Object.freeze(jsUser)
jsUser.email="hero@asdf.com"

console.log( jsUser);

jsUser.greeting = function(){
    console.log("hello js user");

}
jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);

}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());