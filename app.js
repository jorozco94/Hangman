const puzzleEl = document.createElement('p');
const guessesEl = document.createElement('p');
let game1;

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
  render();

})

const render = () => {
  puzzleEl.innerText = game1.getPuzzle;
  guessesEl.innerText = game1.displayStatus;
  document.body.append(puzzleEl);
  document.body.append(guessesEl);
}

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();