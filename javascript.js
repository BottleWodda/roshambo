const choices = ['rock', 'paper', 'scissors'];
const playerSelection = userPlay();
const computerSelection = computerPlay();

//loops five rounds of the game
function game() {
    for (let i = 0; i <=5; i++) {
        playRound();
    }
    console.log('You chose ' + playerSelection + '.');
    console.log('Computer chose ' + computerSelection + '.');
    console.log(playRound(playerSelection, computerSelection));
}

//computer makes random choice. 
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]; 
}

//user selects from options.
function userPlay () {
    return prompt("Select Scissors, Paper or Rock.")
    
}

//single round is played.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a Tie!' 
} else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
           playerSelection === 'scissors' && computerSelection === 'paper' ||
           playerSelection === ' paper' && computerSelection === 'rock') {
        return 'You Win!!'
} else {
    return 'Computer Wins!';
}
}


//calls in the game function to play the game.
game();
