const box = document.getElementById('main_container')

function change_color() {
    const colors = ['red', 'orange', 'blue', 'pink', 'hotpink', 'skyblue', 'grey']

    const randomIndex = Math.floor(Math.random() * colors.length)

    setInterval(() => {
        box.style.backgroundColor = colors[randomIndex]
    }, 200)

    console.log(colors[randomIndex])
}


