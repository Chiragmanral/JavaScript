const myObj = {
    JS : "javascript",
    "C++" : "cpp",
    C : "C language",
    python : 'Python',
    Swift : "Swift by Apple"
}

for (const key in myObj) {
    // console.log(key); //gives all te keys of the object
    // console.log(myObj[key]); //gives all the corresponding values of keys in the object

    console.log(`Key is :- ${key} and value is :- ${myObj[key]}`);
}

