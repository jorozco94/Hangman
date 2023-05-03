const puzzleEl = document.createElement('p');
const guessesEl = document.createElement('p');
const game1 = new Hangman("car part", 6);

puzzleEl.innerText = game1.getPuzzle;
guessesEl.innerText = game1.displayStatus;

document.body.append(puzzleEl);
document.body.append(guessesEl);


window.addEventListener("keypress", (e) => {
  // grab the character of the keypress
  if (game1.status !== "playing") {
    return;
  }
  const guess = e.key.toString();
  // run it through our makeGuess function
  game1.makeGuess(guess);
  // log the remaining guesses/puzzle
  const guessedPuzzle = game1.getPuzzle;
  game1.getStatus(guessedPuzzle);
  puzzleEl.innerText = guessedPuzzle
  guessesEl.innerText = game1.displayStatus;

})

// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
  console.log(e.target)
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("An error has taken place")
  }
})

request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3");
request.send();

// 1. Make a new request for all countries 
// 2. Parse the responseText to get back the array of objects
// 3. Find your country object by its country code (cca2 prop)
// 4. Print the full country name (name property)

const countryCode = "US";
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
    data.forEach((el) => {
      if (el.cca2 === "MX") {
        console.log(el.name.common)
      }
    })
  } else if (e.target.readyState === 4) {
    console.log("An error has occurred")
  }
} )

countryRequest.open("GET", "https://restcountries.com/v3.1/all");
countryRequest.send()