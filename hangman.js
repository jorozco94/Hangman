const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split("");
  this.guesses = guesses;
  this.guessedLetters = ["b", "l"];
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

const game1 = new Hangman("bean", 6);
const game2 = new Hangman("peanut b", 10);

console.log(game1.getPuzzle());