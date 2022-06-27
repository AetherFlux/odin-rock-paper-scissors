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
