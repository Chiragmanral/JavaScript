// static methods can only be used inside the class by other class methods or data members and can directly be used through the class
// all the instances created by the class can't use any static class methods or properties through them bcz they don't have access to it.

// -------------------------------------------------Important---------------------------------------------------------------
// For using regular methods in js, we need instance of the class through that instance we can use those regular methods.
// For using static methods in js, we have to use them directly through the class name, we can't use them through instances of the class.
// -------------------------------------------------Important---------------------------------------------------------------

class User {
    constructor(name) {
        this.name = name;
    }

    logMe() {
        console.log(`Username`);
    }

    fun1() {
        return 55;
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
        // let message =  this.fun1();
        // return message;
        // this.hello();
        let message = User.createId();
        return message;
    }

}

const obj = new User('chirag');

// console.log(obj.sayMyName());
// obj.logMe(); //accessible through instance bcz normal method of the class
// obj.createId(); //not accessible bcz static method of the class.
// obj.hello(); //accessible through instance bcz normal method of the class
// obj.sayHii(); //not accessible bcz static method of the class.

// obj.sayMyName();

// User.sayHii(); //we can access static data members only through it's original class only
// console.log(User.createId()); //we can access static data members only through it's original class only

class Teacher extends User { //child class also inherited static methods and properties from the parent class, and we can also override it if we want.
    constructor(name,email) {
        super(name);
        this.email = email;
    }

    static logMe() {
        console.log("hello, World!!!");
    }

    chirag() {
        console.log("Chirag Manral");
    }
}

// Teacher.sayHii();
// console.log(Teacher.createId());
// Teacher.logMe();
// User.logMe();//logme() method is not availaible in the User class.
// console.log(Teacher.sayMyName());

let teacherOne = new Teacher();
// teacherOne.chirag();
// teacherOne.logMe();
// console.log(teacherOne.fun1());
// teacherOne.hello();
console.log(teacherOne.sayMyName());

// Teacher.logMe();
// Teacher.sayHii();
// console.log(Teacher.createId());