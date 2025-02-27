// Pass by reference methods :- push, pop, shift
// Pass by value mrthods :- some, every

// let arr = [1, 2, 3, 4, 5];

// arr.push(6);  // [ 1, 2, 3, 4, 5, 6 ]
// arr.push(4,5); // [1, 2, 3, 4, 5, 4, 5]
// arr.push(6, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]
// arr.push([6, 7, 8]); // [1, 2, 3, 4, 5, [6, 7, 8]]
// console.log(arr);

// console.log(arr.pop()); //pop returns the popped out element, it's a pass by reference method
// console.log(arr.pop()); //pop returns the popped out element, it's a pass by reference method
// console.log(arr);

// console.log(arr.shift()); // 1 shift returns the deleted element from the front, it's a pass by reference method
// console.log(arr.shift()); // 2
// console.log(arr); //[ 3, 4, 5 ]

// arr.unshift(2,4,5); // [2, 4, 5, 1, 2, 3, 4, 5]
// arr.unshift([2,4,5]); // [ [ 2, 4, 5 ], 1, 2, 3, 4, 5 ]

// console.log(arr);

// function print() {
//     console.log('hello!!');
// }

// print(); // hello!!
// print(453,'chirag'); // hello!!  it means ki agar paramaters ki need nhi hai function ko and tum jabardasti arguments pass kar rhe ho so voh error nhi dega and usse ignore kar dega

// some method dekhta hai ki atleast 1 element mil jaye joh given condition ko satisfy kare baki koi aur kare naa kare bus 1 kar jaye toh isilye isse jahan voh pehle element mil jata hai yeah method vahin true return karke bahar aa jata hai execution rok deta hai apna vahin par lekin agar pure array mein aisa 1 bhi element nhi milta toh false return kar deta hai

let arr = [2, 4, 5, 8, 20];

console.log(arr.some(value => value % 2 !== 0)); // true bcz 5 ek odd number hai joh isse chahiye tha

console.log(arr.every(value => value % 2 === 0)); // false kyonki baki sab toh even hai lekin 5 odd hai bus

console.log([2, 4, 6, 8, 10].every(value => value % 2 === 0)); // true kyonki array ki har ek value even hai