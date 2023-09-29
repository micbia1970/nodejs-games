// Rock Paper Scissors
// npm i prompt-sync
const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let tries = 0;

const playerChoice = prompt("Enter rock, paper or scissors: ");

if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
  console.log("Please enter a valid playerChoice.");
}

const choices = ["rock", "paper", "scissors"];
const randIndex = Math.round(Math.random() * 2);
const computerChoice = choices[randIndex];

console.log(computerChoice);

if (computerChoice === playerChoice) {
    
}
