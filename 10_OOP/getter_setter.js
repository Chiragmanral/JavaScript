class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email;
    }
    
    set email(mailId) {
        this._email = mailId;
    }

    get password() {
        return `${this._password}chirag`;
    }
    set password(pass) {
        this._password = pass;
    }
}

const userOne = new User("chirag2003@gmail.com", 1234);

console.log(userOne.email);
console.log(userOne.password);