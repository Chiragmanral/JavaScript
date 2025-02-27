// // First promise
// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     //  DB calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task is completed');
//         resolve();
//     }, 1000);
// })

// promiseOne.then(() => {
//     console.log('Promise is resolved successfully');
// })

// // Second promise
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function() {
//     console.log("Async 2 promise is resolved");
// })

// Third promise
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // Do some asynchronous task
//         let data = {
//             name: "chirag",
//             age: 21,
//             email : "chiragmanral@gmail.com"
//         }
//         resolve(data);
//     },1000);
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })

// Fourth promise
// const promiseFour = new Promise((resolve, reject) => {
//     let bug = true;
//     let data = {
//         username : "chirag",
//         password : 12345
//     }
//     if(!bug) {
//         resolve(data);
//     }
//     else {
//         reject('Something went wrong');
//     }
// })

// promiseFour.then(user => { //linked with resolve of promise
//     console.log(user);
//     console.log(user.username);
//     return user.password;
// })
// .then(password => { 
//     console.log(password);
// })
// .catch(error => { // linked with reject of promise
//     console.log(error);
// })
// .finally(() => console.log('The promise is either gets resolved or rejected')); //yeah ek tarike se by default hai yeah toh atlast run karega hi karega humara

// Promise Five
// const promiseFive = new Promise((resolve, reject) => {
//     let error = true;
//     let data = {
//         username : "chirag",
//         password : 12345
//     }
//     if(error) {
//         reject('ERROR : Something went wrong');
//     }
//     else {
//         resolve(data);
//     }
// })

// async function consumePromiseFive() { //iss function declaration ke andar promise use hora hai joh ki 1 asynchronous task hai js mein toh isiliye iske aage async keyword lagana jaroori hai yeah batane ke liouye ki iss function ke andar asynchronus task hone vala hai bcz by default js mein sare task synchronous hote hai vaise bhi aur function declaration ke andar bhi
//     try { //it means the promise is resolved
//         const response = await promiseFive; //await keyword promise ke aage use karne ka matlab hai ki promise 1 asynchromnous task hai js mein toh uske response ke liye wait karo chahe voh resolve ho jaye yaa fior rejevt ho jaye
//         console.log(response);
//         console.log(response.username);
//         console.log(response.password);

//     }
//     catch(error) { //it means the promise gets rejected
//         console.log(error);
//     }
// }

//fetch api

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fetch function returns a promise that resolves to a Response object representing the response to the request.
//         const data = await response.json(); //it converts the Response object in json format which takes time thst's why we used await here

//         // console.log(typeof response); // Response object
//         // console.log(response); //Response object

//         console.log(typeof data);
//         console.log(data);
//     }
//     catch(error) {
//         console.log("ERROR : Something went wrong");
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then(data => console.log(data))
.catch((error) => {
    console.log(error);
})

