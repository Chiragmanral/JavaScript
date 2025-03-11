let inputDigits = "";      // Stores user input as a string
let timeInSeconds = 0;     // Current countdown time (in seconds)
let savedTime = 0;         // Stores the original time before the first start
let interval = null;       // Holds the setInterval reference
let isRunning = false;     // Tracks if the timer is running
let mode = "countdown";    // Tracks the current mode ("countdown" or "countup")

const timerDisplay = document.querySelector(".timer");
const digitButtons = document.querySelectorAll(".digit");
const playButton = document.querySelector(".fa-play");
const resetButton = document.querySelector(".fa-square-xmark");
const repeatButton = document.querySelector(".fa-repeat");
const closeButton = document.querySelector(".fa-xmark");
const timerState = document.querySelector(".timer-state");
const keyPad = document.querySelector(".keypad");
const borderChange = document.querySelector(".flex-box-item1");
const countUp = document.querySelector(".count-up");
const countDown = document.querySelector(".count-down");

// Function to update the timer display
function updateDisplay() {
    let minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    let seconds = String(timeInSeconds % 60).padStart(2, '0');
    timerDisplay.innerText = `${minutes} : ${seconds}`;
    disableButton();
}

if(mode === "countdown" && timeInSeconds === 0) {
    playButton.style.opacity = 0.5;
    resetButton.style.opacity = 0.5;
    repeatButton.style.opacity = 0.5;
}

// Function to convert user input into time
function updateTimeFromInput() {
    if (isRunning) return; // Prevent changes while running

    let paddedInput = inputDigits.padStart(4, "0"); // Ensure 4-digit format (MMSS)
    let minutes = parseInt(paddedInput.slice(0, 2), 10);
    let seconds = parseInt(paddedInput.slice(2, 4), 10);

    timeInSeconds = minutes * 60 + seconds;
    savedTime = timeInSeconds; // Store initial time for repeat functionality
    
    updateDisplay();
}

function disableButton() {
    if(inputDigits.length === 4) {
        digitButtons.forEach((button) => {
            button.disabled = true;
        })
    }
    else {
        digitButtons.forEach((button) => {
            button.removeAttribute('disabled');
        })
    }
}

// Handle digit button clicks
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        playButton.style.opacity = 1;
        resetButton.style.opacity = 1;
        repeatButton.style.opacity = 1;
        if (inputDigits.length < 4) {  // Max 4 digits (MMSS)
            inputDigits += button.innerText;
            updateTimeFromInput();   
        }
    });
});

let flag = "false";

// Function to start/pause the timer
function toggleTimer() {
    if (isRunning) {
        clearInterval(interval);
        interval = null;
        isRunning = false;
    } else {
        if (mode === "countdown" && timeInSeconds <= 0) return;

        if(flag == "false" && mode === "countdown") {
            savedTime = timeInSeconds;
            flag = "true";
        }
        if (!interval && mode === "countdown") {
            // savedTime = timeInSeconds;
            timerState.style.display = "none";
            keyPad.style.display = "none";
            borderChange.style.borderColor = '#82c631';
        }
        if(!interval && mode === "countup") {
            timerState.style.display = "none";
            keyPad.style.display = "none";
            resetButton.style.visibility = "visible";
        }
        
        interval = setInterval(() => {
            if (mode === "countdown") {
                if (timeInSeconds > 0) {
                    timeInSeconds--;
                } else {
                    stopTimer();
                    borderChange.style.borderColor = '#d0021b';
                    alert("Time's up!");
                }
            }
            if(mode === "countup") {
                timeInSeconds++;
            }
            updateDisplay();
        }, 1000);
        
        isRunning = true;
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(interval);
    interval = null;
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    if(mode === "countup") {
        stopTimer();
        timeInSeconds = 0;
        timerState.style.display = "flex";
        resetButton.style.visibility = "hidden";
        updateDisplay();
    }
    else {
        stopTimer();
        inputDigits = "";
        timeInSeconds = 0;
        savedTime = 0;
        borderChange.style.borderColor = "#239BEB";
        keyPad.style.display = "block";
        timerState.style.display = "flex";
        playButton.style.opacity = 0.5;
        resetButton.style.opacity = 0.5;
        repeatButton.style.opacity = 0.5;
        updateDisplay();
    }
}

// Function to repeat the last entered time
function repeatTimer() {
    stopTimer();
    timeInSeconds = savedTime;
    timerState.style.display = "flex";
    keyPad.style.display = "block";
    borderChange.style.borderColor = '#239beb';
    updateDisplay();
}

// Function to close the timer
function closeTimer() {
    borderChange.style.display = "none";
}

// Function to switch to Count Up mode
countUp.addEventListener('click', () => {
    mode = "countup";
    stopTimer();
    timeInSeconds = 0;
    updateDisplay();
    countUp.style.borderBottom = "2.5px solid #239BEB";
    countUp.style.opacity = 1;
    countDown.style.borderBottom = "none";
    countDown.style.opacity = 0.5;
    keyPad.style.display = "none";
    repeatButton.style.visibility = "hidden";
    resetButton.style.visibility = "hidden";
});

// Function to switch to Count Down mode
countDown.addEventListener('click', () => {
    mode = "countdown";
    stopTimer();
    inputDigits = "";
    timeInSeconds = 0;
    updateDisplay();
    countDown.style.borderBottom = "2.5px solid #239BEB";
    countDown.style.opacity = 1;
    countUp.style.borderBottom = "none";
    countUp.style.opacity = 0.5;
    keyPad.style.display = "block";
    repeatButton.style.visibility = "visible";
    resetButton.style.visibility = "visible";
    
});

// Attach event listeners
playButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
repeatButton.addEventListener("click", repeatTimer);
closeButton.addEventListener('click', closeTimer);
