let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(), game();
    })
});

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    const win = 'You win!';
    const loss = 'You lose!';
    const tie = 'It\'s a tie!';
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
//for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay()
    let playerSelection = document.querySelector('buttons');
    console.log('You chose ' + playerSelection + '.');
    console.log('Computer chose ' + computerSelection + '.');
    console.log(playRound(playerSelection, computerSelection))
    console.log('Your score: ' + playerScore);
    console.log('Computer score: ' + computerScore);
    console.log('------------------------------------');
    if (computerScore == 5 || playerScore == 5) {
        return finalResult();
    }
}

  function finalResult() {
    console.log('Final Results:')
    if (playerScore > computerScore) {
        console.log('You scored: ' + playerScore);
        console.log('Computer scored: ' + computerScore);
        console.log('You win the game!');
    } else if (playerScore < computerScore) {
        console.log('You scored: ' + playerScore);
        console.log('Computer scored: ' + computerScore);
        console.log('Computer wins the game!');
    } else {
        console.log('You scored: ' + playerScore);
        console.log('Computer scored: ' + computerScore);
        console.log('Its a tie!');
    }
}