function computerPlay() {
    function randomNumberGen() {
        return Math.floor(Math.random() * 3 );
        }

    let pcPick = ['rock', 'paper', 'scissor'];
    return pcPick[randomNumberGen()];
}

function playRound(playerSelection, computerSelection) {
    let resultText = [
        'Computer chose scissor. You win!',
        'Computer chose rock. You win!',
        'Computer chose paper. You win!',
        'Computer chose paper. You lose!',
        'Computer chose scissor. You lose!',
        'Computer chose rock. You lose!',
        'Tie game.'
    ];

    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        results.textContent = resultText[0]; 
        checkWin();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        results.textContent = resultText[1];
        checkWin();
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        results.textContent = resultText[2];
        checkWin();
    }

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        results.textContent = resultText[3];
        checkLose();
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        results.textContent = resultText[4];
        checkLose();
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        results.textContent = resultText[5];
        checkLose();
    }
    if (playerSelection === computerSelection) {
        results.textContent = resultText[6];
    }

    function checkWin() {
        if (results.textContent = resultText[0]) {
            playerScore.textContent++;
        } else if (results.textContent = resultText[1]) {
            playerScore.textContent++;
        } else if (results.textContent = resultText[2]) {
            playerScore.textContent++;
        } else if (results.textContent = resultText[6]) {
            playerScore.textContent = playerScore.textContent;
        } else {
            playerScore.textContent = '';
        }
    }   
    function checkLose() {
        if (results.textContent = resultText[3]) {
            pcScore.textContent++;
        } else if (results.textContent = resultText[4]) {
            pcScore.textContent++;
        } else if (results.textContent = resultText[5]) {
            pcScore.textContent++;
        } else if (results.textContent = resultText[6]) {
            pcScore.textContent = pcScore.textContent;
        } else {
            pcScore.textContent = '';
        }
    }
    if (playerScore.textContent == 5 || pcScore.textContent == 5) {
        gameOverMessage.textContent = 'GAME OVER!!!';
        gameOverMessage.style.color = 'red';
        gameOverMessage.style.fontSize = '28px';
        gameOverMessage.classList.toggle('hidden');
        buttons.classList.toggle('hidden');
        results.textContent = '';
        newGameButton.classList.toggle('hidden');
        document.querySelector('#para').classList.toggle('hidden');
        gameOverMessageContainer.appendChild(gameOverMessage);
        gameOverMessageContainer.appendChild(newGameButton);
    }
}

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    playRound('rock', computerPlay());
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    playRound('paper', computerPlay());
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    playRound('scissor', computerPlay());
});

const container = document.querySelector('#container');
const results = document.createElement('div');
results.style.textAlign = 'center';
container.appendChild(results);

let scoreContainer = document.querySelector('#score');
let playerScore = document.createElement('div');
playerScore.style.position = 'relative';
playerScore.textContent = '';
scoreContainer.appendChild(playerScore);

let pcScoreContainer = document.querySelector('#score2');
let pcScore = document.createElement('div');
pcScore.textContent = '';
pcScore.style.position = 'relative';
pcScoreContainer.appendChild(pcScore);

let gameOverMessageContainer = document.querySelector('#gameOverMessageContainer');
let gameOverMessage = document.createElement('div');
gameOverMessage.style.position = 'relative';
gameOverMessage.style.display = 'block';
gameOverMessage.style.textAlign = 'center';
gameOverMessage.classList.add('hidden');
gameOverMessage.textContent = '';
gameOverMessageContainer.appendChild(gameOverMessage);

const newGameButton = document.createElement('button');
newGameButton.textContent = 'Play again';
newGameButton.classList.add('hidden');
newGameButton.style.margin = 'auto';
newGameButton.style.padding = '5px';
gameOverMessageContainer.appendChild(newGameButton);

newGameButton.addEventListener('click', () => {
    playerScore.textContent = '';
    pcScore.textContent = '';
    newGameButton.classList.toggle('hidden');
    buttons.classList.toggle('hidden');
    gameOverMessage.classList.toggle('hidden');
    document.querySelector('#para').classList.toggle('hidden');
    gameOverMessageContainer.removeChild(newGameButton);
    gameOverMessageContainer.removeChild(gameOverMessage);
})
