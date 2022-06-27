let score = 0;

function computerPlay () {
    choise = Math.floor(Math.random()*3)
    if (choise === 0) {
        return "ROCK"
    } else if (choise === 1) {
        return "PAPER"
    } else if (choise === 2) {
        return "SCISSORS"
    }
}
 function playRound (playerSelection, computerSelection) {
     computerSelection = computerPlay().toLowerCase();
     playerSelection = prompt("Select your play").toLowerCase();
     if (playerSelection === computerSelection) {
         return "it's a tie!";
     } else if (
         (playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "paper" && computerSelection == "rock") ||
         (playerSelection == "scissors" && computerSelection == "paper")
     ) {
         score ++;
         return playerSelection + " beats " + computerSelection + ", you win!";
     } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
     ) {
         score --;
         return computerSelection + " beats " + playerSelection + ", you lose!";
     }
 }

function game () {
    for (i=0; i<5; i++) {
        console.log(playRound());
    }

    if (score > 0) {
        console.log("Player wins!")
    } else if (score < 0) {
        console.log("Computer wins!")
    } else {
        console.log("The game is a tie!")
    }
}

game();