// Connect to the buttons from HTML
const inputRock = document.querySelector('#rock-btn');
const inputPaper = document.querySelector('#paper-btn');
const inputScissors = document.querySelector('#scissors-btn');

// Main Array
const game = ["rock", "paper", "scissors"]
let humanScore = 0;
let computerScore = 0;
let playGame = 0
let computerChoice = ""
let humanChoice = ""

function getComputerChoice() {
    return computerChoice = game[Math.floor(Math.random() * game.length)];
}

function mainGame() {
    if (playGame != 5) {
        roundResults()
    } else {
        resetHistory();
    }
}

function resetHistory() {
    confirm("Do you want to start new game?")
    playGame = 0;
    humanScore = 0;
    computerScore = 0;
}

function roundResults() {
    computerChoice = getComputerChoice();
    console.log("You choose:", humanChoice);
    console.log("Bot choose:", computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Your Score:", humanScore);
    console.log("Computer Score:", computerScore);
    console.log("Round Played:", playGame + 1)
    playGame++
    if (playGame === 5) {
        if (humanScore > computerScore) {
            console.log("You WON The Match")
        }
        else if (humanScore < computerScore) {
            console.log("You LOSE The Match")
        } else {
            console.log("Match is DRAW")
        }
    }
}

// Get Human choice
inputRock.addEventListener("click",
    function clickedChoice() {
        humanChoice = "rock";
        mainGame();
    })
inputPaper.addEventListener("click",
    function clickedChoice() {
        humanChoice = "paper";
        mainGame();
    })
inputScissors.addEventListener("click",
    function clickedChoice() {
        humanChoice = "scissors";
        mainGame();
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


// console.log("The game is over")



