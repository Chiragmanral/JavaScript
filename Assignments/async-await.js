
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

async function loadAllScripts() {
    try {
        let loadLodash = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js'); //loading the script is asynchronous task that's why we use await before it, which means wait for sometime for this task to be completed jab tak yeah task complete nhi ho jata next rask par mat jao
        // tabhi sari scripts joh hai ek-ek karke load ho rhi hai sequentially jab tak pehli vali load nhi ho jati agli vali ko load nhi karenge agar pehli vali script ki loading mein hi error aa gya toh next script ko load nhi karenge
        // console.log(loadLodash); //<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
        console.log(`Script:- ${loadLodash.src} is fully loaded`);

        let loadjQuery = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        // console.log(loadjQuery); //<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        console.log(`Script:- ${loadjQuery.src} is fully loaded`);

        let loadAxios = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js');
        // console.log(loadAxios); // <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js"></script>
        console.log(`Script:- ${loadAxios.src} is fully loaded`);

        let loadMoment = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js');
        // console.log(loadMoment); //<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        console.log(`Script:- ${loadMoment.src} is fully loaded`);

        let loadChart = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.umd.min.js');
        // console.log(loadChart); //<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.3.0/chart.umd.min.js"></script>
        console.log(`Script:- ${loadChart.src} is fully loaded`);

        console.log('All scripts loaded successfully!');
    }
    catch(err) {
        console.log(err.message);
    }
    finally {
        console.log("Script loading process completed (successful or failed).");
    }
}

loadAllScripts();