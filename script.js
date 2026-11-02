let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("#choices button");
const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");

scoreDisplay.textContent = "Score: You 0 - Computer 0";

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function getComputerChoice() {
  const number = Math.random();

  if (number < 1 / 3) {
    return "rock";
  } else if (number < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundResult.textContent = "It's a tie! You both chose " + humanChoice + ".";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    roundResult.textContent =
      "You win! " + capitalize(humanChoice) + " beats " + computerChoice + ".";
  } else {
    computerScore++;
    roundResult.textContent =
      "You lose! " + capitalize(computerChoice) + " beats " + humanChoice + ".";
  }

  scoreDisplay.textContent =
    "Score: You " + humanScore + " - Computer " + computerScore;

  checkForWinner();
}

function checkForWinner() {
  if (humanScore === 5 || computerScore === 5) {
    winnerDisplay.textContent =
      humanScore === 5 ? "You won the game! 🎉" : "The computer won the game.";

    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});