// Higher Order Functions in JavaScript – Explained with Practical Examples

// Suppose we want to add 10 to every element in a array. We can use the map() method to map over every element in the array to add 10 to it.

let array1 = [1, 2, 3, 4]
let value = 10
// function addTen (arr, value) {
//     const output = []

//     for (let i = 0; i < arr.length; i++) {
//         output.push(arr[i] + value)
//     }

//     return output
// }
// console.log(addTen(array1, value));

// Map Method
let result = array1.map((num) => {
    return num + 10
})

console.log(`The map method ${result}`);

// Here we have an array of users. Suppose we only want their first and last name. We can simply use the map() method to extract it from the users array.

let person = [
    { firstname: 'Tony', lastname: 'Stark', age: 42 },
    { firstname: 'Steve', lastname: 'Rogers', age: 107 },
    { firstname: 'Bruce', lastname: 'Wayne', age: 45 },
]

// console.log(person);

let full_name = person.map(function (name) {
    return name.firstname + ' ' + name.lastname
})

// console.log(full_name);

// How to Use filter() in JavaScript
// You can use filter() to return only the odd numbers from an array of numbers.
let real_num = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// filter method custom 
// function odd_num (arr) {
//     const result = []

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 != 0) 
//         result.push(arr[i])
//     }
//     return result
// }

// console.log(odd_num(real_num));

// let odd_num = real_num.filter((n) => {
//     return n % 2 != 0
// })

// let even_num = real_num.filter(function (m) {
//     return m % 2 === 0
// })
// console.log(odd_num);
// console.log(even_num);

// You can use filter() to return only the users having age greater than 30 in an array.

let users = [
    { firstname: 'Tony', lastname: 'Stark', age: 42 },
    { firstname: 'Steve', lastname: 'Rogers', age: 107 },
    { firstname: 'Bruce', lastname: 'Wayne', age: 45 },
    { firstname: 'raman', lastname: 'yadav', age: 17 },
    { firstname: 'naman', lastname: 'yadav', age: 30 }, 
    { firstname: 'Akshay', lastname: 'Bhaltilak', age: 24},
]

// users[user].age

// let adults = users.filter((user) => {
//     return user.age >= 30
// })
// console.log(adults);

// How to use reduce() in JavaScript

// Using reduce() to sum up all the elements in an array:
let marks = [23, 43, 11, 78, 98]

// function sum_arr (arr) {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum = arr[i] + sum
//     }
//     return sum
// }
// console.log(sum_arr(marks));

// function mul_arr (arr) {
//     let mul = 1

//     for (let i = 0; i < arr.length; i++) {
//         mul = mul * arr[i]
//     }
//     return mul
// }
// console.log(`Multiply of arr is ${mul_arr(marks)}`)

let sum_arr = marks.reduce((sum, curr) => {
    return sum = sum + curr
}, 0)

// Using reduce() to find the maximum value in an array:
let max_value = marks.reduce((max, current_num) => {
    if(current_num > max) max = current_num
    return max
}) 

function max_marks (arr) {
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(`function output ${max_marks(marks)}`);





