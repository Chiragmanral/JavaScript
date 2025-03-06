
// IMPORTANT :- Scripts are loading in a sequential manner but each script loading is a asynchronous task here.


// function loadScript(src, callback) {
//     let head = document.querySelector("head");
//     let script = document.createElement("script");

//     // asynchronous task :- loading the script in the html page dynamically
//     script.src = src;

//     // When the loading of the script is finished, it triggers the event onload and it starts executing then execute this arrow fyunction and execute this callback function
//     script.onload = () => callback(null, script);
//     // when there is an error while loading the script then the onerror event gets triggered
//     script.onerror = () => callback(new Error(`There is some error while loading the script ${src}`));
//     head.append(script);
// }

// function handleError(err) {
//     if(err instanceof SyntaxError) {
//         console.log(`SyntaxError : ${err.message}`)
//     }
//     else if(err instanceof TypeError) {
//         console.log(`TypeError : ${err.message}`)
//     }
//     else if(err instanceof ReferenceError) {
//         console.log(`ReferenceError : ${err.message}`)
//     }
//     else if(err instanceof Error)  {
//         console.log(`Error : ${err.message}`)
//     }
//     else {
//         throw err; 
//     }
// }

// // ---------------------------------------------------------------First Way----------------------------------------------------------------------


// // calling loadScript function initially
// // Loading first script initially
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js', (err, script) => {
//     if(err) {
//         handleError(err);
//     }
//     else {
//         console.log(`Loaded: ${script.src}`); 

//         // Loading second script after first script is fully loaded
//         loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', (err, script) => {
//             if(err) {
//                 handleError(err);
//             }
            
//             else {
//                 console.log(`Loaded: ${script.src}`); 

//                 // Loading third script after second script is fully loaded
//                 loadScript('https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js', (err, script) => {
//                     if(err) {
//                         handleError(err);
//                     }

//                     else {
//                         console.log(`Loaded: ${script.src}`); 

//                         // Loading fourth script after third script is fully loaded
//                         loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js', (err, script) => {
//                             if(err) {
//                                 handleError(err);
//                             }

//                             else {
//                                 console.log(`Loaded: ${script.src}`); 


//                                 //Loading fifth script after fourth script is fully loaded
//                                 loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.umd.min.js', (err, script) => {
//                                     if(err) {
//                                         handleError(err);
//                                     }
        
//                                     else {
//                                         console.log(`Loaded: ${script.src}`); 
        
//                                         console.log('All scripts loaded! Lodash, jQuery, Axios, Moment.js, and Chart.js are now available.');
                                        
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// ---------------------------------------------------------------First Way----------------------------------------------------------------------


// ---------------------------------------------------------------Second Way----------------------------------------------------------------------

function loadScript(src, callback) {
    let head = document.querySelector("head");
    let script = document.createElement("script");

    // asynchronous task :- loading the script in the html page dynamically
    script.src = src;

    // When the loading of the script is finished, it triggers the event onload and it starts executing then execute this arrow fyunction and execute this callback function
    script.onload = () => callback(null, script);
    // when there is an error while loading the script then the onerror event gets triggered
    script.onerror = () => callback(new Error(`There is some error while loading the script ${src}`));
    head.append(script);
}

function handleError(err) {
    if(err instanceof SyntaxError) {
        console.log(`SyntaxError : ${err.message}`)
    }
    else if(err instanceof TypeError) {
        console.log(`TypeError : ${err.message}`)
    }
    else if(err instanceof ReferenceError) {
        console.log(`ReferenceError : ${err.message}`)
    }
    else if(err instanceof Error)  {
        console.log(`Error : ${err.message}`)
    }
    else {
        throw err; 
    }
}

function loadLodash(callback) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js', (err, script) => {
        if (err) {
            handleError(err);
        }
        console.log(`Loaded the script:- ${script.src}`);
        callback();
    })
}

function loadjQuery(callback) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', (err, script) => {
        if (err) {
            handleError(err);
        }
        console.log(`Loaded the script:- ${script.src}`);
        callback();
    })
}

function loadAxios(callback) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js', (err, script) => {
        if (err) {
            handleError(err);
        }
        console.log(`Loaded the script:- ${script.src}`);
        callback();
    })
}

function loadMoment(callback) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js', (err, script) => {
        if (err) {
            handleError(err);
        }
        console.log(`Loaded the script:- ${script.src}`);
        callback();
    })
}

function loadChart(callback) {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.umd.min.js', (err, script) => {
        if (err) {
            handleError(err);
        }
        console.log(`Loaded the script:- ${script.src}`);
        callback();
    })
}

// Calling all the functions here

// loadLodash(loadjQuery(loadAxios(loadMoment(loadChart)))); //thst's wrong bcz loadLodash function ko callback mein sirf aur sirf loadjQuery dena hai naa ki yeah :- loadjQuery(loadAxios(loadMoment(loadChart)))

loadLodash(() => {
    console.log("First Script is loaded");
    loadjQuery(() => {
        console.log("Second Script is loaded");
        loadAxios(() => {
            console.log("Third Script is loaded");
            loadMoment(() => {
                console.log("Fourth Script is loaded");
                loadChart(() => {
                    console.log('Fifth script is also loaded');
                    console.log('All scripts are loaded');
                })
            })
        })
    })
})