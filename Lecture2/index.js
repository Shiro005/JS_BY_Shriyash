// basic syntax 

// let person = {
//     name : "Yash",
//     surname : 'Patil',
//     city : 'Akola',
//     phone : 18972727
// }

// play 
// console.log(person)

// console.log(person.city)

// loops in js 

// for loops 

// ex
// for (let i = 10; i <= 10; i++) {
//     console.log("Hello world")
// } 

// while loop
// let size = 10
// let a = 1

// while (a <= size) {
//     console.log("Hello World")
//     a++
// }

// console.log(a)

// problem = table program
// des = user 2, 5, etc 
// return and o/p = no table 

// let user = 4
// let limit = 100

// for(let i = 1; i <= limit; i++) {
//     console.log(user + " X " + i + " = " + (user*i))
// }

// for in loops 

// for (let colors in color) {
//     console.log(color[colors])
// }

// for of loop 

// console.log("For of loop")
// for (let colors of color) {
//     console.log(colors)
// }

// Entries method
// Ai 
// let color = ['red', 'white', 'orange', 'blue'];

// for (let [index, color] of colors) {
//     console.log(`${index}: ${color}`);
// }

let color = ['red', 'white', 'orange', 'blue'];

for (let [index, color] of colors.entries()) {
    console.log(`${index}: ${color}`);
}



