

// The user inputs rock, paper or scissors into a prompt box.

// The computer returns a random result of rock, paper or scissors.
    
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "Scissors";
    } else if (random === 1) {
        return "Paper";
    } else {
        return "Rock";
    }
    }
  

// The Player versus Computer in a round 


// If it is a tie, console prints "You tied".
    
// Rock beats scissors.

// Scissors beats paper.

// Paper beats rock.

// Win or lose result is printed in the console log. 

// The game lasts for five rounds. 

// When five games have passed the score out of five is printed in the console log.

console.log(computerPlay());