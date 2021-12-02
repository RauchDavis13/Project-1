var chuckAPI = "https://api.chucknorris.io/jokes/random"
var textareaEl = document.querySelector("#opentext")

var getRepoJokes = function(data) {
    fetch(chuckAPI).then(function(response) {
        response.json().then(function(value) {
            displayRepos(data, value)
        })

    })
}

getRepoJokes()

var displayRepos = function(value, searchTerm) {
    console.log(value);
    console.log(searchTerm);
};

var displayIssues = function(issues) {
    for (var i = 0; i < issues.length; i++) {
        // create a link element to take users to the issue on github
        textareaEl.textContent = ""
        issueEl.classList = "list-item flex-row justify-space-between align-center";
        issueEl.setAttribute("href", issues[i].html_url);
        issueEl.setAttribute("target", "_blank");
    }
};