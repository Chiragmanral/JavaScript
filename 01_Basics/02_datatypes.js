"use strict" // treats all the js code as the newer version of javascript

// alert(3 + 3); // it is not defined here bcz we are using nodejs,not browser.

// let name = "chirag";
// let age = 21;
// let isLoggedIn = true;
// let state; // state ke value undefined hai kyonki sirf state ko define kiya ahi initialize nhin kiya
// // let state = null; // here state has a standalone value which is null.

// let firstName = "Chirag";
// let country = "India";
// // String Interpolation
// let temp = `Hello, my name is ${firstName}, my age is ${age} ans I lives in country ${country}`;
// console.log(temp);

// console.log(state);
// number => 2 to the power 53
// bigint
// string = ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// console.log(typeof "chirag"); // string

// console.log(typeof "456"); //string
// console.log(typeof 345); //number
// console.log(typeof true); //boolean
// console.log(typeof 1); //number

// console.log(typeof undefined); //undefined

// console.log(typeof null); // object -> It's an error in the js language bcz null is a standalone datatype it's not the datatype object.



// console.log(typeof sayhello); // function -> It's an error bcz function is not a datatype it's lies in the object datatype(bcz in js function is a object).


// -----------------------------------------------Symbol---------------------------------------------------------------------------------------
// objects ki key values sirf string yaa symbol ho skte ahi agar kuch aur hoga like boolena or numnber then voh implicitly string mein convert ho jayega
// baki sare datatypes toh implicitly string mein convert ho jate hai need padne par lekin symbol need padne par bhi implicitly string mein convert nhi hota usse string mein convert karne ke liye toString() method ka use krna padta hai


// symbol khud ek datatype hai, symbols are unique identifiers in objects
// let id = Symbol(); //simply a symbol declaration with no description and name id
// console.log(id); //Symbol()
// console.log(id.toString()); //Symbol() but string

// let id = Symbol('id');  //simply a symbol declaration with a description of 'id and name id
// console.log(id); //Symbol(id)
// console.log(id.toString()); //Symbol(id) but string

//Both the symbols have same description('id') but they are different,they are not same
// let id = Symbol('id');
// let id1 = Symbol('id');

// console.log(id == id1); //false
// console.log(id === id1); //false

// object literal
// let id = Symbol('id'); //local symbol
// let user = {
//     name : 'chirag',
//     [id] : "hello"
// }

// console.log(user.id); //it means ki user object ke andar id naam ki key dhundho string format mein naa ki symbol mein, joh ki exist karti hi nhi hai, so isiliye undefined aayega
// console.log(user[id]); // but it means ki id naam ka symbol dhundho user object mein joh ki present hai user object mein, so console log ho jayega

// let id1 = Symbol('temp'); //local symbol
// user[id1] = "hii";

// console.log(user[id1]);

//Global Symbols
let sym = Symbol.for('id');
let sym2 = Symbol.for('id');

console.log(sym);
console.log(sym2);

// console.log(sym == sym2); //true
// console.log(sym === sym2); //true

// let symbolName1 = Symbol.keyFor(sym);
// let symbolName2 = Symbol.keyFor(sym2);

// console.log(symbolName1);
// console.log(symbolName2);
