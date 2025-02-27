// It means ki parent function ke variables ka access child functions ke pass toh hota ahi ,lekin child functions ke variables ka access parent functions ke pass nhi hota
// function one() {
//     let username = "chirag"; //iska access iske child function(two()) ke pass toh hai,lekin two() function ke variables ka access iske pass nhi hai

//     console.log(username); // chirag
//     function two() {
//         username = "manral"; //updating the parent variable username in the child function
//         console.log(username); // manral;
//     }
//     console.log(username); //chirag;
//     two();
//     console.log(username); // manral
// }

// one();

// function one() {
//     let username = "chirag"; //iska access iske child function(two()) ke pass toh hai,lekin two() function ke variables ka access iske pass nhi hai

//     console.log(username); // chirag
//     function two() {
//         let username = "chirag"; //local variable with functional scope(two)
//         username = "manral"; //updating the child variable username in the child function
//         console.log(username); // manral;
//     }
//     console.log(username); //chirag;
//     two();
//     console.log(username); // chirag
// }

// one();

// function one() {
//     let username = "chirag"; //iska access iske child function(two()) ke pass toh hai,lekin two() function ke variables ka access iske pass nhi hai

//     console.log(username); // chirag(function one ka variable)
//     function two() {
//         const website = "youtube"; //local variable with functional scope of function two
//         console.log(username); // chirag function one ka variable
//     }
//     console.log(username); //chirag; function one ka variable
//     two();
//     // console.log(website); // website variable ko hum function two ke bahar access nhi kar skte kyonki uska scope sirf function two ke andar tak hi hai
//     console.log(username); //chirag function one ka variable
// }

// one();

// if(true) {
//     const username = "chirag"; //iska scope sirf is vale block meimn hai iske bahar(globally) nhi hai,iska scope andar vale if block mein jaroor hai
//     if(username === "chirag") {
//         const website = " youtube"; //iska scope sirf iss andar vale block mein hi hai iske bahar vale block mein yaa fir globally iska scope nhi hai
//         console.log(username + website);
//     }
//     // console.log(website); //iska scope sirf andar vale if block mein hai uske bahar kahin nhi hai
// }

// console.log(username); //iska scope sirf bhar vale if block mein hi hai uske bahar nhi hai
// console.log(website);



// --------------------------------------------------------interesting------------------------------------------------------------------------

// we can re-declare the same function name (print) through function declaration in js bcz of hoisting of function expressions, the last declared function overwrites the previous one.
// but in C++ we can use function overloading by giving different function signatures(name + parameters).
// Function declaration ka naam ek tarah se var keyword se declare hota hai behind the secne hum aisa smjh skte hai
// function print() {
//     console.log('Hello');
// }

// print(); // Hello, World 
// console.log(print); // [Function : print] yeah console.log("Hello, World") vala function declaration hai due to hoisting
// // It happens bcz pehle upar vala print() function hoist hua hoga(Hello print karne vala) then fir niche vala print upar hoist hone gya then usne dekha ki yaha already 1 print() function pada hua hai then usne usse overwrite kar diya hoisting mein them fir hum puri js file mein jahan bhi print() ko call krenge (Hello, World) hi print hoga naaa ki (Hello).

// function print() {
//     console.log('Hello, World');
// }

// print(); // Hello, World
// console.log(print); // [Function : print] yeah console.log("Hello, World") vala function declaration hai

// yahan hum print naam ka variable re-declare sirf aur sirf var se hi kar skte hai kyonki var hi re-declare allow karta hai and function-declaration ka naam bhi ek tarah se var keyword se hi banta ahi aisa hum smjh skte hai
// var print = function() {
//     console.log("Chirag Manral");
// }

// console.log(print); // [Function : print] yeah function expression vala print hai(console.log("Chirag Manral") vala)
// print(); // Chirag Manral

// hum let keyword ka use krke print variable firse declare nhi kr skte kyonki print naam ka variable already declared hai through print() naam ka function declaration, and let variable ka re-declare allow nhi krta
// let print = function() { // Error dega yeah vala ->  SyntaxError: Identifier 'print' has already been declared 
//     console.log("Chirag Manral");
// }

// console.log(print);
// print();

// print = 'hello'; // print variable update ho gya pehle usmein function declaration pada tha console.log('Hello, World'); yeah vala ab usmein bus 'hello' string padi hui hai

// console.log(print); // hello
// print(); // print is just a variable not a function here


// let print = function() {
//     console.log("Chirag Manral!!");
// }

// // We cannot re-declare a varibale by using let or const keyword
// // let print = function() {
// //     console.log("Hello, World");
// // }

// console.log(print); //[Function : print] function hai console.log("Chirag Manral!!"); yeah vala
// print(); // Chirag Manral!!

// print = function() {
//     console.log("Helloooooo");
// }

// console.log(print); // [Function : print] function hai console.log("Helloooooo"); yeah vala
// print(); //Hellooooo

// print = "heyyy!!" // print variable is updated

// console.log(print); //heyyy!!


// const print = function() {
//     console.log("Hello, World!!");
// }

// console.log(print); // [Function : print] function hai console.log("Hello, World!!"); yeah vala
// print(); //Hello, World!!

// We cannot re-declare a varibale by using let or const keyword
// const print = function() {

// }

// print = function() { // TypeError: Assignment to constant variable.
//     console.log("Chirag");
// }

// console.log(print); //Error aayega bcz hum const vala variable ko update nhi kar skte 
// print(); // error aayega