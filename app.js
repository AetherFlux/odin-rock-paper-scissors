let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const displayWin = document.querySelector('.result-win');
const displayLoss = document.querySelector('.result-loss');
const displayTie = document.querySelector('.result-tie');

let playerWins = [];
let computerWins = [];

document.querySelectorAll('.player-wins > .count').forEach(score => playerWins.push(score));
document.querySelectorAll('.computer-wins > .count').forEach(score => computerWins.push(score));

buttons.forEach(button => button.addEventListener('click', () => {
    console.log(playRound(button.id))
}));

function displayRandom () {
    document.querySelector('#computer-paper').classList.toggle('neon-green-box');
    document.querySelector('#computer-rock > i').classList.toggle('neon-green');
    setTimeout(() => {
        document.querySelector('#computer-rock').classList.toggle('neon-green-box');
        document.querySelector('#computer-rock > i').classList.toggle('neon-green');
    }, 800);
}

function computerPlay () {
    choise = Math.floor(Math.random()*3);
    if (choise === 0) {
        document.querySelector('#computer-rock').classList.toggle('neon-green-box');
        document.querySelector('#computer-rock > i').classList.toggle('neon-green');
        setTimeout(() => {
            document.querySelector('#computer-rock').classList.toggle('neon-green-box');
            document.querySelector('#computer-rock > i').classList.toggle('neon-green');
        }, 1500);
        return "ROCK"
    } else if (choise === 1) {
        document.querySelector('#computer-paper').classList.toggle('neon-blue-box');
        document.querySelector('#computer-paper > i').classList.toggle('neon-blue');
        setTimeout(() => {
            document.querySelector('#computer-paper').classList.toggle('neon-blue-box');
            document.querySelector('#computer-paper > i').classList.toggle('neon-blue');
        }, 1500);
        return "PAPER"
    } else if (choise === 2) {
        document.querySelector('#computer-scissors').classList.toggle('neon-red-box');
        document.querySelector('#computer-scissors > i').classList.toggle('neon-red');
        setTimeout(() => {
            document.querySelector('#computer-scissors').classList.toggle('neon-red-box');
            document.querySelector('#computer-scissors> i').classList.toggle('neon-red');
        }, 1500);
        return "SCISSORS"
    }
}
 function playRound (playerSelection) {
     const computerSelection = computerPlay().toLowerCase();
     playerSelection = playerSelection.toLowerCase();
     if (playerScore === 5 || computerScore === 5) {
         playerScore = 0;
         computerScore = 0;
         document.querySelector('#player-trophy').classList.remove('neon-blue');
         document.querySelector('#computer-trophy').classList.remove('neon-red');
         for (i = 1; i < 6; i++){
            playerWins[i].classList.remove('neon-blue');
            computerWins[i].classList.remove('neon-red');
         }
     }
     if (playerSelection === computerSelection) {
        displayTie.classList.toggle('neon-green');
        setTimeout(() => displayTie.classList.toggle('neon-green'), 1500);
         return "it's a tie!";
     } else if (
         (playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "paper" && computerSelection == "rock") ||
         (playerSelection == "scissors" && computerSelection == "paper")
     ) {
         playerScore ++;
         playerWins[playerScore].classList.toggle('neon-blue');
         if (playerScore === 5) {
            document.querySelector('#player-trophy').classList.add('neon-blue');
        }
         displayWin.classList.toggle('neon-blue');
         setTimeout(() => displayWin.classList.toggle('neon-blue'), 1500);
         return
     } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
     ) {
         computerScore ++;
         computerWins[computerScore].classList.toggle('neon-red');
         if (computerScore === 5) {
             document.querySelector('#computer-trophy').classList.add('neon-red');
         }
         displayLoss.classList.toggle('neon-red');
         setTimeout(() => displayLoss.classList.toggle('neon-red'), 1500);
         return
     }
 }
