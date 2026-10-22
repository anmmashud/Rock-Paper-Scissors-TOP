// Connect to the buttons from HTML
const inputRock = document.querySelector('#rock-btn');
const inputPaper = document.querySelector('#paper-btn');
const inputScissors = document.querySelector('#scissors-btn');

// Main Array
const game = ["rock", "paper", "scissors"]
let humanScore = 0;
let computerScore = 0;

// Get Computer choice
let computerChoice = ""
let humanChoice = ""

function getComputerChoice() {
    return computerChoice = game[Math.floor(Math.random() * game.length)];
}

function roundResults() {
    computerChoice = getComputerChoice();
    console.log("You choose:", humanChoice);
    console.log("Bot choose:", computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Your Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

// Get Human choice
inputRock.addEventListener("click",
    function clickedChoice() {
        humanChoice = "rock";
        roundResults();
    })
inputPaper.addEventListener("click",
    function clickedChoice() {
        humanChoice = "paper";
        roundResults();
    })
inputScissors.addEventListener("click",
    function clickedChoice() {
        humanChoice = "scissors";
        roundResults();
    })

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("The match is draw");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You Win! Rock beats Scissors");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You Win! Paper beats Rock");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats paper");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper");
    }
}


