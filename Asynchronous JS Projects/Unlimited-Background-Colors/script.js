// Generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        // Math.random() function ek random float value generate krega between 0 and 1 and then voh 16 se multiply hoga jisse uski value (>=0) ho jayegi lekin rahegi float hi then fir hum uss flat number ki floor ya ceil koi si bhi value le skte the lekin humne sirf floor value hi li means (3.4 ka bhi 3 ho jayeag and 3.9 ka bhi 3 ho jayega) then atlast hamare paas ek integer aa jayega jiski value range hogi b/w 0 and 16 and then uss random number ko hum as a index of hex string use kar lenge 0 se lekar F tak kuch bhi select karne ke liye and 1 random hex color code bana lenge .
        color += hex[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

// console.log(Math.random()); // generates a number between 0 and 1
// console.log(Math.random().toFixed(3)); // it means ki point ke baad 3 digits aani chahiye
// console.log(Math.random() * 10); // it just shifts the first digit after point to the before point position.
// console.log(Math.floor(3.11)) // it means lower value of the float(ex :- it converts 3.1 to 3 and also 3.9 to 3) and returns an integer.
// console.log(Math.ceil(3.11)) // it means upper value of the float(ex :- it converts 3.1 to 4 and also 3.9 to 4) and returns an integer.

let intervalId; //undefined
// For starting the color change after each second
document.querySelector('#start').addEventListener('click', () => {
    if(!intervalId) {
        intervalId = setInterval(changeBackgroundColor, 100);
    }

    function changeBackgroundColor() {
        document.querySelector('body').style.backgroundColor = randomColor();
    }
}, false);

// For stopping the color change after each second
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
}, false);