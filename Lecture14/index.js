// Prototypes

// function mulBy5 (num) {
//     return num*5
// }

// mulBy5.power = 2
// console.log(mulBy5.power)
// console.log(mulBy5(5)) // 25
// console.log(mulBy5.prototype)

let myHero = ['Thor', 'Spiderman']

let superHero = {
    thor: 'Hammer',
    spiderman: 'Web-Shooter',

    getSpiderMan: function () {
        console.log(`Power of spidey is ${this.spiderman}`)
    }
}

Object.prototype.batman = function () {
    console.log(`Batman method is present`)
}

Array.prototype.Joker = function () {
    console.log(`This is joker method`);
}

superHero.Joker()
myHero.batman()








