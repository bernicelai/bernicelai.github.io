// Function to get computer choice randomly
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine winner function
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return "You used the secret cheat code! You win!";
  }

  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer wins! Paper covers Rock.";
    } else {
      return "You win! Rock smashes Scissors.";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer wins! Scissors cut Paper.";
    } else {
      return "You win! Paper covers Rock.";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer wins! Rock smashes Scissors.";
    } else {
      return "You win! Scissors cut Paper.";
    }
  }

  return "Invalid user choice.";
}

// Main playGame function called by button clicks
function playGame(userChoice) {
  const computerChoice = getComputerChoice();

  // Show choices
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    You chose: <strong>${userChoice}</strong><br>
    Computer chose: <strong>${computerChoice}</strong><br><br>
    ${determineWinner(userChoice, computerChoice)}
  `;
}
