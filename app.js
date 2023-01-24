const puzzleEl = document.createElement('p');
const guessesEl = document.createElement('p');
const game1 = new Hangman("bean", 6);

puzzleEl.innerText = game1.getPuzzle();
guessesEl.innerText = game1.guesses;

document.body.append(puzzleEl);
document.body.append(guessesEl);


window.addEventListener("keypress", (e) => {
  // grab the character of the keypress
  const guess = e.key.toString();
  // run it through our makeGuess function
  game1.makeGuess(guess);
  // log the remaining guesses/puzzle
  const guessedPuzzle = game1.getPuzzle();
  puzzleEl.innerText = guessedPuzzle
  guessesEl.innerText = game1.guesses;
  game1.getStatus(guessedPuzzle);
  console.log(game1.status)
})