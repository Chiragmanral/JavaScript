// for of loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];

// for (const val of arr) {
//     console.log(val);
// }

// let greetings = "Hello, World!!!";

// for (const greet of greetings) {
//     console.log(`Each character is :- ${greet}`);
// }

// In js map is like ordered map in c++ menans all the key value pairs are in the same order as inserted and all the key-value pairs are unique in nature,we can't store any duplicate key-value pairs in map.
const map = new Map();
map.set('IN', 'India');
map.set('USA', "United States Of America");
map.set("Fr", "France");
// map.set('IN', 'Ind');

// console.log(map); //prints the whole map
// console.log(map.get('IN'));
// console.log(map.get('USA'));
// console.log(map.get('Fr'));

// map.set('IN', "Hello"); //Udation of key-value pair(IN, India) to (IN, Hello)

// console.log(map.size); //3
// map.delete('IN');

// console.log(map.size); //2

// for (const element of map) {
//     console.log(element);
// }

// for (const [key, value] of map) {
//     console.log(`${key} -> ${value}`);

// }

// const myObj = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }

// for (const [key, value] of myObj) { //object is not iterable in thsi way in js.
//     console.log(`${key} :- ${value}`)
// }

// const coding = ["js", "python", "java", "c++"];

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// coding.forEach((item) => {
//     console.log(item);
// })


// coding.forEach(printMe);

// forEach loop is also known as high order array loop

const codingFile = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

// In js, primitive datatypes are pass by value (number,string,boolean,null,undefined,bigInt)
// But, non-primitive datatypes like objects and arrays are pass by reference in it.

// Pass by reference hai 
codingFile.forEach((item) => {
    // console.log(`${item.languageName} -> ${item.languageFileName}`);
    item.languageFileName = "chirag"; //lekin change isiliye hora hai kyonki sare objects (non-primitive datatypes) js mein by default pass by reference hi hote hai,isiliye original array ke objects change hore hai
})

console.log(codingFile); 
