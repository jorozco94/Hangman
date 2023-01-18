const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;
}

const game1 = new Hangman("bean", 6);
const game2 = new Hangman("peanut", 10);

console.log(game2);