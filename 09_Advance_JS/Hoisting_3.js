// Function declarations are hoisted fully and also hoisted before the var keyword vale variables,also there only declarations gets hoisted and they are initialized by undefined initially
// If there are multiple function declarations with the same name then the last one overwrites above all and wins among them
// If var keyword vale variables also have the same name as function declaration names then :-
//  first thing is only there declarations gest hoisted and also below the function declaration
//  the important thing is until the variable gets initialized tab tak voh function declaration ko overwrite nhi kar payega tab tak sirf function declaration hi jitega 
//  jab var keywoird vala variable runtime mein initialize ho jayefga niche kahin then fir function declaration ki koi existence nhi hogi fir voh usse overwrite kar jayega then voh 1 normal var type ka variable ki trajh work karega 

// console.log(print); // function :- { console.log("Fourth Function declaration");
// print(); //"Fourth Function declaration"

// function print() {
//     console.log("First Function declaration");
// }

// console.log(print); // function :- { console.log("Fourth Function declaration");
// print(); //"Fourth Function declaration"

// var print = "chirag";

// console.log(print); //chirag
// // print(); // Error :- print is a variable not a function

// function print() {
//     console.log("Second Function declaration");
// }

// console.log(print); //chirag
// // print(); // Error :- print is a variable not a function

// var print = "1234";

// console.log(print); //"1234"
// // print(); // Error :- print is a variable not a function

// print = true;

// console.log(print); //true
// // print(); // Error :- print is a variable not a function

// function print() {
//     console.log("Third Function declaration");
// }

// console.log(print); //true
// // print(); // Error :- print is a variable not a function

// var print = () => console.log("Arrow Function");

// console.log(print); //Arrow function -> {console.log("Arrow Function");}
// print(); // "Arrow Function"

// function print() {
//     console.log("Fourth Function declaration");
// }

// console.log(print); //Arrow function -> {console.log("Arrow Function");}
// print(); // "Arrow Function"

// print = function() {
//     console.log("Function expression");
// }

// console.log(print); // function expression { console.log("Function expression")}
// print(); //"Function expression"

// var print = "compro";

// console.log(print); //compro
// // print(); // Error :- print is a variable not a function

// ========================================================Internally JS code =================================================================

// Charon function declaration ki hoisting ho gyi
function print() {
    console.log("First Function declaration");
}

function print() { // overwrites the first function
    console.log("Second Function declaration");
}

function print() { // overwrites the first and second both functions
    console.log("Third Function declaration");
}

function print() { // overwrites the first, second and third functions last mein ab yhi hai print function declaration
    console.log("Fourth Function declaration");
}

var print; //undefined ahi abhi jab tak initialize nhi karenge tab tak print() function ko overwrite nhi kar payega and function declaration se haar jayega, ek baar print variavble ko initialize kar dein then fir yeah print() function declaration ko hara dega then ek normal variable ki tarah work karega

console.log(print); // function :- { console.log("Fourth Function declaration");
print(); //"Fourth Function declaration"

console.log(print); // function :- { console.log("Fourth Function declaration");
print(); //"Fourth Function declaration"

print = "chirag"; //print variable ab initialize ho gya so ab print() function declaration khtm ho gya and print variable ne usko overwrite kar diya ab har jagah yhi print variable chalega 

console.log(print); //chirag
// print(); // Error :- print is a variable not a function

console.log(print); //chirag
// print(); // Error :- print is a variable not a function

print = "1234"; // print variable ka updation

console.log(print); //"1234"
// print(); // Error :- print is a variable not a function

print = true; // print variable ka updation

console.log(print); //true
// print(); // Error :- print is a variable not a function

console.log(print); //true
// print(); // Error :- print is a variable not a function

print = () => console.log("Arrow Function"); // print variable update ho gya usmein ek function expression aa gya

console.log(print); //Arrow function -> {console.log("Arrow Function");}
print(); // "Arrow Function"

console.log(print); //Arrow function -> {console.log("Arrow Function");}
print(); // "Arrow Function"

print = function() { // print variable updation
    console.log("Function expression");
}

console.log(print); // function expression { console.log("Function expression")}
print(); //"Function expression"

print = "compro"; // print variable updation

console.log(print); //compro
// print(); // Error :- print is a variable not a function

// ========================================================Internally JS code =================================================================