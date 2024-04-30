function create_person (name, age, aadhar_no) {
    this.name = name
    this.age = age
    var aadhar_no = aadhar_no

    this.get_aadhar = () => {
        return `This is your aadhar card number ${aadhar_no}`
    } 
}

let person1 = new create_person ('Satish', 43, 266262)

console.log(person1);

console.log(person1.get_aadhar())