/* Day 4 Free Javascript 
What is Function ?
Ans = A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it(calls it).*/

// syntax of functions

function greet() {
    console.log("Hello This is js code")
}

// greet(); // 1 call 
// greet(); // 2 call 

// Let create a addition function of two numbers parameter and arguments

// 2,2 = 4

// function add(a, b) { // parameters
//     console.log(a + b)
// }

// add(1, 2) // call arguments

function sub(a, b) {
    console.log(a - b)
}


// second way 
let mul = function (a, b) {
    console.log(a * b)
}

// mul(2, 3) //call

// if else statement 
// program of age 
// 2 - 18 => child
// 18 - 35 => Middle age 
// 0, -16, 102 => error

let age = -15

if (age > 2 && age < 18) {
    console.log("child")
} 

else if (age > 18 && age < 35) {
    console.log("Middle age")
}

else if (age <= 0 || age >= 100) {
    console.log("Error")
}



















