const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    while(true) {

        let humanChoice = prompt("Type rock, paper, or scissors");

        if (humanChoice === null)  {
            continue;
        }

        humanChoice = humanChoice.toLowerCase().trim()

        if (choices.includes(humanChoice)){
            return humanChoice;
        } 
    }
}

let computerScore = 0;
let humanScore = 0;

function capitalise(str) {
    return str.at().toUpperCase() + str.slice(1).toLowerCase();
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    // Tie
    if (computerChoice === humanChoice) {
        return console.log(`It's a tie! Both chose ${humanChoice}.`);
    }

    // Computer wins
    if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        computerScore++;
        return console.log(`You lose! ${capitalise(computerChoice)} beats ${capitalise(humanChoice)}.`);
    }

    // Human wins
    else {
        humanScore++;
        return console.log(`You win! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}.`);
    }
}

function playGame() {
    for (i=1; i<6; i++) {
        console.log(`Round ${i}`)
        playRound();
    }

    if (computerScore > humanScore) {
        return console.log(`Computer wins with a score of ${computerScore}:${humanScore}.`);
    } else {
        return console.log(`You win with a score of ${humanScore}:${computerScore}.`);        
    }
}

playGame();