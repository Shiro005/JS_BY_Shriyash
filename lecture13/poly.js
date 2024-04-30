class Animal {

    sound() {
        console.log(`Animal makes sound`);
    }
}

class Dog {

    sound() {
        console.log(`Dogs Barks...`)
    }
}

class Cat {

    sound() {
        console.log(`Cats Mews...`)
    }
}

let Animal1 = new Animal()
let tommoy = new Dog()
let mani = new Cat()

Animal1.sound()
tommoy.sound()
mani.sound()

