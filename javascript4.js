const options = ['rock', 'paper', 'scissors'];
const win = 'You win!';
const loss = 'You lose!';
const tie = 'It\'s a tie!';

function computerPlay() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection == 'scissors') {
        return win;
    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        return loss;
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        return win; 
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        return loss;
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        return win;
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        return loss;
    } else {
        return tie;
    }
}

function game() {
    for (let i = 5; i <=5; i++) {
    playRound();
}
}

game();
const playerSelection = prompt('Rock, paper, scissors?');
const computerSelection = computerPlay();
console.log('You chose ' + playerSelection);
console.log('Computer chose ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));
