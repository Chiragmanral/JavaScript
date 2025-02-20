// camelcase Naming Convention means when the variable has a name of multiple words, each word is written same as normal English language but the first word starts with the small letter rest all the other words starts with the Capital letter like in normal english.
const accountId = 15563;
let accountEmail = "chiragmanral@gmail.com"; // variable declaration and initialization
var accountPassword = "12345";
accountCity = "Jaipur"; // It is valid bcz js is a dynamically types language
let accountState; // declared for using this variable after it (variable is declared) 
// By default non-initialized variable is undefined
// accountState = 55; // variable is initialized
// accountId = 45; not allowed bcz it's a constant variable.

accountEmail = "ch@ch@gmail.com";
accountPassword = "21221";
accountCity = "Bengaluru";

var x = 2;
var x = 3;

// x = 2;
// x = 3;

console.log(x);
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// We can't declare same variable using let keyword in the same scope
// but we can declare same variable using var keyword in any scope(bcz it always has global scope)

/*
In, earlier days everything is a global scope in javascript there is nothing like functional or block scope in it.
So we introduce let for giving him the power of functional or block scope 
It means var keyword always has global scope even used inside a function or block, it supports hoisting
but let keyword have functional and block scope if used inside a function or block,it doesn't supports hoisting
*/

// When variable is neither declared nor initialized then compiler gives reference error.
// If variable is only declared not initialized then compiler gives undefined bcz it's the default value for all the non-initialized things in js.
// if variable is declared and also initialized then the most updated value gets printed by the compiler.

// () -> parantheses
// [] -> square brackets
// {} -> curly braces(brackets)