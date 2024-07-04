let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        return "You win!";
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        return "Team Rocket wins!";
    }
}

function checkGameOver() {
    if (playerScore === maxScore) {
        resultDiv.textContent = "You defeated Team Rocket!";
        disableButtons();
    } else if (computerScore === maxScore) {
        resultDiv.textContent = "Team Rocket has won the battle!";
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function handleClick(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = `You chose ${playerSelection}. Team Rocket chose ${computerSelection}. ${result}`;
    checkGameOver();
}

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));