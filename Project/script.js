const inputs = document.querySelectorAll(".input-field");
const percent = document.getElementById("percent");
const circle = document.querySelector(".progress");

inputs.forEach(input => {
    input.addEventListener("input", updateProgress);
});

function updateProgress() {

    let filled = 0;

    inputs.forEach(input => {
        if(input.value.trim() !== ""){
            filled++;
        }
    });

    let progress = Math.round(
        (filled / inputs.length) * 100
    );

    percent.textContent = progress + "%";

    circle.style.background =
    `conic-gradient(
        red ${progress * 3.6}deg,
        #d3d3d3 ${progress * 3.6}deg
    )`;
}