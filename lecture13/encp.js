function createPerson({ name, age, aadharNo }) {
    this.name = name;
    this.age = age;
    this.aadharNo = aadharNo;

    this.getAadhar = () => {
        return `This is your aadhar card number ${this.aadharNo}`;
    };
}

const person1 = new createPerson({ name: 'Satish', age: 43, aadharNo: 266262 });

console.log(person1); // other
console.log(person1.getAadhar()); // personal

