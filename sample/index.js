function Natsa_menu (item, price) {
    this.item = item
    this.price = price
}

let suresh = new Natsa_menu('chai', 25)
let mahesh  = new Natsa_menu('coffee', 50)

Object.prototype.createBill = function (item_no) {
    console.log(`Your Bill of ${item_no} ${this.item} is ${this.price * item_no}rs`);
}

suresh.createBill(2)
suresh.createBill(4)



