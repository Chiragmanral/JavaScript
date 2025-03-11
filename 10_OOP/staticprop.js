// static methods can only be used inside the class by other class methods or data members
// all the instances created by the class also can't use any static class methods.

class User {
    logMe() {
        console.log(`Username`);
    }

    hello() {
        console.log("chirag");
    }

    static sayHii() {
        console.log('Hii')
    }

    static createId() {
        return `12345@chirag`;
    }

    sayMyName() {
        let message =  this.createId;
        return message;
    }

}

const obj = new User('chirag');
// obj.logMe(); //accessible through instance bcz normal method of the class
// obj.createId(); //not accessible bcz static method of the class.
// obj.hello(); //accessible through instance bcz normal method of the class
// obj.sayHii(); //not accessible bcz static method of the class.

obj.sayMyName()