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
}).catch((err) => {
  console.log(err);
})

getCountry("MX").then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(err)
})

// fetch(`https://puzzle.mead.io/puzzle`, {}).then((response) => {
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error('Unable to fetch the puzzle');
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((err) => {
//   console.log(err)
// })