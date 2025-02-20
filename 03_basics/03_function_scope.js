// It means ki parent function ke variables ka access child functions ke pass toh hota ahi ,lekin child functions ke variables ka access parent functions ke pass nhi hota
// function one() {
//     let username = "chirag"; //iska access iske child function(two()) ke pass toh hai,lekin two() function ke variables ka access iske pass nhi hai

//     console.log(username); // chirag
//     function two() {
//         username = "manral"; //updating the parent variable username in the child function
//         console.log(username); // manral;
//     }
//     console.log(username); //chirag;
//     two();
//     console.log(username); // manral
// }

// one();

// function one() {
//     let username = "chirag"; //iska access iske child function(two()) ke pass toh hai,lekin two() function ke variables ka access iske pass nhi hai

//     console.log(username); // chirag
//     function two() {
//         let username = "chirag"; //local variable with functional scope(two)
//         username = "manral"; //updating the child variable username in the child function
//         console.log(username); // manral;
//     }
//     console.log(username); //chirag;
//     two();
//     console.log(username); // chirag
// }

// one();

// function one() {
//     let username = "chirag"; //iska access iske child function(two()) ke pass toh hai,lekin two() function ke variables ka access iske pass nhi hai

//     console.log(username); // chirag(function one ka variable)
//     function two() {
//         const website = "youtube"; //local variable with functional scope of function two
//         console.log(username); // chirag function one ka variable
//     }
//     console.log(username); //chirag; function one ka variable
//     two();
//     // console.log(website); // website variable ko hum function two ke bahar access nhi kar skte kyonki uska scope sirf function two ke andar tak hi hai
//     console.log(username); //chirag function one ka variable
// }

// one();

// if(true) {
//     const username = "chirag"; //iska scope sirf is vale block meimn hai iske bahar(globally) nhi hai,iska scope andar vale if block mein jaroor hai
//     if(username === "chirag") {
//         const website = " youtube"; //iska scope sirf iss andar vale block mein hi hai iske bahar vale block mein yaa fir globally iska scope nhi hai
//         console.log(username + website);
//     }
//     // console.log(website); //iska scope sirf andar vale if block mein hai uske bahar kahin nhi hai
// }

// console.log(username); //iska scope sirf bhar vale if block mein hi hai uske bahar nhi hai
// console.log(website);



// --------------------------------------------------------interesting------------------------------------------------------------------------

