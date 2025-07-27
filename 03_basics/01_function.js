function sayMyName(){

    console.log("p");
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("a");
    console.log("l");
    
}

//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("PRANJAL"))
// console.log(loginUserMessage("PRANJAL"))

function calculateCartPrice(...num1){
     return num1
}

// console.log(calculateCartPrice(200, 400, 500 ));
 
const user = {
    username : "Pranjal",
    price: 101
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)
handleObject({
    username : "don",
    price: 399
})

const MyNewArray = [1213 , 123, 234,345]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(MyNewArray));
console.log(returnSecondValue([3124, 1234, 435,56543]));
