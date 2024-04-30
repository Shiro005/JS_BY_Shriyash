// function create_person (name, age) {
//     this.name = name
//     this.age = age

// methods
//     this.welcome = function () {
//         console.log(`Hello ${this.name}`) 
//     }
// }

// let person1 = new create_person('Steve', 23)
// console.log(person1);

// person1.welcome()


// classes in js 
class create_person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // methods
    welcome(){
        console.log(`Hello ${this.name}`)
    }
}

let person1 = new create_person('Adam', 25)
person1.welcome()
