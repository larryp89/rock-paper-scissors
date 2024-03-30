let player_score = 0;
let computer_score = 0;

function getComputerChoice() {
  let random_choice = Math.floor(Math.random() * 3) + 1;
  if (random_choice === 1) {
    return "rock";
  } else if (random_choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function compareChoice(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    player_score += 1;
    return `You win - ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return `You both chose ${playerSelection} - it's a tie.`;
  } else {
    computer_score += 1;
    return `You lost - computer chose ${computerSelection} and you played ${playerSelection}.`;
  }
}

function playRound(buttonPress) {
  const body = document.querySelector("body");
  let computerSelection = getComputerChoice();
  let roundOutcome = compareChoice(buttonPress, computerSelection);
  const div = document.createElement("div");
  div.textContent = ` ${roundOutcome} Current score: ${player_score}:${computer_score}`;
  body.appendChild(div);
  if (player_score === 5 && computer_score < 5) {
    div.textContent = `You won. Final score ${player_score}:${computer_score} Take a bow son!`;
  } else if (computer_score === 5 && player_score < 5) {
    div.textContent = `Wipe yourself off. You deeeead. Final score ${player_score}:${computer_score}`;
  }
}

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function () {
  playRound("rock");
});
paperButton.addEventListener("click", function () {
  playRound("paper");
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors");
});
