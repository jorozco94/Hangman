const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
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
  puzzleEl.innerHTML = "";
  guessesEl.innerText = game1.displayStatus;

  game1.getPuzzle.split('').forEach((el) => {
    const letterSpan = document.createElement('span');
    letterSpan.textContent = el;
    puzzleEl.appendChild(letterSpan)
  })

}

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();