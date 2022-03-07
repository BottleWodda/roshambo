const options = ['rock', 'paper', 'scissors'];
const win = 'You win!';
const loss = 'You lose!';
const tie = 'It\'s a tie!';
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function userPlay() {
    let playerChoice= prompt('Choose rock, paper or scissors');
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return win;
    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        computerScore++;
        return loss;
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playerScore++;
        return win; 
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return loss;
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return win;
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return loss;
    } else {
        return tie;
    }
}

function game() {
    playRound();
    logResults();
}

const playerSelection = userPlay();
const computerSelection = computerPlay();

function logResults() {
console.log('You chose ' + playerSelection + '.');
console.log('Computer chose ' + computerSelection + '.');
console.log(playRound(playerSelection, computerSelection));
console.log('Your score: ' + playerScore);
console.log('Computer score: ' + computerScore);
console.log('------------------------------------');
}

game();
