// Variables for the APIs
var chuckAPI = "https://api.chucknorris.io/jokes/random"
var dadjokesAPI = "https://icanhazdadjoke.com/"
var darkjokesAPI = "https://v2.jokeapi.dev/joke/Dark?type=single"
var programjokesAPI = "https://v2.jokeapi.dev/joke/Programming?type=single"
var randomjokesAPI = "https://v2.jokeapi.dev/joke/Miscellaneous?type=single"

// user name input
var userName = document.querySelector(".userInput");
var welcome2El = document.querySelector("#entered-user2")

// Text Area Variable
var textareaEl = document.querySelector("#opentext")

// Side Navbar Variable
var nameInput = document.querySelector(".userInput")
var navNameEl = document.querySelector("#name")
var enterNameEl = document.querySelector("#entered-name")
var welcomeEl = document.querySelector("#entered-user")
var randomFavBtn = document.querySelector(".randomFavBtn")
var clearBtn = document.querySelector("#clearBtn")



// Button Variables
var favBtn = document.querySelector(".favoriteBtn")
var dadBtn = document.querySelector(".dadBtn")
var chuckBtn = document.querySelector(".chuckBtn")
var darkBtn = document.querySelector(".darkBtn")
var programBtn = document.querySelector(".programBtn")
var usernameBtn = document.querySelector(".usernameBtn")
var randomBtn = document.querySelector(".randomBtn")


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

// *RANDOM JOKES SECTION*
async function randomJoke() {
    const response = await fetch(randomjokesAPI, {
        headers: {
            Accept: "application/json"
        }
    })
    const data = response.json()
    return data;
}

// Function to fetch the jokes after using "accept Header"
async function getRandomJokes() {
    const { joke } = await randomJoke()
    console.log(joke);
    textareaEl.textContent = joke
}

var userList = []


// Function to add name to local storage
function addUser(event) {
    event.preventDefault()

    var user = {
        user: nameInput.value.trim()
    }

    function welcomeUser() {
        navNameEl.style.display = "none";
        enterNameEl.style.display = "block";

        welcomeEl.textContent = nameInput.value
        welcome2El.textContent = (nameInput.value + "'s  ")
        welcome2El.style.fontSize = "4.5rem";

    }



    // condition to not add user when its already existed on local storage
    if (userList.indexOf(user) !== -1) {

        console.log(user)
        return


    } else {
        userList = JSON.parse(localStorage.getItem("userlist"))
        localStorage.setItem("userlist", JSON.stringify(userList))
        console.log(user)
    }

    // add to local storage
    localStorage.setItem("user", JSON.stringify(user));

    welcomeUser()
}





// Adds the favorite jokes into Local Storage Array
var favoritesArray = JSON.parse(localStorage.getItem("joke")) || []
var favLength = favoritesArray.length;

// Function to add favorite joke to local storage
function addFavorite(event) {
    event.preventDefault()

    var jokeEl = textareaEl.textContent

    // condition to not add joke when its already existed on local storage
    if (favoritesArray.indexOf(jokeEl) !== -1) {
        return
    }

    // pushes jokeEl to array
    favoritesArray.push(jokeEl)
    localStorage.setItem("userlist", JSON.stringify(userList))
    localStorage.setItem("joke", JSON.stringify(favoritesArray))
    console.log(favoritesArray)


}



// Function to get random jokes from favorites
var randomFavJoke = function() {

    // identifies favorite joke from array based on random number from jokeNum
    var favJoke = favoritesArray[Math.floor(Math.random() * favLength)];
    console.log(favJoke);

    textareaEl.textContent = favJoke;
}

// function to clear local storage
function clearLocal() {
    localStorage.removeItem("joke")
    localStorage.removeItem("userlist")
    localStorage.removeItem("user")

    sessionStorage.removeItem("joke")
    sessionStorage.removeItem("userlist")
    sessionStorage.removeItem("user")
}






// Event Listener for the buttons
favBtn.addEventListener("click", addFavorite)
chuckBtn.addEventListener("click", getChuckJokes)
dadBtn.addEventListener("click", getDadJokes)
darkBtn.addEventListener("click", getGeekJokes)
programBtn.addEventListener("click", getProgramJokes)
usernameBtn.addEventListener("click", addUser)
randomBtn.addEventListener("click", getRandomJokes)
randomFavBtn.addEventListener("click", randomFavJoke)
clearBtn.addEventListener("click", clearLocal)






// SIDE NAV BAR 
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("main").style.marginLeft = "500px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


// HELLO ITS ME