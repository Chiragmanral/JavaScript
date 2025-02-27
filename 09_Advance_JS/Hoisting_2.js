// if we re-declare same variable multiple times through var keyword then onll one time the declarationgets hoisted then only the value gets updated
// console.log(x); // undefined

// var x = 10;
// console.log(x); //10

// var x = 20;
// console.log(x); //20

// var x = 30;
// console.log(x); //30

// var x = 40;
// console.log(x); //40

// --------------------------------------------------JS upar vale code ko aise convert kar degi internally -------------------------------------

// var x; //undefined

// console.log(x); // undefined

// x = 10; // updation of variable x ki value ka only
// console.log(x); //10

// x = 20;// updation of variable x ki value ka only
// console.log(x); //20

// x = 30;// updation of variable x ki value ka only
// console.log(x); //30

// x = 40;// updation of variable x ki value ka only
// console.log(x); //40

// -----------------------------------------------JS upar vale code ko aise convert kar degi internally -------------------------------------

// Example - 2

// console.log(x); // undefined
// console.log(y); // undefined

// var x = 10;
// console.log(x, y); // 10 undefined
// var y = x * 2;
// console.log(x, y); // 10 20

// var x = 50;
// console.log(x, y); // 50 20

// --------------------------------------------------JS upar vale code ko aise convert kar degi internally -------------------------------------

// var x; //undefined
// var y; //undefined


// console.log(x); // undefined
// console.log(y); // undefined

// x = 10; // updation of variable x ki value ka only
// console.log(x, y); //10 undefined

// y = x * 2;// updation of variable y ki value ka only -> y = 10 * 2 -> 20
// console.log(x, y); //10 20

// x = 50;// updation of variable x ki value ka only
// console.log(x, y); //50 20


// -----------------------------------------------JS upar vale code ko aise convert kar degi internally -------------------------------------
