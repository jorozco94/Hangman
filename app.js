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

getPuzzle('4').then((puzzle) => {
  console.log(puzzle)
}, (err) => {
  console.log(`Error: ${err}`)
})

// Create a new function for getting country details
// Call it with two arguments: country code, the callback function
// Make the HTTP req and call the callback with country info
// Use the cb to print the country name
getCountry("US").then((country) => {
  console.log(country.name.common)
}, (err) => {
  console.log(`Error: ${err}`)
})