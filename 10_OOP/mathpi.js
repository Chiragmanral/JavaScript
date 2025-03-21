const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
// PI = 4;

// console.log(Math.PI);

const hello = {
    username : "chirag"
}

const obj = Object.create(hello); //create an object whose prototype is hello object and pass refrence of this object to obj

obj.class = "5th";
obj.section = "C";

// console.log(obj);
// console.log(obj.__proto__); // Prototype : hello
// console.log(hello.__proto__); //Prototype : null

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailaible : true,

    sayHello : function() {
        console.log("hello");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// // writable true means updation is allowed in this property, false means this property's value is constant, it's can't be changed
// Object.defineProperty(chai, 'name', {
//     writable : false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// chai.name = "Hello";
// console.log(chai);

// enumerable flag value true means this property is enumerable(iterable) we can iterate it.
// enumerable flag value false means this property is not enumerable(non-iterable) we cannot iterate it.

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function") {
        console.log(`${key} :- ${value}`);
    }
}

Object.defineProperty(chai, "price", {
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function") {
        console.log(`${key} :- ${value}`);
    }
}

Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable : false,
    configurable : false
})

for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function") {
        console.log(`${key} :- ${value}`);
    }
}