const choices = document.querySelectorAll('#container-choices>button');
choices.forEach((button) => button.addEventListener('click', () => playRound(button.id)));

const plays = ['scissors', 'paper', 'stone'];
const playsMessage = {
    scissors: '✌️',
    paper: '🖐️',
    stone: '👊'
}
const resultMessage = {
    tie: "It's a tie.",
    win: "You win! 🙂",
    lose: "You lose! 🥲"
}
let playerScore = 0;
let computerScore = 0;
let result;

function playRound(buttonID) {
    const getPlayerChoice = setPlayerChoice(buttonID);
    const getComputerChoice = setComputerChoice();
    checkChoice(getPlayerChoice, getComputerChoice);
    display(getPlayerChoice, getComputerChoice);
}

function setPlayerChoice(buttonID) {
    return buttonID.split('-')[1];
}

function setComputerChoice() {
    return plays[Math.floor(Math.random() * 3)];
}

function checkChoice(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) result = 'tie';
    else if ((playerChoice === 'scissors' && computerChoice === 'paper') ||
             (playerChoice === 'paper' && computerChoice === 'stone') ||
             (playerChoice === 'stone' && computerChoice === 'scissors')) {
                playerScore++;
                result = 'win';
             }
    else {
        computerScore++;
        result = 'lose';
    }
}

function display(playerChoice, computerChoice) {
    document.getElementById('display-choice-player').textContent = `Your choice: ${playsMessage[playerChoice]}`;
    document.getElementById('display-choice-computer').textContent = `Computer's choice: ${playsMessage[computerChoice]}`;

    const roundResult = document.getElementById('display-result');
    roundResult.textContent = resultMessage[result];
    roundResult.classList.remove('win', 'lose');
    if (result === 'win') {
        roundResult.classList.add('win')
    } else if (result === 'lose') {
        roundResult.classList.add('lose');
    }    

    document.getElementById('display-score-player').textContent = `Your score: ${playerScore}`;
    document.getElementById('display-score-computer').textContent = `Computer's score: ${computerScore}`;
}