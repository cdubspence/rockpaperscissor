playerScore = 0;
compScore = 0

function computerPlay() {
    options = ['rock', 'paper', 'scissors']
    compChoice = Math.floor(Math.random() * 3);
    //console.log(options[compChoice])
    return options[compChoice]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        document.getElementById('roundtext').innerHTML = 'Its a Tie!'
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        document.getElementById('roundtext').innerHTML = 'You Win! Rock beats Scissors'
        playerScore += 1
        document.getElementById('score').innerHTML = "Score: Player " + playerScore + ' Computer: ' + compScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        document.getElementById('roundtext').innerHTML = 'You Win! Scissors beats paper'
        playerScore += 1
        document.getElementById('score').innerHTML = "Score: Player " + playerScore + ' Computer: ' + compScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        document.getElementById('roundtext').innerHTML = 'You Win! Paper beats Rock'
        playerScore += 1
        document.getElementById('score').innerHTML = "Score: Player " + playerScore + ' Computer: ' + compScore;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        document.getElementById('roundtext').innerHTML = 'You Lose! Paper beats Rock'
        compScore += 1
        document.getElementById('score').innerHTML = "Score: Player " + playerScore + ' Computer: ' + compScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        document.getElementById('roundtext').innerHTML = 'You Lose! Rock beats Scissors'
        compScore += 1
        document.getElementById('score').innerHTML = "Score: Player " + playerScore + ' Computer: ' + compScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        document.getElementById('roundtext').innerHTML = 'You Win! Scissors beats Paper'
        compScore += 1
        document.getElementById('score').innerHTML = "Score: Player " + playerScore + ' Computer: ' + compScore;
    }
}

function game() {
    let playerSelection = document.getElementById('playerChoice').value;
    let computerSelection = computerPlay()

    document.getElementById('gametext').innerHTML = playerSelection + ' vs. ' + computerSelection;
    playRound(playerSelection, computerSelection)
    
}