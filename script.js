'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score0 = 0;
let score1 = 0;

// Initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player.
  if (dice !== 1) {
    score0 += dice;
    score0El.textContent = score0;
  } else {
  }
});
