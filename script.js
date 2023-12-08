let computerMove = '';

function pickComputerMove(){
    const randomNumber = Math.random();
    const computerPlayImg = document.getElementById("computer-play");

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
        computerPlayImg.src = "images/rock-emoji.png";
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
        computerPlayImg.src = "images/paper-emoji.png";
    } else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
        computerPlayImg.src = "images/scissors-emoji.png";
    }
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove){
    pickComputerMove();

    const myplayImg = document.getElementById("you-play");
    let result = '';
    if (playerMove === 'scissors'){
        myplayImg.src = "images/scissors-emoji.png";
        if(computerMove === 'scissors'){
            result = 'Tie.'
        } else if(computerMove === 'rock '){
            result = 'You lose.';
        } else {
            result = 'You win!'
        }
    } else if (playerMove === 'paper'){
        myplayImg.src = "images/paper-emoji.png";
        if(computerMove === 'paper'){
            result = 'Tie.'
        } else if(computerMove === 'scissors'){
            result = 'You lose.';
        } else {
            result = 'You win!'
        }
    } else if (playerMove === 'rock'){
        myplayImg.src = "images/rock-emoji.png";
        if(computerMove === 'rock'){
            result = 'Tie.'
        } else if(computerMove === 'paper'){
            result = 'You lose.';
        } else {
            result = 'You win!'
        }
    }

    if(result === 'You win!'){
        score.wins +=1;
    } else if (result === 'You lose.'){
        score.losses +=1;
    } else if(result === 'Tie.') {
        score.ties +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.your-move').innerHTML = `${playerMove}`;
    document.querySelector('.computer-move').innerHTML = `${computerMove}`;
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}