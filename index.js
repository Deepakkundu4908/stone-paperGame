const buttons = document.querySelectorAll(".button");
const yourChoice = document.querySelector("#your-choice");
const computerChoice = document.querySelector("#computer-choice");
const result = document.querySelector("#result");
const yourWins = document.querySelector("#you-win");
const computerWins = document.querySelector("#computer-win");
const resetBtn = document.querySelector("#reset");

let userScore = 0;
let computerScore = 0;
const choices = ["Stone", "Paper", "Scissor"];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const userPick = button.getAttribute("data-choice");
    const computerPick = choices[Math.floor(Math.random() * choices.length)];

    yourChoice.textContent = "Your Choice: " + userPick;
    computerChoice.textContent = "Computer Choice: " + computerPick;

    if (userPick === computerPick) {
      result.textContent = "Result: Draw";
    } else if (
      (userPick === "Stone" && computerPick === "Scissor") ||
      (userPick === "Paper" && computerPick === "Stone") ||
      (userPick === "Scissor" && computerPick === "Paper")
    ) {
      result.textContent = "Result: You Win";
      userScore++;
      yourWins.textContent = "You Win: " + userScore;
    } else {
      result.textContent = "Result: Computer Wins";
      computerScore++;
      computerWins.textContent = "Computer Wins: " + computerScore;
    }
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  yourChoice.textContent = "Your Choice:";
  computerChoice.textContent = "Computer Choice:";
  result.textContent = "Result:";
  yourWins.textContent = "You Win: 0";
  computerWins.textContent = "Computer Wins: 0";
});