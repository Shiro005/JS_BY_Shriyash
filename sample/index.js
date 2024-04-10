let color = ['red', 'yellow', 'green']

console.log("For in loop")
for (let colors in color) {
    console.log(color[colors])
}

console.log("For of Loop")
for (colors of color) {
    console.log(colors)
}

// entries method

for(let [index, colors] of color.entries()){
    console.log(index)
}
