let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.target.classList.add('keypress');
        playRound(playerSelection = button.id, computerSelection = computerPlay());
        let pScore = playerScore;
        let cScore = computerScore;
        let pChoice = playerSelection;
        let cChoice =  computerSelection
        document.getElementById('playerChoice').innerHTML = 'You chose ' + pChoice;
        document.getElementById('computerChoice').innerHTML = 'Computer chose ' + cChoice;
        document.getElementById('playerResult').innerHTML = 'Your score: ' + pScore;
        document.getElementById('computerResult').innerHTML = 'Computer score: ' + cScore;
        //Ends game when score of 5 is reached
        if (computerScore == 5 || playerScore == 5) {
            return finalResult();
        }
    })
});

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
    } else {
        return
    }
}

function finalResult() {
    if (playerScore > computerScore) {
        document.getElementById('finalResult').innerHTML = 'You Win!';
        document.getElementById('replay').innerText = 'Choose Rock, Paper or Scissors to play again';
        playerScore = 0;
        computerScore = 0;
    } else {
        document.getElementById('finalResult').innerHTML = 'Computer Wins!';
        document.getElementById('replay').innerText = 'Choose Rock, Paper or Scissors to play again';
        playerScore = 0;
        computerScore = 0;
    }
}

function unPress(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('keypress');
}

const press = document.querySelectorAll('.btn');
press.forEach(key => key.addEventListener('transitionend', unPress));