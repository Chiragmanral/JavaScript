let prices = {
    banana: 1,
    orange: 2,
    apple: 4,
    strwawberry : 12,
    guava : 14,
    litchi : 16
};

// console.log(Object.keys(prices));// ['banana', 'orange', 'apple', 'strwawberry', 'guava', 'litchi' ]
// console.log(Object.values(prices)); //[ 1, 2, 4, 12, 14, 16 ]

// let arr = Object.entries(prices); //it means prices object ki sari properties ko array banakar 1 array mein hi store kar do
// Like this :- [[ 'banana', 1 ],[ 'orange', 2 ],[ 'apple', 4 ],[ 'strwawberry', 12 ],[ 'guava', 14 ],[ 'litchi', 16 ]]

let arr1 = [1, 2, 3, 4, 5]; // this array can't be transformed into an object bcz Object.fromEntries(arr) method takes input of a fixed pattern in it.
// Like this :- [[ 'banana', 1 ],[ 'orange', 2 ],[ 'apple', 4 ],[ 'strwawberry', 12 ],[ 'guava', 14 ],[ 'litchi', 16 ]] and like this also :- [[1, 2], [3, 4]]
let arr2 = [[1, 2], [3, 4]];

// let obj = Object.fromEntries(arr);// arr array can be converted into an object
let obj1 = Object.fromEntries(arr2);// arr array can be converted into an object

console.log(obj1);