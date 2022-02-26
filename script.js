/* Create a function that randomly returns the string 'Rock',
'Paper', 'Scissors' to represent computer you play against */
function computerPlay () {
    let options = ['rock', 'paper', 'scissors'];
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


// Inputting HTML DOM EventListeners for Buttons. Need to call playRound function with correct playerSelection
const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function () {playRound('rock', computerPlay())})

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function () {playRound('paper', computerPlay())})

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function () {playRound('scissors', computerPlay())})


// Initiate scores of 0 for Player and Computer (Global Scope)
let playerScore = 0;
let computerScore = 0;

// Function to play a game
function playRound(playerSelection, computerPlay) {
    // Grab the results class in HTML
    let results = document.getElementsByClassName("results")[0];
    //Create a paragraph HTML element
    let p = document.createElement('p');

    // Logging choices of player and computer into console *TEMPORARYY*
    console.log(playerSelection);
    console.log(computerPlay);

    // Put the elements for Player's score and Computer's score into variable
    let playerH3 = document.getElementById("playerH3");
    let computerH3 = document.getElementById("computerH3");


    // If statement to ensure player types rock, paper, or scissors regardless of casing
    if (!(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')) {
        alert("Enter rock, paper, or scissors")
    } else if (playerSelection === 'rock' && computerPlay === 'scissors') {     // Player Win Scenario 1
        let pWin = document.createTextNode("Player Wins!");
        p.appendChild(pWin);
        results.appendChild(p);
        playerScore ++;
        playerH3.innerHTML = `Player Score: ${playerScore}`;
        endGame();
    } else if (playerSelection === 'paper' && computerPlay === 'rock') {        // Player Win Scenario 2
        let pWin = document.createTextNode("Player Wins!");
        p.appendChild(pWin);
        results.appendChild(p);
        playerScore ++;
        playerH3.innerHTML = `Player Score: ${playerScore}`;
        endGame();
    } else if (playerSelection === 'scissors' && computerPlay === 'paper') {    // Player Win Scenario 3
        let pWin = document.createTextNode("Player Wins!");
        p.appendChild(pWin);
        results.appendChild(p);
        playerScore ++;
        playerH3.innerHTML = `Player Score: ${playerScore}`;
        endGame();
    } else if (playerSelection === computerPlay) {                              // Draw Between Player / Computer Scenario
        let drawEnd = document.createTextNode("Tie!");
        p.appendChild(drawEnd);
        results.appendChild(p);
    } else {                                                                    // Represents all computer Scenarios (else)
        let cWin = document.createTextNode("Computer Wins!");
        p.appendChild(cWin);
        results.appendChild(p);
        computerScore ++;
        computerH3.innerHTML = `Computer Score: ${computerScore}`;
        endGame();
    }
}

let champion = document.getElementsByClassName('champion')[0];
    let p2 = document.createElement('p');

function endGame () {
    if (playerScore === 5) {
        p2.innerHTML = 'Player is the Champion!';
        champion.appendChild(p2);
        //champion.appendChild(p2);
    } else if (computerScore === 5) {
        p2.innerHTML = "Computer is the Champion!";
        champion.appendChild(p2);
        //champion.appendChild(p2);
    }
}

// Work on displaying the score from the playRound function
