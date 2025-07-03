'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "ACES HAPIZ WINS";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 123;
console.log(document.querySelector('.guess').value);
*/

/*
add event listener example template
document.querySelector(' .check').addEventListener('click', function () {}
*/

// generates the random number
const secretNum = Math.trunc(Math.random() * 20) + 1;

// display the random number in the box
document.querySelector('.number').textContent = `?`;

//variable used for score counting 
let score = 20;

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

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.number').textContent = `?`;
    document.querySelector('.label-score').textContent = `Score: ${score =20}`;
    document.querySelector('.guess').value = ``;
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = `#222`;
    document.querySelector('.number').style.width = `15rem`;
    console.log('this is working');
});

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
    } else if (guess < secretNum) {
        checkScoreLow();
    } else {
        checkScoreHigh();
    }
});