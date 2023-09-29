// Rnadom Number Guesser
// npm i prompt-sync
const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);
console.log(target);

let guesses = 0;

while (true) {
  guesses++;
  const guess = Number(prompt("Guess the number (0 -100) "));
  if (guess > target) {
    console.log("Your guess is to high.");
  } else if (guess < target) {
    console.log("Your guess is to low.");
  } else {
    console.log("You guessed it!");
    break;
  }
}

console.log("You guessed the number in", guesses, "tries!");
