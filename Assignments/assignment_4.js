// convert this array of objects into a single combined array of objects in which all the objects have different names(it is primary key here, it has to be unique) and all objects have each and every property which is availaible to it.


let obj = [
    { "name": "Alice Johnson", "age": 28, "gender": "Female" },
    { "name": "Bob Smith", "age": 35, "gender": "Male" },
    { "name": "Charlie Brown", "age": 22, "gender": "Male" },
    { "name": "Diana Ross", "age": 30, "gender": "Female" },
    { "name": "Ethan White", "age": 40, "gender": "Male" },
    { "name": "Fiona Green", "age": 26, "gender": "Female" },
    { "name": "George Black", "age": 33, "gender": "Male" },
    { "name": "Hannah Blue", "age": 29, "gender": "Female" },
    { "name": "Ian Grey", "age": 31, "gender": "Male" },
    { "name": "Jenna Red", "age": 24, "gender": "Female" },
    { "name": "Alice Johnson", "address": "123 Maple St, New York, NY" },
    { "name": "Bob Smith", "address": "456 Oak Ave, Los Angeles, CA" },
    { "name": "Charlie Brown", "address": "789 Pine Rd, Chicago, IL" },
    { "name": "Diana Ross", "address": "321 Birch Ln, Houston, TX" },
    { "name": "Ethan White", "address": "654 Cedar Blvd, Miami, FL" },
    { "name": "Fiona Green", "address": "987 Spruce Dr, Denver, CO" },
    { "name": "George Black", "address": "159 Willow Ct, Seattle, WA" },
    { "name": "Hannah Blue", "address": "753 Elm St, Boston, MA" },
    { "name": "Ian Grey", "address": "852 Ash Pkwy, San Francisco, CA" },
    { "name": "Jenna Red", "address": "369 Palm Ave, Las Vegas, NV" },
    { "name": "Alice Johnson", "email": "alice.johnson@example.com" },
    { "name": "Bob Smith", "email": "bob.smith@example.com" },
    { "name": "Charlie Brown", "email": "charlie.brown@example.com" },
    { "name": "Diana Ross", "email": "diana.ross@example.com" },
    { "name": "Ethan White", "email": "ethan.white@example.com" },
    { "name": "Fiona Green", "email": "fiona.green@example.com" },
    { "name": "George Black", "email": "george.black@example.com" },
    { "name": "Hannah Blue", "email": "hannah.blue@example.com" },
    { "name": "Ian Grey", "email": "ian.grey@example.com" },
    { "name": "Jenna Red", "email": "jenna.red@example.com" }, 
    { "name": "Alice Johnson", "phone": "+1-555-1234" },
    { "name": "Bob Smith", "phone": "+1-555-5678" },
    { "name": "Charlie Brown", "phone": "+1-555-8765" },
    { "name": "Diana Ross", "phone": "+1-555-4321" },
    { "name": "Ethan White", "phone": "+1-555-2468" },
    { "name": "Fiona Green", "phone": "+1-555-1357" },
    { "name": "George Black", "phone": "+1-555-9876" },
    { "name": "Hannah Blue", "phone": "+1-555-6543" },
    {"name": "Ian Grey", "phone": "+1-555-3698" },
    { "name": "Jenna Red", "phone": "+1-555-7412" }

]

// By using forEach loop
// let mergedObj = [];

// obj.forEach(element => {
//     let exists = mergedObj.find(item => item.name === element.name);

//     if(exists) {
//         Object.assign(exists, element); //deep copy(pass by value)
//     }
//     else {
//         mergedObj.push(element);//element object ko mergedObj mein push karne mein yahan element object ka reference pass hua hai so baad mein jab voh modify ho rha hai toh fir coh modifixation original array (obj) mein bhi dikh rahi hai(pass by reference)
//         // mergedObj.push({ ...element }); //lekin yahan element object ko destructure karke sari properties ko 1 naye object mein insert karke usse mergerdObj mein push kar rhe hai toh isiliye obj array mein se element object baad mein modify nhi ho rha hai baad mein element object mein kiye gye changes usmein nhi dikh rhe (pass by value).
//     }
// });

// console.log(mergedObj);
// console.log(obj);

// By using reduce method
// This reduce method is generic.

// let newArr = obj.reduce((acc, currVal) => {
//     let existing = acc.find(item => item.name === currVal.name);
//     if(existing) {
//         Object.assign(existing, currVal); //yahan par existing object modify ho rha hai joh ki acc ka object hai and pass by referencve hai so uske modification acc mein bhi dekhenge bus baad mein acc ko return karna padega changes ko save karke agli iteratiion mein bhejne ke liye
//         return acc;
//     }
//     else {
//         acc.push({ ...currVal }); //currVal ki deep copy banakar acc mein push karna
//         return acc;
//     }
// },[]);

// console.log(newArr);

function mergeAllObjects(temp) {
    let newArr = temp.reduce((acc, currVal) => {
        let existing = acc.find(item => item.name === currVal.name);
        if(existing) {
            Object.assign(existing, currVal); //yahan par existing object modify ho rha hai joh ki acc ka object hai and pass by referencve hai so uske modification acc mein bhi dekhenge bus baad mein acc ko return karna padega changes ko save karke agli iteratiion mein bhejne ke liye
            return acc;
        }
        else {
            acc.push({ ...currVal }); //currVal ki deep copy banakar acc mein push karna
            return acc;
        }
    },[]);
    return newArr;
}

console.log(mergeAllObjects(obj));

