let inputDigits = "";      // Stores user input as a string
let timeInSeconds = 0;     // Current countdown time (in seconds)
let savedTime = 0;         // Stores the original time before the first start
let interval = null;       // Holds the setInterval reference
let isRunning = false;     // Tracks if the timer is running or not
let mode = "countdown";    // Tracks the current mode ("countdown" or "countup")

const timerDisplay = document.querySelector(".timer");
const digitButtons = document.querySelectorAll(".digit");
const resetButton = document.querySelector(".fa-square-xmark");
const playButton = document.querySelector(".fa-play");
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
    resetButton.style.opacity = 0.5;
    playButton.style.opacity = 0.5;
    repeatButton.style.opacity = 0.5;
}

// Function to convert user input into time
function updateTimeFromInput() {
    if (isRunning) return; // Prevent changes while timer is running

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
        resetButton.style.opacity = 1;
        playButton.style.opacity = 1;
        repeatButton.style.opacity = 1;
        if (inputDigits.length < 4) {  // Max 4 digits (MMSS)
            inputDigits += button.innerText;
            updateTimeFromInput();   
        }
    });
});

let flag = "false";

// Function to start/pause the timer
// If the value of isRunning is true it means timer was running when we hit the button and we want to pause the timer so we have to clear the interval for stopping the timer.
// But if the value of isRunning is false it means timer was stopped when we hit the button and now we want to play the timer on where it was stopped
function toggleTimer() {
    if (isRunning) { //button is clicked for stopping the running timer bcz [isRunning = "true"]
    stopTimer();    
    } 
    else { //button is clicked for starting the timer bcz initially timer is stopped bcz [isRunning = 'false']
        if (mode === "countdown" && timeInSeconds <= 0) return;

        if(flag == "false" && mode === "countdown") { // only for saving the initial time once in the countdown mode
            savedTime = timeInSeconds;
            flag = "true";
        }
        if (!interval && mode === "countdown") {
            timerState.style.display = "none";
            keyPad.style.display = "none";
            borderChange.style.borderColor = '#82c631';
        }
        else if(!interval && mode === "countup") {
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
            else if(mode === "countup") {
                timeInSeconds++;
            }
            updateDisplay();
        }, 1000);
        
        isRunning = true; //ab timer shuru ho chuka hai isiliye isRunning = "true"
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
        resetButton.style.opacity = 0.5;
        playButton.style.opacity = 0.5;
        repeatButton.style.opacity = 0.5;
        updateDisplay();
    }
}

// Function to repeat the last entered time
function repeatTimer() {
    stopTimer();
    timeInSeconds = savedTime;
    borderChange.style.borderColor = '#239beb';
    keyPad.style.display = "block";
    timerState.style.display = "flex";
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
    resetButton.style.opacity = 1;
    resetButton.style.visibility = "hidden";
    playButton.style.opacity = 1;
    repeatButton.style.visibility = "hidden";
});

// Function to switch to Count Down mode(default mode)
countDown.addEventListener('click', () => {
    mode = "countdown";
    stopTimer();
    inputDigits = "";
    timeInSeconds = 0;
    updateDisplay();
    countUp.style.borderBottom = "none";
    countUp.style.opacity = 0.5;
    countDown.style.borderBottom = "2.5px solid #239BEB";
    countDown.style.opacity = 1;
    keyPad.style.display = "block";
    resetButton.style.visibility = "visible";
    repeatButton.style.visibility = "visible";
    
});

// Attach event listeners
resetButton.addEventListener("click", resetTimer);
playButton.addEventListener("click", toggleTimer);
repeatButton.addEventListener("click", repeatTimer);
closeButton.addEventListener('click', closeTimer);
