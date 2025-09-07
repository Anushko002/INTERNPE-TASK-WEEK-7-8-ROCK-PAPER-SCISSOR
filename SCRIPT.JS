let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").innerText = "You: " + userChoice;
  document.getElementById("computer-choice").innerText = "Computer: " + computerChoice;

  let winner = "";

  if (userChoice === computerChoice) {
    winner = "It's a Draw 🤝";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "You Win 🎉";
    userScore++;
  } else {
    winner = "Computer Wins 🤖";
    computerScore++;
  }

  document.getElementById("winner").innerText = winner;
  document.getElementById("user-score").innerText = userScore;
  document.getElementById("computer-score").innerText = computerScore;
}
