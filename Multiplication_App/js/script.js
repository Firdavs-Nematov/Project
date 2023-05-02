// Random number in question

const numberOne = document.querySelector(".number-one"),
    numberTwo = document.querySelector(".number-two"),
    input = document.querySelector("input"),
    scoreOne = document.querySelector(".score span"),
    score = 0,
    btn = document.querySelectorAll("button"),
    start = document.querySelector(".start");

btn.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        start.style.display = "none";
        const one = Math.floor(Math.random() * 100);
        const two = Math.floor(Math.random() * 100);
        numberOne.innerHTML = one;
        numberTwo.innerHTML = two;
        if (one * two == input.value) {
            scoreOne.innerHTML = score += 1;
        }
    });
});
