class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split("");
    this.guesses = guesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  getPuzzle() {
    return this.word.map((letter) => {
      if (letter === " ") return " "
      else if (!this.guessedLetters.includes(letter)) return "*" 
      else return letter
      }).join("");
  }
  makeGuess(letter) {
    const guess = letter.toLowerCase();
    if (!this.guessedLetters.includes(guess)) {
    this.guessedLetters.push(guess);
    if (!this.word.includes(guess)) this.guesses--;
    }
  }
  getStatus(guessedWord) {
    // if guesses reach 0 and person hasn't guessed the word then they fail
    // if the visible guessed word matches the input word, status is finished
    // otherwise player is still playing 
    if (guessedWord !== this.word.join("") && this.guesses === 0) {
      this.status = "failed";
    } else if (guessedWord === this.word.join("")) {
      this.status = "finished"
    }
  }
  displayStatus() {
    if (this.status === "playing") {
      return `Guesses left: ${this.guesses}`
    } else if (this.status === "finished") {
      return `Great work! You guessed the word`
    } else {
      return `Nice try! The word was "${this.word.join("")}"`
    }
  }
}

