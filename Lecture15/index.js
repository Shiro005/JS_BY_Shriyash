// Hotel 

function create_user(item, price) {
    this.item = item
    this.price = price
}

Object.prototype.createBill = function (item_no) {
    console.log(`Your Bill of ${item_no} item is ${this.price * item_no}rs`)
}

let suresh = new create_user('Chai', 25) // fully object created 
let gopal = new create_user('Nasta', 100)

suresh.createBill(4) // 50rs
gopal.createBill(2) // 400rs

let myHero = ['Thor', 'Spiderman']

// myHero.pop()
console.log(myHero);






