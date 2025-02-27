// Pass by reference methods in array :- 
// sort, reverse and splice methods
// Pass by value methods in array :-
// map, filter, reduce, reduceRight, restall methods also

// let arr = [5, 13, 14, 1, 2];

// let newArr = arr.sort();
//sort method pass by reference kaam karta hai so it means ki yeah original array ko hi sort kar dega
// yeah method sorted array ko hi return bhi karta hai
// sort method joh hai voh array ke har 1 element ko by default string lekar chalega toh yeah arr array ke elments ko lexicographically compare karke sort kar dega isiliye sorted array vaisa nhi aaya jaisa hum chahte the
// Expected Result :- [1, 2, 5, 13, 14]
// Actual Result :- [ 1, 13, 14, 2, 5 ]
// console.log(arr); // [ 1, 13, 14, 2, 5 ]
// console.log(newArr); // [ 1, 13, 14, 2, 5 ]

// Iss chij ko thik krne ke liye humein custom comparator banane padenge ab

// let arr = [5, 13, 2, 2, 14, 1, 2];

// For sorting in ascending order which is also by default
// lekin js ke comparator mein hum c++ ki tarah true for swap and false for no swap use nhi kar skte bcz in js this is in-built positive integer for swap and negative integer for no swap, and vaise bhi js mein negative and positive integers donon hi truthy values hai sirf 0 hi falsy value hai.
// function compare(a, b) {
//     if(a < b) return -1;//no swap
//     else if(a == b) return 0;//no swap
//     else return 1;// swap
// }

// For sorting in ascending order
// so it means ki agar negative integer return karte hai toh swap nhi marna hai, lekin agar positive integer krte hai toh swap marna hai
// But, it's a good and standard practicce to return 1 for swap and 0 when both the elements are equal and -1 for no swap
// function compare(a, b) {
//     if(a < b) return -890;//no swap
//     else if(a == b) return -768;//no swap
//     else return 789;// swap
// }

// For sorting in descending order
// function compare(a, b) {
//     if(a < b) return 1; // swap
//     else if(a == b) return 0;//no swap
//     else return -1;//no swap
// }

// For sorting in descending order
// function compare(a, b) {
//     if(a < b) return 678; //swap
//     else if(a == b) return -789; //no swap
//     else return -78; //no swap
// }

// let newArr = arr.sort(compare);
// // arr = arr.sort(compare); //iska koi mtlb nhi hai kyonki yahan sort method array ko pass by reference le rha hai it means ki original array ko hi sort kar diya then fir sorted array ko return kiya and usse bhi arr mein hi update bhi kar diya.
// console.log(arr); // [ 1, 2, 5, 13, 14 ]
// console.log(newArr); // [ 1, 2, 5, 13, 14 ]


// let arrString = ["chirag", "Chirag", "Manral", "manral"];

// console.log(arrString); // ["chirag", "Chirag", "Manral", "manral"]
// console.log(arrString.sort()); //[ 'Chirag', 'Manral', 'chirag', 'manral' ]
// console.log(arrString); //[ 'Chirag', 'Manral', 'chirag', 'manral' ]

let arrObjects = [{
    courseName : "Learn JS",
    price : 4500
},
{
    courseName : "Learn C++",
    price : 500
},{
    courseName : "Learn Python",
    price : 5000
},{
    courseName : "Learn TypeScript",
    price : 9500
},
{
    courseName : "Learn Python",
    price : 5000
},
{
    courseName : "Learn TypeScript",
    price : 9500
} ]

// let coursePriceFiveThousand = arrObjects.find((course) => { // har ek course object ko dekhega jiska price 5000 ke equal hoga usse vahin nreturn krke bahar aa jayega
//     return course.price === 5000;
// })

let coursePriceFiveThousand = arrObjects.find(course => course.price === 5000);
console.log(coursePriceFiveThousand); //{ courseName: 'Learn Python', price: 5000 }

coursePriceFiveThousand = arrObjects.findIndex(course => course.price === 5000);
console.log(coursePriceFiveThousand); // 2

coursePriceFiveThousand = arrObjects.findLastIndex(course => course.price === 5000);
console.log(coursePriceFiveThousand); // 4



// // for sorting in ascending order on the basis of course prices
// // function compare(a, b) {
// //     if(a.price < b.price) return -1; //no swap
// //     else if(a.price === b.price) return 0; //no swap
// //     return 1; //swap
// // }

// // for sorting in descending order on the basis of course prices
// function compare(a, b) {
//     if(a.price < b.price) return 1; //swap
//     else if(a.price === b.price) return 0; //no swap
//     return -1; //no swap
// }

// arrObjects.sort(compare);

// console.log(arrObjects);







// let arr = [1, 2, 3, 4, 5, 3, 7, 2, 1, 1, 2, 5, NaN];

// ---------------------------------------------------Important-----------------------------------------------------------------------
// Negative Indexing of array is like :-
// arr = [1,2,3,4,5] => 
// -1(negative index) or 4(positive index) -> 5(element)
// -2(negative index) or 3(positive index) -> 4(element)
// -3(negative index) or 2(positive index) -> 3(element)
// -4(negative index) or 1(positive index) -> 2(element)
// -5(negative index) or 0(positive index) -> 1(element)

// console.log(arr.length); // returns the length of the array

// console.log(arr.at(4));
// console.log(arr.at(-1));//NaN
// console.log(arr.at(-3)); //2

// console.log(arr.at(15)); //returns the element at that specific index and if the index is invalid or out of the range for the array returns undefined

// console.log(arr.includes(NaN)); // true, Determines whether an array includes a certain element, returning true or false as appropriate, it handles NaN effectively while indexOf can't handle NaN effectively
// console.log(arr.indexOf(NaN)); // -1, can't find the indexOf nan in the array which is 12 here.

// console.log(arr.indexOf(5)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// console.log(arr.lastIndexOf(NaN)); // -1, lastIndexOf also can't handle NaN as indexOf yahan par aana toh 12 chahiye lwkin aa rha hai -1

// console.log(arr.indexOf(5)); //4
// console.log(arr.lastIndexOf(5)); //11

// Slice method is pass by value type it returns the subarray which we atrget or slice from the array, starting index is included and ending index is excluded
// default starting index is 0 and ending index is length of array.
// let newArr = arr.slice(); //returns the whole array from [0,13).
// // console.log(newArr); 

// newArr = arr.slice(2,7); //[ 3, 4, 5, 3, 7 ]
// // console.log(newArr);

// newArr = arr.slice(3); //starting index is 3, ending index is 13 [4, 5, 3, 7, 2, 1, 1, 2, 5, NaN]
// // console.log(newArr);

// newArr = arr.slice(-4); //starting index is -4, ending index is 13 [ 1, 2, 5, NaN]
// // console.log(newArr);

// let str = "hello world!!!";

// console.log(str.slice()); //hello world!!!
// console.log(str.slice(-4)); //d!!!
// console.log(str.slice(-8, -2)); //world!


// splice method :- Pass by reference hai elements ka insertion and deletion dono kar skte hai starting index dena hota hai bus and voh included bhi hota hai
// yeah deleted elements ka array return karta hai

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.splice()); //it does nothing to the array no insertion or deletion

// console.log(arr.splice(3,3)); // [4, 5, 6] delete karna shuru karo 3rd index se 3rd index ko bhi include karo and 3 elements ko delete kardo
// console.log(arr); //[1, 2, 3]

// console.log(arr.splice(-5,3)); // [2, 3, 4] delete karna shuru karo -5 index se -5 index ko bhi include karo and 3 elements ko delete kardo uske aage ke usko bhi include krke
// console.log(arr); //[1, 5, 6]

// console.log(arr.splice(3)); // [4, 5, 6] delete karna shuru karo 3rd index se and 3rd index ko bhi include karo and uske aage ke sabhi elements ko delete kardo
// console.log(arr); //[1, 2, 3]

// console.log(arr.splice(2,3, 3, 4, 5)); // [3, 4, 5] delete karna shuru karo 2nd index se 2nd index ko bhi include karo and 3 elements ko delete kardo uske aage ke means 2nd , 3rd and 4th index ko delete kardo, then 2nd index pe 3 , 3rd index pe 4 and 4th index par 5 insert kardo
// console.log(arr); //[1, 2, 3, 4, 5, 6]

// console.log(arr.splice(2,3, [3, 4, 5])); // [3, 4, 5] delete karna shuru karo 2nd index se 2nd index ko bhi include karo and 3 elements ko delete kardo uske aage ke means 2nd , 3rd and 4th index ko delete kardo, then fir [3, 4, 5] iss array ko insert kardo at 2nd index
// console.log(arr); //[1, 2, [3, 4, 5], 6]

// console.log(arr.splice(2,3, [3, 4, 5], [8, 9, 10])); // [3, 4, 5] delete karna shuru karo 2nd index se 2nd index ko bhi include karo and 3 elements ko delete kardo uske aage ke means 2nd , 3rd and 4th index ko delete kardo, then fir [3, 4, 5] iss array ko insert kardo at 2nd index and [8, 9, 10] iss array ko insert kardo at 3rd index
// console.log(arr); //[1, 2, [3, 4, 5],[8, 9, 10], 6]

// let str = "My name is Chirag Singh Manral";

// let newArr = str.split(''); // [ 'My', 'name', 'is', 'Chirag', 'Singh', 'Manral' ] Split a string into substrings using the specified separator and return them as an array.
// console.log(newArr);

// console.log(str.split('/')); // [ 'My name is Chirag Singh Manral' ] str string ke andar ek baar bhi '/' yeah vala delimiter nhi aaya so string split hi nhi ho paayi and puri string as a single element array ke andar chali gyi so array ke andar single elemnet hai bus 

// let str = "My-name-is-chirag-singh-manral";

// // split method is pass by value method.
// console.log(str.split('-')); //[ 'My', 'name', 'is', 'chirag', 'singh', 'manral' ]
// console.log(str.split('n')); //[ 'My-', 'ame-is-chirag-si', 'gh-ma', 'ral' ]

// let str = "chirag";
// console.log(str.split()); // ['chirag']
// console.log(str.split('')); //['c', 'h', 'i', 'r', 'a', 'g']

// let arr = [ 'c', 'h', 'i', 'r', 'a', 'g' ];

// join method is pass by value method
// console.log(arr.join(' ')); //c h i r a g
// console.log(arr.join('-')); // c-h-i-r-a-g
// console.log(arr.join('manral')); // cmanralhmanralimanralrmanralamanralg

// console.log(arr.join()); // c,h,i,r,a,g by default the joining glue is comma(,)
// console.log(arr.join(',')); // c,h,i,r,a,g by default the joining glue is comma(,)

// let arr = [1, 2, 3, 4];

// console.log(arr.concat(4,5)); // [ 1, 2, 3, 4, 4, 5 ]
// console.log(arr.concat([4, 5], 6, 7)) // [ 1, 2, 3, 4, 4, 5, 6, 7]
// console.log(arr.concat([67, 78], [45, 67])); // [1,  2,  3,  4, 67, 78, 45, 67]

// let newArr = arr.reverse(); //  it reverses the order of array, it is a pass by reference method, it also returns the reversed array
// console.log(newArr); // [4, 3, 2, 1]
// console.log(arr); // [4, 3, 2, 1]