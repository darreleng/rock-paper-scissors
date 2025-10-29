const choices = ["rock", "paper", "scissors"];
const winsAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let computerScore = 0;
let humanScore = 0;

function capitalise(str) {
    if (!str) return '';
    return str.at().toUpperCase() + str.slice(1).toLowerCase();
}

const resultsParent = document.getElementById('round-messages');
const score = document.getElementById('score-display');

function playRound(rps) {
    let computerChoice = getComputerChoice();
    let humanChoice = rps;
    const roundResult = document.createElement('p');

    // Tie
    if (computerChoice === humanChoice) {
        roundResult.textContent = `It's a tie! Both chose ${capitalise(humanChoice)}.`;
    }
    // Computer wins
    else if (winsAgainst[computerChoice] === humanChoice) {
        computerScore++;
        score.textContent = (`${humanScore}:${computerScore}`);
        roundResult.textContent = `You lose! ${capitalise(computerChoice)} beats ${capitalise(humanChoice)}`;
    }
    // Human wins
    else {
        humanScore++;
        score.textContent = (`${humanScore}:${computerScore}`);
        roundResult.textContent = `You win! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}`;
    }
    resultsParent.appendChild(roundResult);
    checkGameOver();
}

function checkGameOver() {
    let message = '';
    let isGameOver = false;

    if (humanScore === 5) {
        message = `🏆 Congratulations! You won the game with a score of ${humanScore}:${computerScore}!`;
        isGameOver = true;
    } else if (computerScore === 5) {
        message = `😔 Hard luck, you lost the game with a score of ${humanScore}:${computerScore}.`;
        isGameOver = true;
    }

    if (isGameOver) {
        disableButtons();
        // Create a game over message element (better than alert)
        const finalMessage = document.createElement('h3');
        finalMessage.textContent = message;
        finalMessage.style.color = humanScore === 5 ? 'green' : 'red';
        resultsParent.appendChild(finalMessage);
        resultsParent.appendChild(resetButton);        
    }
}

function disableButtons() {
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
}

function enableButtons() {
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    score.textContent = "0:0";

    // Clear the results log by removing all child elements
    resultsParent.innerHTML = '';
    enableButtons();
}

const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const resetButton = document.createElement('button');

resetButton.textContent = 'Play again';

buttonRock.addEventListener('click', () => playRound('rock'));
buttonPaper.addEventListener('click', () => playRound('paper'));
buttonScissors.addEventListener('click', () => playRound('scissors'));
resetButton.addEventListener('click', resetGame);