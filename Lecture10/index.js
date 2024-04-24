// function Binary_Search(arr, key) {
//     let start = 0
//     let end = arr.length - 1

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2)

//         if(key === arr[mid]) {
//             return mid
//         }

//         else if(key > arr[mid]) {
//             start = mid + 1
//         }

//         else if(key < arr[mid]) {
//             end = mid - 1
//         }
//     }
//     return -1
// }


// let even_num = [2, 4, 6, 8, 10, 12]
// let target = 4

// let ans = Binary_Search(even_num, target)

// console.log(`Index No = ${ans}`);

function add(a, b) {
    return a + b
}

// child function
function sub(x, y) {
    return x - y
}

function math(m, n, logic) {
    const result = logic(m, n)
    return result
}

console.log(math(2, 3, add));

function diameter (r) {
    return r * 2
}

function calculate (arr, logic) {
    const output = []

    for(let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]))
    }

    return output
}

let radius = [1, 2, 3]
let sol = calculate(radius, diameter)
console.log(`The diameter of array is : ${sol}`);

