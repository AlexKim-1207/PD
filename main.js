const generatorBtn = document.getElementById("generator-btn");
const numbersContainer = document.getElementById("numbers-container");
const themeToggle = document.getElementById("theme-toggle");

// Lotto Generation Logic
generatorBtn.addEventListener("click", () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    numbersContainer.innerHTML = "";

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const numberEl = document.createElement("div");
        numberEl.classList.add("number");
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    }
});

// Theme Toggle Logic
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Light Mode";
}

themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Dark Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Light Mode";
    }
});