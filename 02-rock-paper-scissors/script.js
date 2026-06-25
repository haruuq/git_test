console.log("Welcome to a game of Rock, Paper, Scissors!");

let humanScore = 0;
let computerScore = 0;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getComputerChoice = () => getRandomNumber(1,3);

for (let i = 0; i < 5; i++) {

    const humanChoice = prompt("Rock, Paper, or Scissors?");

    console.log(`You chose: ${humanChoice}`);

const computerChoice = getComputerChoice();

let computerPick;

 if (computerChoice  === 1) {
    console.log("Computer chooses: Rock");
    computerPick = "Rock";
 } else if (computerChoice === 2) {
    console.log("Computer chooses: Paper");
    computerPick = "Paper";
 } else  {
    console.log("Computer chooses: Scissors");
    computerPick = "Scissors";
 }

if (humanChoice === computerPick) {
    console.log("It's a tie!");
} else if (
    (humanChoice === "Rock" && computerPick === "Scissors") ||
    (humanChoice === "Paper" && computerPick === "Rock") ||
    (humanChoice === "Scissors" && computerPick === "Paper")
) {
    console.log("Player wins this round.");
    humanScore++;
} else {
    console.log("Computer wins this round.");
    computerScore++;
}
console.log("______________")
console.log("Current Score:");
console.log(`Player: ${humanScore}`)
console.log(`Computer: ${computerScore}`)
console.log("______________")

}

if (humanScore > computerScore) {
    console.log(`Player scored ${humanScore}, while Computer scored ${computerScore}, player wins!`)
} else if (computerScore > humanScore) {
     console.log(`Computer scored ${computerScore}, while Player scored ${humanScore}, Computer wins!`)
} else {
    console.log("It's a tie!")
}