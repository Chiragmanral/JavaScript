// class User {
//     constructor(username, email, password) { 
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abcde`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const userOne = new User("Chirag", "chirag@google.com", '1234');

// // console.log(userOne.email); //"chirag@google.com"
// // console.log(userOne.username); // "Chirag"
// // console.log(userOne.password); // '1234'

// console.log(userOne.encryptPassword()); //1234abcde
// console.log(userOne.changeUsername()); //CHIRAG

// Behind the scene in js

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    // this.changeUsername = function() {
    //     return `${this.username.toUpperCase()}`;
    // }
    // this.encryptPassword = function() {
    //     return `${this.password}abcde`;
    // }
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abcde`;
}

const userTwo = new User("Chirag", "chirag@google.com", '1234');

console.log(userTwo.username);
console.log(userTwo.email);
console.log(userTwo.password);
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUsername());





