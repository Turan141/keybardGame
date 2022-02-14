let btns = document.querySelectorAll(".btn");
let startBtn = document.querySelector("#start");
let timerCounter = document.getElementById("timercount");
let attemptsNumber = document.getElementById("attemptsnumber");
let modalWindow = document.querySelector(".modal");
let modalWindowH1 = document.getElementById("h1");
let modalWindowH2 = document.getElementById("h2");

let activeBtn;
let a = 10;
let b = 0;
timerCounter.innerText = `Estimated Time Left ${a}`;
attemptsNumber.innerText = `Number of attemps ${b}`;


let gameFn = function() {
    btns.forEach((e) => {
        e.classList.remove("active");
    });
    activeBtn = btns[highlightFn()];
    activeBtn.classList.add("active");
};

function highlightFn() {
    let indexToLight = Math.floor(Math.random() * 25);
    return indexToLight;
}

startBtn.addEventListener("click", gameFn);

document.addEventListener("keypress", (e) => {
    if (e.key == activeBtn.id) {
        gameFn();
        b++
        attemptsNumber.innerText = `Number of attemps ${b}`;
    }
});

function doStuff() {
    if (a > 0) {
        startBtn.disabled = true;
        timerCounter.innerText = `Estimate Time Left ${a}`;
        a--;
    } else if (a <= 0) {
        timerCounter.innerText = `Estimate Time Left ${a}`;
        startBtn.disabled = false;
        a = 5;
        timerCounter.innerText = `Estimate Time Left ${a}`;
        modalWindow.style.height = "400px";

        modalWindowH1.innerText = `Your attempts count is ${b}`
        if (b > 10) {
            modalWindowH2.innerText = `It's great value!!!`
        } else if (b >= 6 && b <= 10) {
            modalWindowH2.innerText = `Good work , mate!`
        } else if (b > 2 && b < 6) {
            modalWindowH2.innerText = `You can do it better!`
        } else if (b >= 0 && b <= 2) {
            modalWindowH2.innerText = `Looser, pshhh!!`
        }
        console.log(b)
        return;
    }
    timeout = setTimeout(doStuff, 1000);
}