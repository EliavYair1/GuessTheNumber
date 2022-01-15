'use strict';

let secretNumber = Math.trunc(Math.random() * 20) * 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {


  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!⛔';

    score--;
    document.querySelector('.score').textContent = score;

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳Correct Number!✔️';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the number is too high
  } else if (guess > secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {

      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = 'Game Over😭';
      document.querySelector('.score').textContent = 0;
    }
    // when the number is too low
  } else if (guess < secretNumber) {
    if (score >= 1) {

      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = 'Game Over😭';
      document.querySelector('.score').textContent = 0;
    }
  }

})

document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) * 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
document.querySelector('.again').addEventListener('dblclick', function (e) {
  window.location.reload()

});