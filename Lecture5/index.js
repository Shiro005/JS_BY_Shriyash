// Function in JS Day - 5 
// Basic Level Questions of Javascript 
// Interview 

// 1 Write a JavaScript program to convert a string into uppercase 

// 2 Write a JavaScript program to find the maximum number in an array. 

// 3 Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// Answer 1 = toupperCase, lowercase
// input = 'steve'
// output = 'STEVE'
// function

// function first_ans(user1) {  //parameters
//     // console.log(user1.toLowerCase())
//     console.log(user1.toUpperCase())
// }

// let user1 = 'STEVE'
// first_ans(user1) // agruments

// Write a JavaScript program to find the maximum number in an array.
// given 

// let num_Arr = [10, 4, 23, 12, 111]

// function maxNumber(arr) { 
//     let max = arr[0] 

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) { 
//             max = arr[i]
//         }
//     } 

//     return max
// }

// console.log(maxNumber(num_Arr)) // argument

// 3 Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function evenArr(num) {
    let arr = []

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            arr.push(num[i])
        }
    }
    return arr;
}

console.log(evenArr(number))
















