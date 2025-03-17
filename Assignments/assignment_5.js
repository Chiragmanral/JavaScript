// find the largest and smallest values from the array -> Done
// flatten the array with 0th level nesting -> Done

// const nestedArray = [
//     [150, [-30, 900, [2000]]], 
//     75, 
//     [[-1100, [20, 1600]], 5], 
//     [400, [-600, [18000, [-10000, [130]]]]], 
//     [[14000, -100], [1900, 800, [-1200, 17000]]]
//     ];

// const nestedArray2 = [
//     [150, [-30, 900, [2000]]], 
//     75, 
//     [[-1100, [20, 1600]], 5]
// ]
  
// =====================================================For largest value=========================================================================

// let max = -Infinity;
// function largestValue(arr) {
//     for(let value of arr) {
//         // if(value.__proto__ == Array.prototype) {
//         if(Array.isArray(value)) {
//             largestValue(value);
//         }
//         else {
//             if(value > max) {
//                 max = value;
//             }
//         }
//     }
//     return max;
// }

// let maximumValue = largestValue(nestedArray);
// let maximumValue1 = largestValue(nestedArray2);

// console.log(maximumValue); // Expected :- 18,000, Actual :- 18,000
// console.log(maximumValue1); // Expected :- 2,000, Actual :- 18,000
// This happens bcz largestValue(nestedArray), when this function calls first time, max value for it is -1 as expected but after execution it upodates the global max variable to max = 18,000 then when we call largestValue function for the second time for nestedArray2 then we thinks max starts with -1, but max starts with 18,000 instead that leads to the incorrect output.
// So we have to reset the value of max = -1 for every largestValuer function call for each array.

// function largestValue(arr, max = -Infinity) {
//     for(let value of arr) {
//         // if(value.__proto__ == Array.prototype) {
//         if(Array.isArray(value)) {
//             max = largestValue(value, max);
//         }
//         else {
//             if(value > max) {
//                 max = value;
//             }
//         }
//     }
//     return max;
// }

// let maximumValue = largestValue(nestedArray);
// let maximumValue1 = largestValue(nestedArray2);

// console.log(maximumValue); // Expected :- 18,000, Actual :- 18,000
// console.log(maximumValue1); // Expected :- 2,000, Actual :- 2,000

// =====================================================For largest value=========================================================================

// =====================================================For smallest value=======================================================================

// let min = Infinity;
// function smallestValue(arr) {
//     for(let value of arr) {
//         // if(value.__proto__ == Array.prototype) {
//         if(Array.isArray(value)) {
//             smallestValue(value);
//         }
//         else {
//             if(value < min) {
//                 min = value;
//             }
//         }
//     }
//     return min;
// }

// let minimumValue = smallestValue(nestedArray);
// let minimumValue1 = smallestValue(nestedArray2);

// console.log(minimumValue); // Expected :- -10000, Actual :- -10000
// console.log(minimumValue1); // Expected :- -1100, Actual :- -10000

// function smallestValue(arr, min = Infinity) {
//     for(let value of arr) {
//         // if(value.__proto__ == Array.prototype) {
//         if(Array.isArray(value)) {
//             min = smallestValue(value, min);
//         }
//         else {
//             if(value < min) {
//                 min = value;
//             }
//         }
//     }
//     return min;
// }

// let minimumValue = smallestValue(nestedArray);
// let minimumValue1 = smallestValue(nestedArray2);

// console.log(minimumValue); // Expected :- -10000, Actual :- -10000
// console.log(minimumValue1); // Expected :- -1100, Actual :- -1100

// =====================================================For smallest value=======================================================================

// =====================================================Flattening an array=======================================================================

// Method -1
let nestedArray = [
    [150, [-30, 900, [2000]]], 
    75, 
    [[-1100, [20, 1600]], 5], 
    [400, [-600, [18000, [-10000, [130]]]]], 
    [[14000, -100], [1900, 800, [-1200, 17000]]]
    ];

// In-built method :- .flat(depth) it means it's a pass by value method in js

// let newArr1 = nestedArray.flat(Infinity);
// // nestedArray = nestedArray.flat(Infinity); //depth is infinity means jahan tak ho skta jitna ho skta ahi utna flat kardo array ko

// console.log(newArr1);
// console.log(nestedArray);


// Method - 2
function flatArray(arr, newArr = []) {
    for(let value of arr) {
        if(Array.isArray(value)) {
            newArr = flatArray(value, newArr);
        }
        else {
            newArr.push(value);
        }
    }
    return newArr;
}

// console.log(flatArray(nestedArray));

// Method - 3
// Array.prototype.flatArray = (arr, newArr = []) => {
//     for(let value of arr) {
//         if(Array.isArray(value)) {
//             newArr = value.flatArray(value, newArr);
//         }
//         else {
//             newArr.push(value);
//         }
//     }
//     return newArr;
// }

// let newArr3 = nestedArray.flatArray(nestedArray);
// // let newArr3 = nestedArray.flatArray(nestedArray,["chirag", "manral"]);
// console.log(newArr3);

// Method - 4 (Using reduce method)

// let newArr4 = nestedArray.reduce((acc, currVal, index) => {
//     if(Array.isArray(currVal)) {
//         // acc =  acc.concat(flatArray(currVal));
//         // return acc;
//         return acc.concat(flatArray(currVal));
//     }
//     else {
//         acc.push(currVal);
//         return acc;
//     }
// },[]);

// console.log(newArr4);

// =====================================================Flattening an array=======================================================================