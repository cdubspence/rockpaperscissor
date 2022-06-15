const images = Array.from(document.querySelectorAll('.card'));
let playerScore = 0
let compScore = 0

images.forEach((image) =>
    image.addEventListener('click', () => {
        
        game(image.dataset.image)
    })
);

function computerPlay() {
    compChoice = Math.floor(Math.random() * 3);
    computerPick = ''
    switch(compChoice) {
        case 1:
            computerPick = 'rock';
            break;
        case 2:
            computerPick = 'paper';
            break;
        case 3:
            computerPick = 'scissors'
            break;
            default:
                break;
    }

    return computerPick
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        document.getElementById('roundtext').innerHTML = 'Its a Tie!'
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        document.getElementById('roundtext').innerHTML = 'You Win! Rock beats Scissors'
        playerScore += 1
        document.getElementById('playerScore').innerHTML = playerScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        document.getElementById('roundtext').innerHTML = 'You Win! Scissors beats paper'
        playerScore += 1
        document.getElementById('playerScore').innerHTML = playerScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        document.getElementById('roundtext').innerHTML = 'You Win! Paper beats Rock'
        playerScore += 1
        document.getElementById('playerScore').innerHTML = playerScore;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        document.getElementById('roundtext').innerHTML = 'You Lose! Paper beats Rock'
        compScore += 1
        document.getElementById('compScore').innerHTML = compScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        document.getElementById('roundtext').innerHTML = 'You Lose! Rock beats Scissors'
        compScore += 1
        document.getElementById('compScore').innerHTML = compScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        document.getElementById('roundtext').innerHTML = 'You Win! Scissors beats Paper'
        compScore += 1
        document.getElementById('compScore').innerHTML = compScore;
    }
    checkScore()
}

function checkScore() {
    if (playerScore == 5) {
        alert('Game over you WIN!')
        resetGame()
    } 
    else if (compScore == 5) {
        alert('Game over you LOSE!')
        resetGame()
    } else return
}

function resetGame() {
    document.getElementById('playerScore').innerHTML = '0'
    document.getElementById('compScore').innerHTML = '0'
    compScore = 0
    playerScore = 0
}
function game(playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = computerPlay();

    playRound(playerChoice, computerSelection)
}