const user ={
    username: "Pranjal",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        

   }

}

// user.welcomeMessage()
// user.username = "omega"
// user.welcomeMessage()

// console.log(this);

// function jio(){
//     let usernaem= "Pranjal kumar"
//     console.log(this.usernaem);
    
// }
// jio()

// const jio = function(){
//     let username = "Pranjal"
//     console.log(this.username);
// }


const jio = () => {
    let username = "Pranjal"
    console.log(this);
}

// jio()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
 