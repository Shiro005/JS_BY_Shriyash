class person { // parent class 
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

class student extends person { // child class 
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks
    }

    test() {
        super.greet()
    }
}

class teacher extends person { // child class
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject
    }

    test1 () {
        super.greet()
    }
}

let student1 = new student('Adam', 22, 98)
let teacher1 = new teacher('Steve', 40, 'Cp') 

console.log(student1);
student1.test() // hello adam
console.log(teacher1);
teacher1.test1()