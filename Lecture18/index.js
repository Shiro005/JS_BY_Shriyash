// How Js Acts like a multithreading ?
// We know that JS is a single thread language
// How can This possible 
// single thread => multi thread ?

const fs = require('fs')

console.log("First Line");

fs.readFile('file1.txt', test1)

function test1(err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data.toString());
}

fs.readFile('file2.txt', test2)

function test2(err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data.toString());
}

console.log("Last line")

