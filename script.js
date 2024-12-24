function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
}

function makeGrid(amount = 16) {
    const container = document.querySelector(".box-container");
    container.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        const name = "abcdefghijklmnop";
        const horizontalContainer = document.createElement("div");

        horizontalContainer.setAttribute("style",
            "display: flex;\
            flex-direction: row;"
        );

        for (let j = 0; j < amount; j++) {
            const div = document.createElement("div");
            horizontalContainer.appendChild(div);
            div.setAttribute(
                "style",
                `width: ${384 / amount}px;\
                height: ${384 / amount}px;
                background: white;`);
            div.id = `${name[i]}${j}`;
            div.classList.add("boxes");
        };

        container.appendChild(horizontalContainer);
    };
}

function clearCanvas() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(e => e.style.background = "white");
}

function resizeBoxes() {
    const userInput = prompt("Enter the box size", 16);
        if (5 <= userInput && userInput <= 100) {
            makeGrid(userInput)
            const boxes = document.querySelectorAll(".boxes");
            boxes.forEach(e => e.addEventListener("mouseover", (e) => {draw(e.target)}))
        } else {
            alert("Input invalid!")
        };
}

function draw(box, color = "blue") {
    if (box.style.background == "white") {
        box.style.background = color
    };
}

function main() {
    makeGrid()

    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(e => e.addEventListener("mouseover", (e) => {draw(e.target, getRandomColor())}))
    
    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", clearCanvas);

    const sizeBtn = document.querySelector("#size");
    sizeBtn.addEventListener("click", resizeBoxes);
}

main()