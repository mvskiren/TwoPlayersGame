'use strict'
let random;
var buttons = document.querySelectorAll('.btn');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var image = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');
var current0 = document.querySelector('#current--0');
var current1 = document.querySelector('#current--1');
var score0 = document.querySelector('#score--0');
var score1 = document.querySelector('#score--1');

let currentScore, activePlayer, playing, scores;

const init = (() => {
    score0.textContent = 0;
    score1.textContent = 0;
    image.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];

})(); //immedeiately invoked function;


const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    image.classList.add('hidden');
}


btnRoll.addEventListener('click', () => {
    console.log(playing);
    if (playing) {
        console.log("exexcuted");
        random = Math.trunc(Math.random() * 6 + 1);
        console.log(random);
        image.classList.remove('hidden');
        image.src = `dice-${random}.png`;

        if (random !== 1) {
            currentScore += random;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();

        }
    }

})

btnHold.addEventListener('click', () => {
    if (playing) {
        scores[activePlayer] += currentScore;
        console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        scores[activePlayer];
        if (scores[activePlayer] >= 50) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            image.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', () => {
    console.log("hello");
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    init();
});