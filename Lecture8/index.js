// Imperative and declarative way of writing code 

/* que = given 
let a = 3
3 * 3 = 9
even or odd 
*/

// Imperative way 

// let user = 3
// let square_user = user * user

// if (square_user % 2 === 0) {
//     console.log(`Even`)
// }
// else {
//     console.log(`Odd`)
// }

// declarative way
// const square = (x) => (x * x % 2 === 0 ? true : false)
// console.log(square(3))

// pure function

// Impure functions
let a = 1

function add (x) {
    console.log(a + x)
    a++
}

add(2) // 3 
add(2) // 4 
add(2) // 5

// pure function
function add1 (a, b) {
    console.log(a + b)
}

add1(1, 2) // 3
add1(1, 2)
add1(1, 2)

