// OOPS in js 
// this keyword
// 1. strict mode
// 2. non strict mode default
// "use strict";

console.log(this); // empty object // window object strict = non strict

function test() {
    console.log(this);
}
test() // undefined // undefined-strict mode , non-strict-window object

let test_object = {
    first_value: this
}
console.log(test_object.first_value);
// when we use strict mode in object terminal node js = empty object
// when we use non-strict mode in object terminal node js = empty object
// non-strict mode in browser = window object 

let array = [this, 'string', 14]
console.log(array[0]);

// constructor functions
// syntax
function create_student(name, age, batch, roll_no) {
    this.name = name
    this.age = age
    this.batch = batch
    this.roll_no = roll_no
}

let student1 = new create_student('Steve', 21, 'A', 244)
let student2 = new create_student('bruce', 22, 'c', 221)
let student3 = new create_student('tony', 23, 'v', 245)
console.log(student1.name);
console.log(student2.name);
console.log(student3.age);

// classes in Js
// ES6 
class person {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
}

let person1 = new person('Shriyash', 'Rulhe')
console.log(person1);










