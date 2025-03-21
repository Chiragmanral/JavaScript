let myString = "Chirag";
let myString1 = "+91 9643752768"

// console.log(myString.includes("c")); //true
// console.log(myString.includes("C")); //false

// console.log(myString.startsWith("+91")); // false
// console.log(myString.startsWith("chirag")); // true

// console.log(myString1.startsWith("+91")); // true
// console.log(myString1.startsWith("chirag")); // false

// console.log(myString.endsWith('g')); //true
// console.log(myString.endsWith('T')); //false

// console.log(myString.toLocaleLowerCase()); //chirag
// console.log(myString.toLowerCase()); //chirag

// console.log(myString.toLocaleUpperCase()); //CHIRAG
// console.log(myString.toUpperCase()); //CHIRAG

// console.log(myString.normalize()); //Chirag

// console.log(myString.padStart(12, "hello")); //hellohChirag
// console.log(myString.padStart(12, "0")); //000000Chirag

// console.log("IDIB453657".padStart(16, "0")); //000000IDIB453657
// console.log("IDIB453657".padEnd(16, "-")); //IDIB453657------

// console.log("**".repeat(20)); //****************************************

// let greeting = `\
// \
// \
// \
// \
// Hello, ${myString}\nhiii` ;

let dollar = '$';
let score = 100;
let cross = `\u2718`; //✘
let add = `\u2719`; //✙

let greeting1 = `\
${dollar} is at 
value of ${score}
\u2718`; //Working fine


// console.log(greeting1);
// console.log(cross); //✘
// console.log(add); //✙
// console.log(cross.length); //1
// console.log(add.length); //1


let len = String.raw`\u27`;
console.log(len);



