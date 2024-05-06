// call, apply, bind methods

let person1 = {
    firstname: 'Steve',
    lastname: 'Rogers',
    age: 102
}

let printDetail = function (city, car) {
    console.log(`Hello I am ${this.firstname}, ${this.lastname} and I am ${this.age} years old I am from ${city} city I own ${car}`)
}

let person2 = {
    firstname: 'Tony',
    lastname: 'Stark',
    age: 45
}

// call method
// printDetail.call(person2, 'New York', 'Mustang')

// apply method
// printDetail.apply(person1, ['New york', 'Ford'])
// 5 line of code 

// bind method
let myfun = printDetail.bind(person1)
console.log(myfun)

myfun('New York', 'Nano')

class test{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}


function graphic () {
    // code 
}

function sound() {
    // code 
}

function video() {
    // code
}










