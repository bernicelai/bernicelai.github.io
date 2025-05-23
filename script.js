// Function to get computer's random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  // Function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === "bomb") {
      return "You used the secret cheat code 💣 and win!";
    }
  
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (userChoice === "rock") {
      return computerChoice === "paper" ? "Computer wins!" : "You win!";
    }
  
    if (userChoice === "paper") {
      return computerChoice === "scissors" ? "Computer wins!" : "You win!";
    }
  
    if (userChoice === "scissors") {
      return computerChoice === "rock" ? "Computer wins!" : "You win!";
    }
  }
  
  // Main game function triggered by button click
  function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
  
    document.getElementById('result').innerHTML = `
      <p><strong>You chose:</strong> ${userChoice}</p>
      <p><strong>Computer chose:</strong> ${computerChoice}</p>
      <p><strong>Result:</strong> ${result}</p>
    `;
  }
  
