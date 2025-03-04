// function setUserName(username) {
//     // this = {} by default
//     // lekin jab call method ke through hum kisi aur function ka execution context yaa fir this object isse pass karenge then iss function ke pass uss function ka this object aajayega and yeah ussi this object par kaam karega naa ki apne empty this object par

//     this.username = username; // call method ka use karke ab yeah vali line username property add karegi createUser function ke this object mein
//     // balki pehle yeah line yeah property add kar rhi thi setUserName functuon ke apne this object mein joh ki empty tha
//     console.log("called through another function");
// }

// function createUser(username, email, password) {
//     // setUserName(username); // yahan par hum setUserName function ko regular mode mein use kar rhe hai toh isiliye vohn implicitly kuch bhi return nhi karega, yahan par setusername function call toh hoga lekin uske pass createUserName function ka current execution context means this object nhi jayega and voh joh bhi properties and methods add kaerega voh sare apne this ke andar hi karega and voh this object return nhi hoga ansd fir voh sara kaam joh bhi setUsername function ke andar hoga voh 1 tarah se kho jayega
//     // isiliye humein call method ka use karke createUserName function ka this object current execution context usse dena padega jismein voh chijen edit karein aur humare pass voh sare edits this object ke andar pade ho and hum unhein use kar payein

//     // const user = new setUserName(username); // yahan par setUsername function ko constructor mopde mein use kiya jaa rha hai so it means ki yahan user ke andar setUsername function ka this object return ho jayega implicitly 
//     // And kisi bhi function ek andar ke this object ka naam uss function name se jana jata hai
//     // createUser function ka this object is :- createUser {} 
//     // setUserName ka this object is :- setUsername {}

//     setUserName.call(this, username); //yahan par hum setUsername function ko regular mode mein use kar rhwe hai lekin call method ka use karke usse createUser function ka apna this object(current execution context) de rhe hai jisse ki setUsername function ke andar this object mein joh bhi propertires and methods add honge voh iss this object mein honge and yeah this object pass by reference hota hai(bcz object hamesha pass by reference hi hote hai js mein) so sare changes save ho jayenge createUser ke this object mein and baad mein humein mil jayenge and hum unhein use kar payenge createUser function ke this object ke through kyonki sare changes ho hi createUser function ke this object ke andar rhe hain
//     this.email = email;
//     this.password = password;
// }

// const hello = new createUser("chirag", 'chirag@fb.com', 123); // createUser funtion use ho rha hai constructor mode mein
// console.log(hello);

// ======================================================Important=================================================================

// ki si bhi function ko constructor mode mein use karne ke liye uss function ke andar apna this object hona chahiye jisse ki voh baad mein uss this object ko implicitly return kar paye and jahan humne new operator ka use karke new empty object banay tha usse apna vala this object return kar paye 
// Function declaration and funcvtion expressioons ke pas toh aspne this object hote hai toh siiliye voh toh function constructor ki tyrah beghave kar skte ahi 
// lekin arrow functiion ke pass apna this objecrt nhi hota toh isiliye voh function constructor ki tarah behave nhi kar skta 
// hum new operatior ka use karke kisi arrow function ka new instance bhi nhi bana skte
// Arrow function ke andar agar hum this object use krte hai toh fir voh apne closest surronding lexical scope ka this object use kar leta hai 
// so agar hum arrow function ko kisi object ka method banaye toh uska this operator joh hai voh current object ko hi point klatwega 

// yeah function declaration hai toh iske pass this object hoga toh isilye isse hum as a function constructor use kar skte hai
function func1(name) {
    this.name = name;
}

// yeah function expression hai toh iske pass this object hoga toh isilye isse hum as a function constructor use kar skte hai
const func2 = function(name) {
    this.name = name;
}

// yeah arrow function hai iske pass this object nhi hota toh isilye isse hum as a function constructor nhi use kar skte hai
const func3 = (name) => { 
    this.name = name;
}

// const obj1 = new func1("Chirag"); 
// console.log(obj1); // func1 : {name : "Chirag"}

// const obj2 = new func2("Manral");
// console.log(obj2); //func2 : {name : "Manral"}

// const obj3 = new func3("Hello"); // Arrow function can't be a constructor function
// console.log(obj3);
