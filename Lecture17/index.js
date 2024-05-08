// File Reading

// create a server then fetch the data from file 1 as well as file 2
// sync nature and async

const fs = require('fs')
// sync nature of JS
// const data1 = fs.readFileSync('file1.txt')
// console.log(data1.toString()) // screen

// const data2 = fs.readFileSync('file2.txt')
// console.log(data2.toString()); // voice

// async nature of Js
console.log("First Line") 
// for file 1 
fs.readFile('file1.txt', test1)

function test1 (err, data) {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
}

// for file 2
fs.readFile('file2.txt', test2)

function test2 (err, data) {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
}

console.log("Last Line") // screen share

