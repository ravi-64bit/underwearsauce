const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");

const buttonArea = document.querySelector(".buttons");

noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";

    const maxX = buttonArea.clientWidth - noButton.offsetWidth;
    const maxY = buttonArea.clientHeight - noButton.offsetHeight;

    let x, y;

    do {
        x = Math.random() * maxX;
        y = Math.random() * maxY;
    } while (
        Math.abs(x - noButton.offsetLeft) < 80 &&
        Math.abs(y - noButton.offsetTop) < 30
    );

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
});

yesButton.addEventListener("click", () => {
    window.location.href = "next.html";
});