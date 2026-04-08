const generatorBtn = document.getElementById("generator-btn");
const numbersContainer = document.getElementById("numbers-container");

generatorBtn.addEventListener("click", () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    numbersContainer.innerHTML = "";

    for (const number of numbers) {
        const numberEl = document.createElement("div");
        numberEl.classList.add("number");
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    }
});