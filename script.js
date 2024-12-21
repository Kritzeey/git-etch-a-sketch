const container = document.querySelector(".container")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < 16; i++) {
    const name = "abcdefghijklmnop"
    const horizontalContainer = document.createElement("div")
    horizontalContainer.setAttribute("style",
        "display: flex;\
        flex-direction: row;"
    )
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div")
        horizontalContainer.appendChild(div)
        div.setAttribute(
            "style",
            `background-color: ${getRandomColor()};\
            width: 64px;\
            height: 64px`
        )
        div.id = `${name[i]}${j}`
    }
    container.appendChild(horizontalContainer)
}