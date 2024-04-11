// object => props => true
// object => array => true
// object => object => true

let person = {
    // props
    firstname: 'Tony',
    lastname: 'Stark',
    age: 45,
    // array
    friend: ['Sam', 'Steve', 'Bucky'],
    // object 
    address: {
        country: 'America',
        city: 'New york',
        street: 'Wall Street'
    }
}

console.log(person.lastname)
// array print
console.log(person.friend[0])

// object => object
console.log(person.address)
console.log(person.address.country)

