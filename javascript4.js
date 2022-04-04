let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button'); 

//computer choice
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

//Player chooses and round is played
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        let pScore = playerScore;
        let cScore = computerScore;
        let pChoice = playerSelection;
        let cChoice =  computerSelection
        
        document.getElementById('playerResult').innerHTML = 'Your score: ' + pScore;
        document.getElementById('computerResult').innerHTML = 'Computer score: ' + cScore;
        document.getElementById('playerChoice').innerHTML = 'You chose ' + pChoice;
        document.getElementById('computerChoice').innerHTML = 'Computer chose ' + cChoice;

        //Ends game when score of 5 is reached
        if (computerScore == 5 || playerScore == 5) {
            return finalResult();
        }
    })
});

function playRound(playerSelection, computerSelection) {
    const win = 'Round won!';
    const loss = 'Round lost!';
    const tie = 'Round tied!';
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

  function finalResult() {
    if (playerScore > computerScore) {
        confirm('You win the game! Play again?');
        location.reload();
    } else {
        confirm('Computer wins the game! Play again?')
        location.reload();
    }
}