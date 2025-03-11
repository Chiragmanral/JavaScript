let timeInSeconds = 0;
let interval = null;
let isRunning = false;

const timerDisplay = document.querySelector(".timer");
const playButton = document.querySelector(".fa-play");
const resetButton = document.querySelector(".fa-square-xmark");
const closeButton = document.querySelector(".fa-xmark");
const timerState = document.querySelector(".timer-state");
const wholeTimer = document.querySelector(".flex-box-item1");
const countUp = document.querySelector(".count-up");
const countDown = document.querySelector(".count-down");

function updateDisplay() {
    let minutes = String(Math.floor(timeInSeconds/60)).padStart(2, "0");
    let seconds = String(timeInSeconds%60).padStart(2, "0");

    timerDisplay.innerHTML = `${minutes} : ${seconds}`;
}

function toggleTimer() {
    if (timeInSeconds < 0) return; // Prevent starting if no valid time is set

    if (isRunning) {
        clearInterval(interval);
        interval = null;
        isRunning = false;
    } 
    else {
    timerState.style.display = "none";
    resetButton.style.visibility = "visible";
    interval = setInterval(() => {
        if (timeInSeconds >= 0) {
            timeInSeconds++;
            updateDisplay();
        } 
    }, 1000);
    isRunning = true;
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
    isRunning = false;
}

function resetTimer() {
    if(interval) {
        clearInterval(interval);
        interval = null;
    }
    isRunning = false;
    timeInSeconds = 0;
    timerState.style.display = "flex";
    resetButton.style.visibility = "hidden";
    updateDisplay();
}

// Function to close the timer
function closeTimer() {
    wholeTimer.style.display = "none";
}

playButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);
closeButton.addEventListener('click', closeTimer);
countUp.addEventListener('click', () => {
    countUp.style.borderBottom = "2.5px solid #239BEB";
    countUp.style.opacity = 1;
    countDown.style.borderBottom = "none";
    countDown.style.opacity = 0.5;
})

countDown.addEventListener('click', () => {
    countDown.style.borderBottom = "2.5px solid #239BEB";
    countDown.style.opacity = 1;
    countUp.style.borderBottom = "none";
    countUp.style.opacity = 0.5;
})