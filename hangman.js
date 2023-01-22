// Create a method for making a guess
// Accept a char for guessing
// Add unique guesses to list of guesses
// Decrement guesses left if a unique guess isn't a match

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.guessedLetters = [];
}

Hangman.prototype.getPuzzle = function() {
  return this.word.map((letter) => {
    if (letter === " ") return " "
    else if (!this.guessedLetters.includes(letter)) return "*" 
    else return letter
  }).join("");
  console.log(this.word)
  return this.word.join("")
}

Hangman.prototype.makeGuess = function(letter) {
  const guess = letter.toLowerCase();
  if (!this.guessedLetters.contains(guess)) this.guessedLetters.push(guess);
  // below - have to check that the guess we're checking is unique AND is a bad guess
  if (!this.word.contains(guess)) this.guesses--;
}

const game1 = new Hangman("bean", 6);
const game2 = new Hangman("peanut b", 10);

console.log(game1.getPuzzle());