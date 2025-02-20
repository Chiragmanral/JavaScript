// const coding = ["JavaScript", "Python", "C++", "C", "java", "Swift"];

// const values = coding.forEach((item) => { //forEach loop can't return anything, it does not have power to return anything is js it always return undefined
//     // console.log(item);
//     return item;
// })

// console.log(values);

// ----------------------------------------------------------Filter------------------------------------------------------------------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter method bhi array ko pass by value hi leta hai kyonki original array jyon ka tyon rehta hai usmein koi chedha khani nhi hoti hai,it means ki deep copy hai
// const newNums = myNums.filter( (num) => num > 4);

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// })

// console.log(newNums);

// const numsArr = [];

// myNums.forEach((num) => {
//     if(num > 4) {
//         numsArr.push(num);
//     }
// })

// console.log(numsArr);

const books = [
    { title : 'Book One', genre : "Fiction", publish : 1981, edition : 2004},
    { title : 'Book Two', genre : "Non-Fiction", publish : 1992, edition : 2008},
    { title : 'Book Three', genre : "History", publish : 1999, edition : 2007},
    { title : 'Book Four', genre : "Non-Fiction", publish : 1989, edition : 2010},
    { title : 'Book Five', genre : "Science", publish : 2009, edition : 2014},
    { title : 'Book Six', genre : "Fiction", publish : 1987, edition : 2010},
    { title : 'Book Seven', genre : "History", publish : 1986, edition : 1996},
    { title : 'Book Eight', genre : "Science", publish : 2011, edition : 2016},
    { title : 'Book Nine', genre : "Non-Fiction", publish : 1981, edition : 1989}
]

// () -> It means implicit(automatically) return,it's not a new block scope, {} -> It means explicit return bcz a new block scope is created in arrow functions
// const userBooks = books.filter((book) => {
//     return book.genre === "Fiction";
// })

let userBooks = books.filter((book) => book.publish >= 2000)

// userBooks = books.filter((book) => book.publish <= 2000 && book.genre === "History");

// userBooks = books.filter((book) => book.publish <= 2000 || book.genre === "History");

userBooks = books.filter((book) => book.edition >= 2000 && book.genre === "Fiction" && book.publish <= 2000);

console.log(userBooks);