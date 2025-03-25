function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get : function() {
            return this._email.toUpperCase();
        },
        set : function(value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get : function() {
            return `${this._password}hello`;
        },
        set : function(value) {
            this._password = value;
        }
    })

}

const obj = new User("chirag2003@gmail.com", 12345);

console.log(obj.email);
console.log(obj.password);
