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

function getHumanChoice() {
  return prompt("Rock, paper, or scissors?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie! You both chose " + humanChoice + ".");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log("You win! " + capitalize(humanChoice) + " beats " + computerChoice + ".");
    } else {
      computerScore++;
      console.log("You lose! " + capitalize(computerChoice) + " beats " + humanChoice + ".");
    }

    console.log("Score: You " + humanScore + " - Computer " + computerScore);
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("You won the game! Final score: " + humanScore + " to " + computerScore);
  } else if (computerScore > humanScore) {
    console.log("You lost the game! Final score: " + humanScore + " to " + computerScore);
  } else {
    console.log("The game is a tie! Final score: " + humanScore + " to " + computerScore);
  }
}

playGame();