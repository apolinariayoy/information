let numberFirst = document.getElementById('first');
let numberSecond = document.getElementById('second');
let input = document.getElementById('input');
let button = document.getElementById('buttun');
let result = document.getElementById('result');

function getRandomNumber() {
return Math.floor(Math.random() * 10)+1;
}

let randomFirst = getRandomNumber();
let randomSecond = getRandomNumber();

while (randomFirst === randomSecond || randomFirst % randomSecond !== 0) {
    randomFirst = getRandomNumber();
    randomSecond = getRandomNumber();
    }

numberFirst.textContent = randomFirst;
numberSecond.textContent = randomSecond;

function checkAnswer() {
const answer = parseInt(input.value);
const dev = Math.floor(randomFirst / randomSecond);
if (answer === dev) {
result.textContent = 'верно';
} else {
result.textContent = 'неверно';
}
}