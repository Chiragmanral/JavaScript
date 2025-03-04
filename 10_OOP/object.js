function multiplyByFive(num) {
    return num * 5;
}

multiplyByFive.power = 2; // used as a object bcz js mein sab kuch hi 1 object hai sare primitive datatype(number, string, boolean)datatype bhi(array, function,etc

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype); // {} -> empty object

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Price of the tea is :- ${this.score}`);
}

const chai = new createUser("chai", 25); //yahan par new operator hi yeah bta rha hai ki createUser function ke prototype mein 2 new functions add kiye hai aur unhein ab hum directly bhi use kar skte hai
const tea = new createUser("tea", 250);

chai.printMe();
tea.printMe();


