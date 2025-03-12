// Convert this object of array of objects into a combined single array of objects in which there are 10 objects and each objects carry 6 properties named as :- name, age, gender, address,email and phone.

let obj = {
    "users": [
      { "name": "Alice Johnson", "age": 28, "gender": "Female" },
      { "name": "Bob Smith", "age": 35, "gender": "Male" },
      { "name": "Charlie Brown", "age": 22, "gender": "Male" },
      { "name": "Diana Ross", "age": 30, "gender": "Female" },
      { "name": "Ethan White", "age": 40, "gender": "Male" },
      { "name": "Fiona Green", "age": 26, "gender": "Female" },
      { "name": "George Black", "age": 33, "gender": "Male" },
      { "name": "Hannah Blue", "age": 29, "gender": "Female" },
      { "name": "Ian Grey", "age": 31, "gender": "Male" },
      { "name": "Jenna Red", "age": 24, "gender": "Female" }
    ],
    "addresses": [
      { "name": "Alice Johnson", "address": "123 Maple St, New York, NY" },
      { "name": "Bob Smith", "address": "456 Oak Ave, Los Angeles, CA" },
      { "name": "Charlie Brown", "address": "789 Pine Rd, Chicago, IL" },
      { "name": "Diana Ross", "address": "321 Birch Ln, Houston, TX" },
      { "name": "Ethan White", "address": "654 Cedar Blvd, Miami, FL" },
      { "name": "Fiona Green", "address": "987 Spruce Dr, Denver, CO" },
      { "name": "George Black", "address": "159 Willow Ct, Seattle, WA" },
      { "name": "Hannah Blue", "address": "753 Elm St, Boston, MA" },
      { "name": "Ian Grey", "address": "852 Ash Pkwy, San Francisco, CA" },
      { "name": "Jenna Red", "address": "369 Palm Ave, Las Vegas, NV" }
    ],
    "emails": [
      { "name": "Alice Johnson", "email": "alice.johnson@example.com" },
      { "name": "Bob Smith", "email": "bob.smith@example.com" },
      { "name": "Charlie Brown", "email": "charlie.brown@example.com" },
      { "name": "Diana Ross", "email": "diana.ross@example.com" },
      { "name": "Ethan White", "email": "ethan.white@example.com" },
      { "name": "Fiona Green", "email": "fiona.green@example.com" },
      { "name": "George Black", "email": "george.black@example.com" },
      { "name": "Hannah Blue", "email": "hannah.blue@example.com" },
      { "name": "Ian Grey", "email": "ian.grey@example.com" },
      { "name": "Jenna Red", "email": "jenna.red@example.com", "password" : "12345" }
    ],
    "phoneNumbers": [
      { "name": "Alice Johnson", "phone": "+1-555-1234" },
      { "name": "Bob Smith", "phone": "+1-555-5678" },
      { "name": "Charlie Brown", "phone": "+1-555-8765" },
      { "name": "Diana Ross", "phone": "+1-555-4321" },
      { "name": "Ethan White", "phone": "+1-555-2468" },
      { "name": "Fiona Green", "phone": "+1-555-1357" },
      { "name": "George Black", "phone": "+1-555-9876" },
      { "name": "Hannah Blue", "phone": "+1-555-6543" },
      { "name": "Ian Grey", "phone": "+1-555-3698" },
      { "name": "Jenna Red", "phone": "+1-555-7412", "hii" : "chirag" }
    ],
    "sports" : [
        { "name": "Alice Johnson", "phone": "9999", "cricket" : "boys played well" },
        { "name": "Alice Johnson", "phone": "9865", "cricket" : "mashallah" },
    ]
  }

// By using forEach loop

// let mainArr = [];
// obj.users.forEach((element) => {
//     let resultantObj = {};
//     resultantObj.name = element.name;
//     resultantObj.age = element.age;
//     resultantObj.gender = element.gender;
//     resultantObj.address = obj.addresses.find(address => element.name === address.name).address;
//     resultantObj.email = obj.emails.find(email => element.name === email.name).email;
//     resultantObj.phone = obj.phoneNumbers.find(phoneNum => element.name === phoneNum.name).phone;

//     mainArr.push(resultantObj);
// })
  
// // console.log(mainArr);

// // By using map method

// let newArr = obj.users.map((element) => {
//     element.address = obj.addresses.find(address => element.name === address.name).address;
//     element.email = obj.emails.find(email => element.name === email.name).email;
//     element.phone = obj.phoneNumbers.find(phoneNum => element.name === phoneNum.name).phone;

//     return element;
// })

// // console.log(newArr);

// // By using reduce method
// // This reduce method is specific to this format only, it's not generic

// let newArr1 = obj.users.reduce((acc, currVal,index) => {
//     let combinedObj =  {
//         name : currVal.name,
//         age : currVal.age,
//         gender : currVal.gender,
//         address : obj.addresses.find(address => currVal.name === address.name).address,
//         email : obj.emails.find(email => currVal.name === email.name).email,
//         phone : obj.phoneNumbers.find(phoneNum => currVal.name === phoneNum.name).phone
//     }
//     acc.push(combinedObj);
//     return acc;
// },[]);

// console.log(newArr1);

// Generic Function for doing this
let newArr2 =[];

function mergeAllObjects(temp) {
    let allArrays = Object.values(temp); // Array of array of objects([[{ "name": "Alice Johnson", "age": 28, "gender": "Female" }], [{ "name": "Alice Johnson", "address": "123 Maple St, New York, NY" }], [{ "name": "Alice Johnson", "email": "alice.johnson@example.com" }], [{ "name": "Alice Johnson", "phone": "+1-555-1234" }]])

    allArrays.forEach(arr => {
        arr.forEach((element) => {
            let exists = newArr2.find(item => item.name === element.name);

            if(exists) {
                Object.assign(exists, element); //it adds all the different properties of element object in exists object and if they have same properties then element object's property value overwrites exists object property value
            }
            else {
                newArr2.push({ ...element });
            }
        })
    })
}

mergeAllObjects(obj);
console.log(newArr2);

