/* Create a function that randomly returns the string 'Rock',
'Paper', 'Scissors' to represent computer you play against */

function computerPlay () {
    let options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

/* Create a function that plays a round of Rock Paper Scissors, taking playerSelection
and comptuerSelection as parameters, returning a string of the declared winner */

// const playerSelection = window.prompt("Rock, Paper, or Scissors?: ").toLowerCase
//const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    // Need to compare ensure player enters Rock, Paper, or Scissors, regardless of casing
    playerWin="Player Wins!"
    computerWin="Computer Wins!"
    draw="Tie!"
    if (!(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')) {
        alert("Enter rock, paper, or scissors")
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log(playerWin);
        playerScore ++;
        return playerWin;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(playerWin);
        playerScore ++;
        return playerWin;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(playerWin);
        playerScore ++;
        return playerWin;
    }
    else if (playerSelection === computerSelection) {
        console.log(draw);
        return draw;
    }
    else {
        console.log(computerWin);
        computerScore ++;
        return computerWin;
    }
}
// Play the game five times, tracking the score between games
function game(playRound) {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Rock, Paper, or Scissors?: ").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        console.log("Player Wins Best of 5!")
    } else if (playerScore === computerScore) {
        console.log("You tied!")
    } else {
        console.log("Computer Wins Best of 5!")
    }
}


console.log(game(playRound));