const arr1 = [1, 2, 3, 4, 5, 6];

// const initialValue = 5;

// agar hum reduce method kom initialvalue nhi denge toh array ka first element apne app accumulator ban jayega and current value first element ki jagah second element par chali jayegi (implicitly) initially
// const sum = arr1.reduce((acc, currVal, index, arr) => {
//     console.log(`The accumulator is :- ${acc} and the current Value is:- ${currVal} and the current index is :- ${index} and the array is :- ${arr}`);
//     return acc + currVal;
// },5);

// console.log(sum);

// In reduce hoga yeah ki initially accumulator variable mein initialvalue insert ho jayegi then fir uske baad accumilator + currentValue hoga and joh result aayega voh accumulator mein store ho jayega, and last mein joh accumulator ki value hogi voh reduce() return kar dega and voh store ho jayegi newValue mein,ismein bhi map and filter ki tarah hi call back function use honge andar as function expression
// aur joh currentValue hai voh ek iterator hai array ka voh array par iterator karega 1-1 karke from 1 to 6 all.

// 5(initial value) + 1 + 2 + 3 + 4 + 5 + 6= 26
// const newValue = arr1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, //call back function
//     initialValue //initial value to the reduce method
// );

// const newValue = arr1.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);
 
// console.log(newValue);

const myTotal = arr1.reduce(function(accumulator, currentValue) {
    console.log(`Accumulator is :- ${accumulator} and current value is :- ${currentValue}`);
    return accumulator + currentValue;
},0);

// console.log(myTotal);

// const shoppingCart = [
//     {
//         itemName : "js course",
//         price : 2999
//     },
//     {
//         itemName : "python course",
//         price : 5999
//     },
//     {
//         itemName : "mobile dev course",
//         price : 12999
//     },
//     {
//         itemName : "data science course",
//         price : 22999
//     }
// ]

// const mySum = shoppingCart.reduce((acc, currVal) => acc + currVal.price, 0);

// console.log(mySum);


