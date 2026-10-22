// Connect to the buttons from HTML
const roundNumber = document.querySelector('#round-number')
const inputRock = document.querySelector('#rock-btn');
const inputPaper = document.querySelector('#paper-btn');
const inputScissors = document.querySelector('#scissors-btn');
const humanChooseDis = document.querySelector('#human-choose-dis')
const humanScoreDis = document.querySelector('#human-score-dis')
const botChooseDis = document.querySelector('#bot-choose-dis')
const botScoreDis = document.querySelector('#bot-score-dis')
const disResult = document.querySelector('#result')









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
    if (playGame < 5) {
        roundResults()
    } else {
        newGame();
    }
}

function newGame() {
    let confirmReset = confirm("Do you want to start new game?")
    if (confirmReset === true) {
        playGame = 0;
        humanScore = 0;
        computerScore = 0;
    } else {
        // roundResults()
        return "---"
    }
}

function roundResults() {

    computerChoice = getComputerChoice();


    console.log("Bot choose:", computerChoice);
    playRound(humanChoice, computerChoice);
    console.log("Your Score:", humanScore);
    console.log("Computer Score:", computerScore);
    console.log("Round Played:", playGame)
    playGame++
    if (playGame === 5) {
        if (humanScore > computerScore) {
            result.textContent = ("--- You WIN ---")
        }
        else if (humanScore < computerScore) {
            result.textContent = ("--- You LOSE ---")
        } else {
            result.textContent = ("--- DRAW ---")

            console.log("")
        }
    }

    roundNumber.textContent = ("Round " + playGame);
    humanChooseDis.textContent = (humanChoice.toUpperCase());
    humanScoreDis.textContent = ("Score: " + humanScore);
    botChooseDis.textContent = (computerChoice.toUpperCase());
    botScoreDis.textContent = ("Score: " + computerScore);

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



