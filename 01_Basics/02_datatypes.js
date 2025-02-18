"use strict" // treats all the js code as the newer version of javascript

// alert(3 + 3); // it is not defined here bcz we are using nodejs,not browser.

let name = "chirag";
let age = 21;
let isLoggedIn = true;
let state; // state ke value undefined hai kyonki sirf state ko define kiya ahi initialize nhin kiya
// let state = null; // here state has a standalone value which is null.

let firstName = "Chirag";
let country = "India";
// String Interpolation
let temp = `Hello, my name is ${firstName}, my age is ${age} ans I lives in country ${country}`;
console.log(temp);

// console.log(state);
// number => 2 to the power 53
// bigint
// string = ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// console.log(typeof "chirag"); // string

// console.log(typeof "456"); //string
// console.log(typeof 345); //number
// console.log(typeof true); //boolean
// console.log(typeof 1); //number

// console.log(typeof undefined); //undefined

// console.log(typeof null); // object -> It's an error in the js language bcz null is a standalone datatype it's not the datatype object.



// console.log(typeof sayhello); // function -> It's an error bcz function is not a datatype it's lies in the object datatype(bcz in js function is a object).




