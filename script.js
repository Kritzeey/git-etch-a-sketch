function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function makeGrid(amount = 16) {
    const container = document.querySelector(".box-container")

    for (let i = 0; i < amount; i++) {
        const name = "abcdefghijklmnop";
        const horizontalContainer = document.createElement("div");

        horizontalContainer.setAttribute("style",
            "display: flex;\
            flex-direction: row;"
        );

        for (let j = 0; j < amount; j++) {
            const div = document.createElement("div")
            horizontalContainer.appendChild(div)
            div.setAttribute(
                "style",
                `width: ${512 / amount}px;\
                height: ${512 / amount}px;
                background: white;`)
            div.id = `${name[i]}${j}`
            div.classList.add("boxes")
        };

        container.appendChild(horizontalContainer);
    };

    const boxes = document.querySelectorAll(".boxes");

    boxes.forEach(boxes => {
        boxes.addEventListener("mouseenter",
            (e) => {
                e.target.style.background = "blue";
            })
    });
}

makeGrid()