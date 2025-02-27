// Js iss file ki hoisting ko kuch iss tarah samjhega
// var a; // undefined
// var b; // undefined
// var c; // undefined

// printOne function gets hoisted completely
// function printOne() {
//     console.log('hello!!');
// }

// printTwo function gets hoisted completely
// function printTwo() {
//     console.log("Hello, World!!");
// }

// printThree function gets hoisted completely
// function printThree() {
//     console.log("Chirag, Manral");
// }

// Hoisting of variables
console.log(a); //undefined
console.log(b); //undefined
console.log(c); //undefined

// Hoisting of function declarations
console.log(printOne); //[Function: printOne]
console.log(printTwo); //[Function: printTwo]
console.log(printThree); //[Function: printThree]

// Calling the hoisted functions
printOne();
printTwo();
printThree();

// Only the variables declaration gets hoisted not it's initialization means (var a;) only gets hoisted
// Hoisting ke liye niche ki teeno line kuch aisi hain, kyonki declare toh upar ho chuka hoisting mein ab bus initialize hi hoga
var a = 10; // a = 10
var b = 20; // b = 20
var c = 30; // c = 30

// yahan undefined nhi aayega bcz ab yeah teeno upar initialize hom chuke hai ab inki value aayegi
console.log(a); //10
console.log(b); //20
console.log(c); //30

// Function declaration gets fully hoisted means the whole function name, parameters and function body gets hoisted means 
// function printOne() { -> this gets hoisted
//     console.log('hello!!'); -> this gets hoisted
// } -> this gets hoisted

function printOne() {
    console.log('printOne function');
}

// Function declaration
function printTwo() {
    console.log("printTwo function");
}

// Function declaration
function printThree() {
    console.log("printThree function");
}

// function expression with var keyword only declaration gets hoisted not the function expression, we can also re-declare the printFour variable and also we can update the printFour variable 
// var printFour = function() {
//     console.log("PrintFour function!!")
// }

// // function expression with let keyword nothing gets hoisted here, we can't re-declare the printSix variable but we can update the printSix variable
// let printSix = function() {
//     console.log("PrintSix function!!")
// }

// // function expression with const keyword nothing gets hoisted here, we can't re-declare or update the printSeven variable
// const printSeven = function() {
//     console.log("PrintSeven function!!")
// }

// // function expression(arrow function) with var keyword only declaration gets hoisted not the function expression, we can also re-declare the printFive variable and also we can update the printFive variable 
// var printFive = () => console.log("printFive function!!");

// // function expression(arrow function) with let keyword nothing gets hoisted here, we can't re-declare the printEight variable but we can update the printEight variable
// let printEight = () => console.log("printEight function!!");

// // function expression(arrow function) with const keyword nothing gets hoisted here, we can't re-declare or update the printNine variable
// const printNine = () => console.log("printNine function!!");