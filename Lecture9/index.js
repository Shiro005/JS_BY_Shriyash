// Question 

let number = [1, 2, 3, 4, 5, 6]

let target = 4

// Linear Search

let LinearSearch = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
            return i
        }
    }

    return -1
}

let ans = LinearSearch(number, target)

// console.log(`Index = ${ans}`);

// CallBack

let calculator = (num1, num2, operation) => {
    return operation(num1, num2)
} // arrow 

let add = (num1, num2) => {
    return num1 + num2
}


// console.log(calculator(3, 2, add))

let marks = [23, 12, 6, -10, 777]

marks.sort(function (a, b) {
    return b - a 
})

console.log(marks);
