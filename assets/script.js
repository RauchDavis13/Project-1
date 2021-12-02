var btn = document.querySelector(".randomBtn");




var chuckAPI = "https://api.chucknorris.io/jokes/random"
var textareaEl = document.querySelector("#opentext")
var getRepoJokes = function(value) {
    fetch(chuckAPI).then(function(response) {
        response.json().then(function(value) {
            console.log(value.value);
            textareaEl.textContent = value.value;
        })
    })
}


btn.addEventListener("click", getRepoJokes);