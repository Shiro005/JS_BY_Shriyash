let radius = [1, 2, 3, 4]

// function get_area(radius) {
//     const output = []

//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * (radius[i] * radius[i]))
//     }

//     return output
// }

// let area = get_area(radius)
// console.log(area);

// HOF's 

// function get_area (r) {
//     return Math.PI * (r * r)
// } 

// function diameter (r) {
//     return r * 2
// }

// function circumference (r) {
//     return (2 * Math.PI * r)
// }

// function calculate (r, logic){
//     const output = []

//     for(let i = 0; i < r.length; i++) {
//         output.push(logic(r[i]))
//     }

//     return output
// } 

// let ans = calculate(radius, function (r) {
//     return (2 * Math.PI * r)
// })

// console.log(ans);

// How to Use Higher Order Functions

// Suppose we want to add 10 to every element in a array. We can use the map() method to map over every element in the array to add 10 to it.

// Normal solution
// function add_value (arr, value) {
//     const output = []

//     for(let i = 0; i < arr.length; i++) {
//         output.push(arr[i] + value)
//     }

//     return output
// }

// let ans = add_value(radius, 30)
// console.log(ans);

// // Advance solution
// const output = radius.map(function (num) {
//     return num + 10
// })

// console.log(output);

const barbieDolls = [
    {
      name: "Barbie",
      age: 25,
      color: "blonde"
    },
    {
      name: "Teresa",
      age: 24,
      color: "brunette"
    },
    {
      name: "Nikki",
      age: 23,
      color: "black"
    },
    {
      name: "Christie",
      age: 26,
      color: "black"
    },
    {
      name: "Skipper",
      age: 18,
      color: "blonde"
    }
  ];
   

function linear_search (arr, key) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name === key) {
            return `Hello ${key}`
        }
    }

    return `Sorry ${key} name is not in out database`
}

let ans = linear_search(barbieDolls, 'Skipper')
  
console.log(ans);

// find the dolls with blonde hair
const hair_color = barbieDolls.map(function (color) {
    return color.color === 'blonde' ? 'Blonde is present':'Blonde is not present'
})

console.log(hair_color);

const ages = barbieDolls.map(function (age) {
    return age.age > 18 ? `Your welcome in party` :`Sorry you are not able `
})

console.log(ages);











































 

