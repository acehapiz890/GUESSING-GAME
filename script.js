'use strict';

// generates the random number
let secretNum = Math.trunc(Math.random() * 20) + 1;

// display the random number in the box
document.querySelector('.number').textContent = `?`;

//variable used for score counting 
let score = 20;

//variable used to get high score
let highScore = 0;

// FUNCTIONS //
function checkScoreHigh() {
    //userr guess high
    if (score > 1) {
        document.querySelector(`.message`).textContent = `Your guess is high!`;
        score--;
        document.querySelector('.label-score').textContent = `Score: ${score}`;
    } else {
        document.querySelector(`.message`).textContent = `You lost the game!`;
        document.querySelector('.label-score').textContent = `Score: ${score = 0}`;
        document.querySelector('body').style.backgroundColor = 'rgb(179, 71, 71)';
        document.querySelector('.number').style.width = `30rem`;
    }
}

function checkScoreLow() {
    // user guess low
    if (score > 1) {
        document.querySelector(`.message`).textContent = `Your guess is low!`;
        score--;
        document.querySelector('.label-score').textContent = `Score: ${score}`;
    } else {
        document.querySelector(`.message`).textContent = `You lost the game!`;
        document.querySelector('.label-score').textContent = `Score: ${score = 0}`;
        document.querySelector('body').style.backgroundColor = 'rgb(179, 71, 71)';
        document.querySelector('.number').style.width = `30rem`;
    }
}

//fuction to check highscore
function checkHighScore() {
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = `${highScore}`;
    }
}

// event listener / conditions of the game
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //user did not input answer
    if (!guess) {
        document.querySelector('.message').textContent = `Please Input number!`;
        //user wins
    } else if (guess === secretNum) {
        document.querySelector(`.message`).textContent = `Your guess is correct!`;
        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = `30rem`;
        document.querySelector('.number').textContent = secretNum;
        checkHighScore();
    } else if (guess < secretNum) {
        checkScoreLow();
    } else {
        checkScoreHigh();
    }
});

// event listener to reset the game
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.label-score').textContent = `Score: ${score =20}`;
    document.querySelector('.guess').value = ``;
    document.querySelector('body').style.backgroundColor = `#222`;
    document.querySelector('.number').style.width = `15rem`;
    document.querySelector('.number').textContent = `?`;
    secretNum = Math.trunc(Math.random() * 20) + 1;
});