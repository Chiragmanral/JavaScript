// Function declaration -> Hoisting appliocable
// function sayMyName() {
//     console.log("C");
//     console.log("H");
//     console.log("I");
//     console.log("R");
//     console.log("A");
//     console.log("G");
// }

// sayMyName -> Function ReferenceError(Function as a value)

// console.log(sayMyName); -> prints the function not executes it bcz parantheses are absent.
// console.log(sayMyName()) // By default(implicit) return value is undefined here of sayMyName function.

// sayMyName(); // sayMyName function ko call kiya gya hai bcz parantheses are present.

// Function declaration -> Hoisting appliocable
// function sayhello(name) {
//     console.log(`Hello, ${name}`); //By deafault all the functions return undefined if it doesn't return anything explicitly
//     return; // The empty return statement also returns undefined so it's only use is to stop the function execution and return back to the function call.
// }

// // function expression -> Hoisting not applicable
// let sayhiii = function (name) {
//     console.log(`Hiii, ${name} bhai`);//By deafault all the functions return undefined if it doesn't return anything explicitly
// }

// // function expression -> Hoisting not applicable
// let sayByee = (name) => {
//     console.log(`Byee!! ${name}`);//By deafault all the functions return undefined if it doesn't return anything explicitly
// }

// // function expression -> Hoisting not applicable
// let sum = (a,b) => {
//     console.log(`Sum is ${a + b}`);//By deafault all the functions return undefined if it doesn't return anything explicitly
// }

// // function expression -> Hoisting not applicable
// let sayCompany = companyName => {
//     console.log(`Company's name is :- ${companyName}`);//By deafault all the functions return undefined if it doesn't return anything explicitly
// }

// // function declaration -> Hoisting applicable
// function difference(a,b) {
//     console.log(a); // a mein by default undefined aa rha hai and b mein bhi
//     return a - b; // and undefined - undefined = Nan aa rha hai
// }

// console.log(difference);
// console.log(difference());
// console.log(difference(4,5));

// console.log(sayByee); // Here, sayByee is a function as a value so it contains the source code opf teh function bcz sorec code is the value of the function.
// console.log(sayByee()); // Here, we don't pass any parameter to the function so it takes undefined as the default parameter.
// console.log(sayByee('chirag')); //sayByee function returns undefined by default that's why console.log gives undefined here.


// function addTwoNumbers(number1, number2) { // function declaration ke samay jo use hote hai unhein kehta hai function parameters
//     console.log(`Sum is :- ${number1 + number2}`);
// }

// addTwoNumbers(3, 4); // 7 as a number || function call ke samay function ko jo diye jate hai unhe kehte hai function arguments.
// addTwoNumbers(3,"4"); // "34" as  a string 
// addTwoNumbers(3, "a"); // "3a" as a string
// addTwoNumbers(3, null); // null is converted to number 0 hence (3 + 0) is 3.
// addTwoNumbers(3,undefined); // NaN bcz undefined + something is always NaN.

// function addTwoNumbers(number1, number2) { // function declaration ke samay jo use hote hai unhein kehta hai function parameters
//     return number1 + number2;
// }

// const result = addTwoNumbers(4,5);
// console.log("Result is :- ",result); // function returns undefined by default(inplicitly) hence result gets undefined in it by the function,so it prints undefined.

// function loginUserMessage(username) {
//     username = username ?? hello; //Nullish Coalescing Operator used here for , if the username given by user is valid thebn select the username given by user if it's invalid then use hello as the second option(default) username.
//     if(username) {
//         return `${username} just logged in the website`;
//     }
//     else {
//         return `Please enter a valid username`;
//     }
// }

// console.log(loginUserMessage());
// console.log(loginUserMessage("Chirag"));

// function loginUserMessage(username = "Sam") { // It means default username is "Sam", iof the user does not give any username then the username by default is not undefined anymore it's sam in this case
//     if(username) {
//         return `${username} just logged in the website`;
//     }
//     else {
//         return `Please enter a valid username`;
//     }
// }

// console.log(loginUserMessage());

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let resultArray = [...arr1, ...arr2]; // Made a new array and then spreads the arr1 and arr2 array one by one by using ... -> spread operator here.

// console.log(resultArray);

// ... -> This is the both rest and spread operator but used for diffrent purposes on differnt places.
// rest operator menas it inserts all the bachi hui values in an array then we can use that array and perform various array operations on that array as per our need like foreach,slice or splice.
// function calculateCartPrice(...num) { // ..., here this is used as the rest operator, not spread operator;
//     return num;
// }

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 400));
// console.log(calculateCartPrice(200, 400, 600, 2000, 2034874, 3439));

// function calculateCartPrice(val1, val2, ...num) { // ..., here this is used as the rest operator, not spread operator;
//     // It means first value goes in val1 variable, then second one goes inside the val2 variable and rest all the values goes inside the num array.
//     console.log(val1);
//     console.log(val2);
//     return num;
// }

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 400, 500));
// console.log(calculateCartPrice(200, 400, 600, 2000, 2034874, 3439));

// const user = {
//     username : "Chirag",
//     price : 1999
// }

// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
// }

// // handleObject(user);
// handleObject({
//     username : "Compro",
//     price : 123
// });

// Array of objects
// const arr = [{
//     username : "Chirag",
//     password : 123
// },
// {
//     username : "Arpit",
//     password : 456
// },
// {
//     username : "Shirish",
//     password : 789
// }];

// console.log(arr[0].username);
// console.log(arr[0].password);
// console.log(arr[2].password);

// Object of Arrays
// const obj = {
//     arr1 : [1, 2, 3],
//     arr2 : [4, 5, 6],
//     arr3 : [7, 8, 9]
// }

// console.log(obj.arr2[0]);
// console.log(obj.arr2[1]);
// console.log(obj.arr2[2]);

const myNewArray = [100, 200, 300];

function getSecondValue(arr) {
    return arr[1];
}

console.log(getSecondValue(myNewArray));
console.log(getSecondValue([10, 20, 30]));