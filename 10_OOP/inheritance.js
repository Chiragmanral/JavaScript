class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is :- ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // this is equivalent to :- User.call(this, username) if user is a function not a class, derived class ke constructor mein sabse pehle super method ko use karna must hai
        // super method parent class ke constructor ko call karta hai and usse apne parameters and current exceution context deta hai means Teacher class ka this object deta hai ki joh bhi kaam karna hai iss this object par karo naa ki apne User class ke this object par

        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by :- ${this.username}`);
    }
} 

const teacher1 = new Teacher("Chirag", "chirag@google.com", "12345");

// console.log(teacher1.username); //"Chirag"
// console.log(teacher1.email); // "chirag@google.com"
// console.log(teacher1.password); // "12345"
// teacher1.addCourse();
// teacher1.logMe();

const userOne = new User("Chirag");
// console.log(userOne.username); // "Chirag"
// // console.log(userOne.email); //Not ACCESSIBLE
// // console.log(userOne.password);//Not ACCESSIBLE
// // userOne.addCourse(); //Not ACCESSIBLE
// userOne.logMe(); //accessible

// Child class ka instance child class ke sath sath uske sare parents and grandparents ka bhi instance hota hai
// lekin parent class ka instance sirf uss ke parent and grandparents ak instance hoga uske child class ka instance nhi hoga
// it means ki teacher ka instance teacher ka bhi hai and user ka bhi lekin user ka instance sirf aur sirf user class ka hi hai teacher class ka nhi hai
// console.log(teacher1 instanceof Teacher); //true
// console.log(teacher1 instanceof User); //true

console.log(userOne instanceof User); //true
console.log(userOne instanceof Teacher); //false