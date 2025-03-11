let inputDigits = "";      // Stores user input as a string
let timeInSeconds = 0;     // Current countdown time (in seconds)
let savedTime = 0;         // Stores the original time before the first start
let interval = null;       // Holds the setInterval reference
let isRunning = false;     // Tracks if the timer is running

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
        if (inputDigits.length < 4) {  // Max 4 digits (MMSS)
            inputDigits += button.innerText;
            updateTimeFromInput();   
        }
    });
});

// Function to start/pause the timer
function toggleTimer() {
    if (timeInSeconds <= 0) return; // Prevent starting if no valid time is set

    if (isRunning) {
        clearInterval(interval);
        interval = null;
        isRunning = false;
    } else {
        if (!interval) { // Only save initial time on first start
            savedTime = timeInSeconds;
            timerState.style.display = "none";
            keyPad.style.display = "none";
            borderChange.style.borderColor = '#82c631';
            
        }
        interval = setInterval(() => {
            if (timeInSeconds > 0) {
                timeInSeconds--;
                updateDisplay();
            } else {
                stopTimer();
                borderChange.style.borderColor = '#d0021b';
                alert("Time's up!");
            }
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
    stopTimer();
    inputDigits = "";
    timeInSeconds = 0;
    savedTime = 0;
    updateDisplay();
    // showButtons();
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

// Attach event listeners
playButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
repeatButton.addEventListener("click", repeatTimer);
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
