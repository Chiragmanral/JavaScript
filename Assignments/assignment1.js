// map, filter, forEach, sort, find, indexOf, secondIndex, lastIndex, AllIndexes, some, every -> reduce -> 1.5hours
// in map gender female ka 'f' and male ka 'm' -> done
// sort on the basis of age -> done
// indexOf, secondIndex, lastIndex, AllIndexes based on variable age -> done
// some and every on the basis of gender male -> done
// reduce ke through group by on the basis of gender -> done
// filter karo sare genders male and then uspe some and every lagao on the basis of gender male and female both -> done

let arr =  [
    { "name": "Alice Johnson", "age": 28, "gender": "Female" },
    { "name": "Bob Smith", "age": 35, "gender": "Male" },
    { "name": "Charlie Brown", "age": 28, "gender": "Male" },
    { "name": "Diana Ross", "age": 30, "gender": "Female" },
    { "name": "Ethan White", "age": 40, "gender": "Male" },
    { "name": "Fiona Green", "age": 28, "gender": "Female" },
    { "name": "George Black", "age": 28, "gender": "Male" },
    { "name": "Hannah Blue", "age": 28, "gender": "Female" },
    { "name": "Ian Grey", "age": 31, "gender": "Male" },
    { "name": "Jenna Red", "age": 28, "gender": "Female" }
  ];


//   console.log(arr.length);

// map by using reduce
// let newArr = arr.reduce((acc, currVal) => {
//     if(currVal.gender === "Female") {
//         currVal.gender = "F";
//         acc.push(currVal);
//     }
//     else {
//         currVal.gender = "M";
//         acc.push(currVal);
//     }
//     return acc;
// },[]);

// console.log(newArr);

// sort on teh basis of age
// function compare(a , b) {
//     if(a.age < b.age) return -1;
//     else if (a.age === b.age) return 0;
//     else return 1;
// }

// let newArr1 = arr.sort(compare); //Pass by reference

// console.log(arr);
// console.log(newArr1);

// indexOf, secondIndex, lastIndex, AllIndexes based on variable age


// indexOf means firstIndex on the basis of age
// let age1 = 28;

// let firstIndex = arr.reduce((acc, currVal, index) => {
//     if(acc === -1 && currVal.age === age1) {
//         acc = index;
//         return acc;
//     }
//     else {
//         return acc;
//     }
// },-1);

// console.log(firstIndex);

// All Indexes on the basis of age

// let age1 = 28;

// let newArr2 = arr.reduce((acc, currVal, index) => {
//     if(currVal.age === age1) {
//         acc.push(index);
//     }
//     return acc;
// },[]);

// let AllIndexes = newArr2.length === 0 ? -1 : newArr2;

// console.log(AllIndexes);

// secondIndex on the basis of age

// let age1 = 28;

// let newArr3 = arr.reduce((acc, currVal, index) => {
//     if(currVal.age === age1) {
//         acc.push(index);
//     }
//     return acc;
// },[]);

// let secondIndex = newArr3.length >= 2 ? newArr3[1] : -1;

// console.log(secondIndex);

// lastIndexOf on the basis of age by reduce

// let age1 = 28;

// let newArr4 = arr.reduce((acc, currVal, index) => {
//     if(currVal.age === age1) {
//         acc.push(index);
//     }
//     return acc;
// },[]); 

// let lastIndex = newArr4.length > 0 ? newArr4[newArr4.length - 1] : -1; 

// console.log(lastIndex);

// lastIndexOf on the basis of age by reduceRight

// let age1 = 28;

// let lastIndex1 = arr.reduceRight((acc, currVal, index) => {
//     if(acc === -1 && currVal.age === age1) {
//         acc = index;
//         return acc;
//     }
//     else {
//         return acc;
//     }
// },-1);

// console.log(lastIndex1);

// some and every on the basis of gender male

// let anyMale = arr.some((element) => element.gender === "Male");

// console.log(anyMale); //true bcz atleast 1 male toh hai balki usse jyada hi hai

// let allMale = arr.every((element) => element.gender === "Male");

// console.log(allMale); // false bcz sare males nhi hain

// reduce ke through group by on the basis of gender

// let allFemales1 =[];
// let allMales = arr.reduce((acc, currVal) => {
//     if(currVal.gender === "Male") acc.push(currVal);
//     else allFemales1.push(currVal);
//     return acc;
// },[]);

// console.log(allMales);
// console.log(allFemales1);

// let allFemales = arr.reduce((acc, currVal) => {
//     if(currVal.gender === "Female") acc.push(currVal);
//     return acc;
// },[]);

// console.log(allFemales);

// filter karo sare genders male and then uspe some and every lagao on the basis of gender male and female both

console.log(arr.filter((element) => element.gender === "Male").some((element) => element.gender === "Male")); //true bcz atleast 1 male hoan chahiye balki sare male hain
console.log(arr.filter((element) => element.gender === "Male").every((element) => element.gender === "Male")); // true bcz sab male hone chahiye aur are male hain

console.log(arr.filter((element) => element.gender === "Male").every((element) => element.gender === "Female")); // false sare male hain naa ki female
console.log(arr.filter((element) => element.gender === "Male").every((element) => element.gender === "Female")); // false ek bhi female nhi hai sare male hain

