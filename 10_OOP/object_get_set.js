const User = { 
    _email : "chirag@gmail.com",
    _password : "abcde",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    },

    get password() {
        return this._password.toUpperCase();
    },

    set password(value) {
        this._password = value;
    }
}

// console.log(User._email); //chirag@gmail.com
// console.log(User.email); //CHIRAG@GMAIL.COM
// console.log(User._password); //abcde
// console.log(User.password); //ABCDE

const userOne = {
    __proto__ : User
}

console.log(userOne._email); //chirag@gmail.com
console.log(userOne.email); //CHIRAG@GMAIL.COM
console.log(userOne._password); //abcde
console.log(userOne.password); //ABCDE