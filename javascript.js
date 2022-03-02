//Global variables which apply to any function.
const choices = ['rock', 'paper', 'scissors'];
const playerSelection = userPlay();
const computerSelection = computerPlay();
const draw = ("It's a Draw!");
const playerWin = ("You Win!");
const computerWin = ("Computer Wins!");
let playerScore = 0;
let computerScore = 0;

//loops five rounds of the game
function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    roundResult();
}

//computer makes random choice. 
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]; 
}

//user selects from options.
function userPlay() {
    return prompt ("Select Scissors, Paper or Rock.").toLowerCase();
    
}

//single round is played.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw 
} else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
           playerSelection === 'scissors' && computerSelection === 'paper' ||
           playerSelection === ' paper' && computerSelection === 'rock') {
        playerScore++;
        return playerWin;
} else {
    computerScore++;
    return computerWin;
}
}

//Result of the round is displayed in the console.
function roundResult() {
    console.log('You chose ' + playerSelection + '.');
    console.log('Computer chose ' + computerSelection + '.');
    console.log(playRound(playerSelection, computerSelection));
    console.log('Your score: ' + playerScore);
    console.log('Computer score: ' + computerScore);
    console.log('Draws: ');
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}


//calls in the game function to play the game.
game();
