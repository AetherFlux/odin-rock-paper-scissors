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
         console.log("it's a tie!");
     } else if (
         (playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "paper" && computerSelection == "rock") ||
         (playerSelection == "scissors" && computerSelection == "paper")
     ) {
         console.log(playerSelection + " beats " + computerSelection + ", you win!")
     } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
     ) {
         console.log(computerSelection + " beats " + playerSelection + ", you lose!")
     }
 }

 playRound();