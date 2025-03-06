
// IMPORTANT :- Scripts are loading in a sequential manner but each script loading is a asynchronous task here.

function loadScript(src) {
    return new Promise((resolve, reject) => {
        let head = document.querySelector('head');
        let script = document.createElement('script');
        
        // asynchronous task :- loading the script in the html page dynamically
        script.src = src;

        //When the loading of the script is finished, it triggers the event onload and inform us that the script is loaded successfully
        script.onload = resolve(script); //it means ki script fully load ho gyi
        script.onerror = reject(new Error(`Script :- ${script.src} is not fully loaded successfully`)); //it means ki loading ke time koi error aa gya
        head.append(script);
        // head.appendChild(script);
    })
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

// Scripts are loading in a sequential manner but each script loading is a asynchronous task here.
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js')
.then(script => {
    console.log(`Script is loaded successfully :- ${script.src}`);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
})
.then(script => {
    console.log(`Script is loaded successfully :- ${script.src}`);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js')
})
.then(script => {
    console.log(`Script is loaded successfully :- ${script.src}`);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js')
})
.then(script => {
    console.log(`Script is loaded successfully :- ${script.src}`);
    return loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.umd.min.js')
})
.then(script => {
    console.log(`Script is loaded successfully :- ${script.src}`)
    console.log("All scripts are loaded successsfully")
})
.catch(err => 
    console.log(err.message)
)
.finally(
    console.log("Script loading process completed (successful or failed).")
)