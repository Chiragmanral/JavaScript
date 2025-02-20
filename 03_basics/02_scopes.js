// let and const mante hain 3 types ke scopes:- block scope(if-else), functional scope(function() {}) and global scope(in the whole program).
// var lekin manta yhai sirf aur sirf functional and global scope, var block scope ko nhi manta so if you give block scope to var it comes out of the block and goes inside the functional or global scope(any non-block scope) which is the nearest non-block scope ancestor of it in the current context.

// Global scope of node environment in vs code is different
// and global scope of web browser is window object in ehich all the information regarding browser and there are many functions inside it.
// Like confirm, prompt and alert are functions in the window object,they don't lie in the node environment's global scope that's why they are accessible in the console tab not in the node environment
// But console.log is accessible in both the environments node and web browser bcz both the environments have console object in it.
// console object provides 4 main functions :- 
// console.log(); -> Prints data
// console.table(); -> print data in tabular form
// console.error(); -> prints error in the code
// console.warn(); -> prints warning in the code

// console.log(global); //global object for node.js environment
console.log(window); // global object for web browser

// if(true) { // This is block scope.
//     console.log("Hello, World!!!");
// }
// else { // This is block scope.
//     console.log("Hello, World!!!");
// }

// { // This is block scope.
//     console.log("Hello, World!!!");
// }

// function sayHii() { // Functional Scope -> Hoisting allowed bcz it's a function declaration
//     console.log("Hiii");
// }

// let sayHii = function() { // Functional Scope -> Hoisting not allowed bcz it's a function expression
//     console.log("Hiii");
// }

// let sayHii = () => { // Functional Scope -> Hoisting not allowed bcz it's a function expression
//     console.log("Hiii");
// }

// Global Scope
// let a = 10;
// const b = 20;
// var c = 30;

// if(true) { // Block scope
//     let a = 10; // Block scope
//     const b = 20; //Block scope
//     var c = 30; //No block scope -> In reality, it's not declared in the if(code block) it's declared in the global scope which is the nearest non-block scope ancestor of it.
// }

// console.log(a); //Not availaible in this scope(only availaible in the block scope)
// console.log(b); //Not availaible in this scope(only availaible in the block scope)
// console.log(c); //availaible in this scope bcz in reality var c is declared in the global scope in the above code.

// function hii() { // Functional scope
//     let a = 10; // Functional scope
//     const b = 20; //Functional scope
//     var c = 30; // var bhale hi block scope ko nhi manta lekin functional scope ko manta hai
// }

// console.log(a); //Not availaible in this scope(only availaible in the functional scope)
// console.log(b); //Not availaible in this scope(only availaible in the fuunctional scope)
// console.log(c); //Not availaible in this scope(only availaible in the fuunctional scope)

// function sayHii() {
//     if(true) {
//         let a = 10; // Declared in this block scope(not accessible in the functional scope)
//         const b = 20; // Declared in this block scope(not accessible in the functional scope)
//         var c = 30; // Declared in the functional scope bcz it's the nearest non-block scope ancestor of this var c(accessible in the functional scope).
//     }
//     // let a; // functional scope accessible in the whole function and also for the child function of it if they access it.
//     // console.log(a);
//     // console.log(b);
//     console.log(c); // It runs successfully bcz var c scope is functional not block.
// }

// sayHii();

// let a = 10;
// const b = 20;
// var c = 30;
// var c = 40; -> Ek tarah se var ke liye yeah yahin likha hua hau block scope ke case mein on line 75.
// c = 40; // Ek tarah se var ke liye yeah yahin likha hua hau block scope ke case mein on line 86.

// Case 1 :-
// if(true) {
//     a = 40; //updation of global variable a here -> it's get updated successfully also in the global scope
//     var c = 40; // re-declaration of var c in the global scope bcz var block scope toh manta nhi
//     console.log(a); //40
//     console.log(c); //40
// }

// console.log(a); //40
// console.log(c); //40

// case 2:-
// if(true) {
//     a = 40; //updation of global variable a here -> it's get updated successfully also in the global scope
//     c = 40; // re-initialization(updation) of var c in the global scope bcz var block scope toh manta nhi
//     console.log(a); //40
//     console.log(c); //40
// }

// console.log(a); //40
// console.log(c); //40

// case 3:-
// if(true) {
//     let a = 40; //declaration and initialization of a local varibale(block variable) through let
//     a = 50; // re-initialization(updation) of let a in the block scope bcz let block scope manta hai.
//     console.log(a); //50
// }

// console.log(a); //10

// In functions :- 
// For let :-
// case 1

// function update() {
//     a = 40; //Updation of global a
//     console.log(a); //40
// }

// update();
// console.log(a); //10

// case 2
// function update() {
//     let a = 10;
//     a = 40; // updation of local a
//     console.log(a); //40
// }

// update();
// console.log(a); //10

// In functions :- 
// For var :-
// case 1
// function update() {
//     c = 40; //updation of global c
//     console.log(c); //40
// }

// update();
// console.log(c); //40

// case 2
// function update() {
//     var c = 10;
//     c = 40; //updation of local c
//     console.log(c); //40
// }

// update();
// console.log(c); //30

