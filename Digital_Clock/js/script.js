// Loader
const loader = document.querySelector(".loader");
loader.style.display = "block";

const offLoader = () => {
    loader.style.display = "none";
};
setInterval(offLoader, 3000);

//Timer

function timer() {
    const hours = document.querySelector(".hours h2"),
        minutes = document.querySelector(".minutes h2"),
        secondes = document.querySelector(".secondes h2"),
        formatDate = document.querySelector(".format span"),
        nowDate = new Date();
    hours.innerHTML = nowDate.getHours() % 12;
    minutes.innerHTML = nowDate.getMinutes();
    secondes.innerHTML = nowDate.getSeconds();
    if (
        nowDate > 12
            ? (formatDate.innerHTML = "pm")
            : (formatDate.innerHTML = "am")
    );
}

setInterval(timer, 500);
