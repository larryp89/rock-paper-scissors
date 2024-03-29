let player_score = 0;
let computer_score = 0;

function getComputerChoice() {
  // Generate a random computer move
  let random_choice = Math.floor(Math.random() * 3) + 1;

  if (random_choice == 1) {
    return "rock";
  } else if (random_choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function compareChoice(playerSelection, computerSelection) {
  // compare player choice and computer choice
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    player_score += 1;
    return `You win - ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection == computerSelection) {
    return `You both chose ${playerSelection} - it' a tie.`;
  } else {
    computer_score += 1;
    return `You lost - computer chose ${computerSelection} and you played ${playerSelection}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Choose 'Rock', 'Paper', or 'Scissors'"
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(compareChoice(playerSelection, computerSelection));
  }
  console.log(`Final score: ${player_score}: ${computer_score}`);
}

playGame();
