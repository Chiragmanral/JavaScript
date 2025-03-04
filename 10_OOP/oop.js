const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function() {
        // console.log("Got user details from database");// by default return type is undefined for console.log() function
        console.log(this); // yeah hai iss method ke andar ka this yeah point karega current object ko isike andar pura ka pura user object hoga
    },

    getUserLoginCount() {
        // console.log(`Login Count is : ${this.loginCount}`);// by default return type is undefined for console.log() function
    }

}

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(user.getUserDetails());
// console.log(user.getUserLoginCount);
// console.log(user.getUserLoginCount());

// console.log(this); //global context ka this operator jsike andar 1 empty object hai

// Promise naam ki class ko call karo and uska ek naya instance banake promiseOne mein insert kardo
const promiseOne = new Promise((resolve, reject) => {
    if(true) {
        resolve("Promise is resolved");
    }
    else {
        reject("Promise is rejected")
    }
});
const date = new Date();

// Function Constructor
function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this. hii = function sayHii() { // Function declaration
        console.log("Hiii from chirag");
    }

    this.hello = function() { //Function expression
        console.log("hello from chirag");
    }

    this.greet = () => { // Arrow Function
        console.log(`Welcome to javascript, ${this.username}`);
    }

    // return this; // This function implicitly returns this object always
}

const userOne = new User("Chirag", 45, true);
const userTwo = new User("Hello", 51, false);

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor); // yahan par userOne naam ke object ko User function ne construct kiya hai mtlb banaya hai isiliye yahan par User ek function constructor hai jisne userOne and userTwo nam ke objects ko construct kiya hai mtlb banaya hai create kiya hai

console.log(userOne instanceof User); // true which means userOne is an instance of User function Constructor
console.log(userOne instanceof Object); // true which means userOne is indirectly is an instance of Object bcz js mein sab kuch 1 object hi hai atlast so isiliye function constructor bhi 1 object hi hai and voh Object ka hi 1 part hai
