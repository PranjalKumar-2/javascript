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