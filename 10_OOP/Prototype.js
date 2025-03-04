// let myName = "Chirag     ";

// console.log(myName.length);
// console.log(myName.trim().length);

// console.log(myName.truelength);


// let myHeroes = ["thor", "superman", "spiderman", "ironman"];

// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// let heroPower = {
//     thor : "hammer",
//     superman : "supernatural powers",
//     ironman : "ironman suit",
//     spiderman : "sling",

//     getSpiderPower : function() {
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.chirag = function() {
//     console.log(`Chirag is present in all the objects`);
// }

// Array.prototype.sayHello = (arr) => {
//     console.log(`Hello to the first element of the array :- ${arr[0]}`);
// }

// heroPower.chirag();// chirag method object ke pass toh hai
// myHeroes.chirag(); //array object ka child hai isiliye joh methods object ke pass honge voh sare array ke pass bhi honge

// myHeroes.sayHello(myHeroes); //array ke pass access hai uske prototype ker andar ke functions ka
// num.sayHello(num);

// heroPower.sayHello(); // lekin array ke prototype ke andar ke functions ka access object ke pass nhi hai kyonki parent ke methods ka access child ke pass toh hota hai lekin child ka access parent ke pass nhi hota

const User = {
    username : "Chirag",
    email : "chiragmanral@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false,
    experience : 5
}

const TASupport = {
    makeAssignment : 'JS Assignment',
    fulltime : true,
    // Issi chij ko prototypal inheritance kehte hain
    __proto__ : TeachingSupport //it means ki TA support object mein humne TeachingSupport object ko link kar diya hai
}

Teacher.__proto__ = User; //it means ki humne Teacher object mein User object ko link kar diya hai

// console.log(Teacher.email);

// console.log(TASupport.isAvailable);
// console.log(TASupport.experience);

//modern syntax
Object.setPrototypeOf(TeachingSupport, User); // it means ki TeachingSupport object ka prototype humne userr object ko set kar diya so ab TeachingSupport object ne User object ki sari properties ko inherit kar liya hai

console.log(TeachingSupport.username); 

let anotherUserName = "   chirag manral    ";

String.prototype.trueLength = function() {
    console.log(`The true length of the string is :- ${this.trim().length}`);
}

anotherUserName.trueLength();
"   hitesh   ".trueLength();

"    compro    ".trueLength();





