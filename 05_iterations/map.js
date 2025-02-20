// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Pass by value
// const newNums = myNumbers.map(num => {return num + 10}); //Internally, it means num = num + 10, so it updates all the values of myNumbers array.

// console.log(myNumbers); 
// console.log(newNums); // Pass by value

// let newArr = [];
// myNumbers.forEach((num) => { //yahan array hai toh pass by reference lekin uske andar primitive datatype hai (mnumber) joh pass byvalue hai so isiliye changes original array(myNumbers) mein nhi dikhenge
//     num = num + 10;

//     newArr.push(num);
// })

// console.log(newArr);
// console.log(myNumbers); 

// -------------------------------------------------------Chaining of map and filter methods---------------------------

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = myNumbers.map((num) => num *10)
                .map((num) => num + 5);

newArr = myNumbers.map((num) => num *10)
.map((num) => num + 5).filter(num => num > 30);

console.log(newArr);