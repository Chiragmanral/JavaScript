let user = {
    name: "John",
    years: 30
};

let {name, years : age, isAdmin : isAdmin = false} = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Chirag" : 300,
    "Prashant" : 2000
};

function topSalary(salaries) {
    if(salaries == {}) return null;

    let maxSalary = 0;
    for(let [key, value] of Object.entries(salaries)) {
        if(value >= maxSalary) {
            maxSalary = value;
            maxIncomePerson = key;
        }
    }
    return maxIncomePerson;
}

console.log(topSalary(salaries));

const userdata = {
    firstName : "chirag",
    middleName : "singh",
    lastName : "manral",
    password : "12345",
    email : "chirag@gmail.com"
}

let {firstName : first = "Hello", password : pass, middleName, ...rest} = userdata;

console.log(first); //"Hello"
console.log(middleName); //"singh"
console.log(pass); // "12345"
console.log(rest); // { lastName: 'manral', email: 'chirag@gmail.com' }

const arr = [1, 2, 3, 4, 5, 6, 7];

let [a, b, , d, ...temp] = arr;

console.log(a); //1
console.log(b); //2
console.log(d); //4
console.log(temp); // [5, 6, 7]

let [x, ...y] = arr;

console.log(x); //1
console.log(y); //[2, 3, 4, 5, 6, 7]