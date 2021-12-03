// Variables for the APIs
var chuckAPI = "https://api.chucknorris.io/jokes/random"
var dadjokesAPI = "https://icanhazdadjoke.com/"
var darkjokesAPI = "https://v2.jokeapi.dev/joke/Dark?type=single"
var programjokesAPI = "https://v2.jokeapi.dev/joke/Programming?type=single"

// Text Area Variable
var textareaEl = document.querySelector("#opentext")
var jokeEl = textareaEl.textContent

// Button Variables
var favBtn = document.querySelector(".favoriteBtn")
var dadBtn = document.querySelector(".dadBtn")
var chuckBtn = document.querySelector(".chuckBtn")
var darkBtn = document.querySelector(".darkBtn")
var programBtn = document.querySelector(".programBtn")


// *CHUCK NORRIS SECTION*
// Function to fetch and show response to textbox
var getChuckJokes = function(data) {
    fetch(chuckAPI).then(function(response) {
        response.json().then(function(value) {
            console.log(value.value)
            textareaEl.textContent = value.value
        })
    })
}

// *END OF CHUCK NORRIS SECTION*

// *DAD JOKES SECTION*
// Function to use "Accept Header" since its required on the API
async function fetchJoke() {
    const response = await fetch(dadjokesAPI, {
        headers: {
            Accept: "application/json"
        }
    })
    const data = response.json()
    return data;
}

// Function to fetch the jokes after using "accept Header"
async function getDadJokes() {
    const { joke } = await fetchJoke()
    console.log(joke);
    textareaEl.textContent = joke
}

// *END OF DAD JOKES SECTION*


// *DARK JOKES SECTION*
async function darkJoke() {
    const response = await fetch(darkjokesAPI, {
        headers: {
            Accept: "application/json"
        }
    })
    const data = response.json()
    return data;
}

// Function to fetch the jokes after using "accept Header"
async function getGeekJokes() {
    const { joke } = await darkJoke()
    console.log(joke);
    textareaEl.textContent = joke
}

// *END OF DARK JOKES SECTION*

// *PROGRAMMING JOKES SECTION*
async function programJoke() {
    const response = await fetch(programjokesAPI, {
        headers: {
            Accept: "application/json"
        }
    })
    const data = response.json()
    return data;
}

// Function to fetch the jokes after using "accept Header"
async function getProgramJokes() {
    const { joke } = await programJoke()
    console.log(joke);
    textareaEl.textContent = joke
}


// Function to add favorite joke to local storage
function addFavorite(event) {
    console.log(jokeEl)

    localStorage.setItem()
}




// Event Listener for the buttons
favBtn.addEventListener("click", addFavorite)
chuckBtn.addEventListener("click", getChuckJokes)
dadBtn.addEventListener("click", getDadJokes)
darkBtn.addEventListener("click", getGeekJokes)
programBtn.addEventListener("click", getProgramJokes)