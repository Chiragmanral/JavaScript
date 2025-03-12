let inputWord = document.querySelector('#search-bar');
let searchButton = document.querySelector(".search-button");
let dataShow = document.querySelector(".data-div");

// console.log(inputWord);
// console.log(typeof inputWord)

searchButton.addEventListener('click', searchWord)

async function searchWord() {
    try {
        let word = inputWord.value.trim(); //string, trim() is used for removing leading(word ke agge ke means shuru ke) whitespaces and trailing(word ke end ke means last ke) whitespaces. 

        // If word does not exists in the dictionary
        if (!word) {
            alert("Please enter a word!"); 
            return;
        }
    
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`); //fetch() API returns a Response object, for getting the actual data we have to modify it in json format by using .json() method.
        // console.log(response);

        // If server gives a response but it's not ok.
        if (!response.ok) {
            throw new Error(`Word not found! Status: ${response.status}`);
        }

        let data = await response.json();

        // Extracting useful information from the data array.
        let wordTitle = data[0].word;
        let wordDefinition = data[0].meanings[0].definitions[0].definition;
        // let antonyms = data[0].meanings[2].antonyms;
        // let synonyms = data[0].meanings[0].synonyms[0];
        // let partOfSpeech = data[0].meanings[1].partOfSpeech;


        // let dataShow = document.createElement("div");
        dataShow.innerHTML = "";
        dataShow.innerHTML = `<h2>${wordTitle}</h2>
        <p><strong>Definition :- </strong>${wordDefinition}</p>`;
        
        dataShow.style.border = "1px solid black";
        dataShow.style.padding = "10px";
        dataShow.style.margin = "10px";
        dataShow.style.minWidth = "30vw";
        dataShow.style.width = "98vw";
        dataShow.style.color = "#212121";
        dataShow.style.background = "#ffffff";
        
        // document.querySelector('body').append(dataShow);

    }
    catch(err) {
        console.log(err);
        alert("Word not found! Please try another word.");
    }
}

// Search when we click the enter button on the search tab
inputWord.addEventListener('keypress', (ev) => {
    // console.log(ev.key ===  "Enter");
    // console.log(ev.charCode === 13);
    // console.log(ev.keyCode === 13);
    if(ev.key === "Enter") {
        searchWord();
    }
})
