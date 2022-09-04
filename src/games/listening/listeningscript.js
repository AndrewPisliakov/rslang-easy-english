const levels = [1, 2, 3, 4, 5, 6];
const main = document.getElementById('main');
const screen1 = document.createElement('section');
const description = document.createElement('p');
const descriptionText = `
  Добро пожаловать в игру 'AudioCall' !
  Вам будет последовательно предложено прослушать 20 слов
  с пятью вариантоми перевода для каждого.
  Ваша задача - выбрать правильный вариант перевода.
  Для старта игры выберите уровень сложности,
  нажав одну из кнопок ниже.
  Поехали!
  `;
const buttonSet = document.createElement('div');
const screen2 = document.createElement('section');
// const timer = document.createElement('div');
const successLine = document.createElement('div');
// const wordSpan = document.createElement('span');
// const translationSpan = document.createElement('span');
// const choiceButtons = document.createElement('div');
// const rightButton = document.createElement('button');
// const wrongButton = document.createElement('button');
// const rightAnswerSound = document.createElement('audio');
// const wrongAnswerSound = document.createElement('audio');
const screen3 = document.createElement('section');
const successLineBox = document.createElement('div');
const results = document.createElement('div');
const rightAnswersTableTitle = document.createElement('h3');
const rightAnswersTable = document.createElement('table');
const wrongAnswersTableTitle = document.createElement('h3');
const wrongAnswersTable = document.createElement('table');
const endButtons = document.createElement('div');
const playAgainButton = document.createElement('button');
const linkToMain = document.createElement('a');
const exitButton = document.createElement('button');

let difficulty;
const words = [];
const translations = [];

let count = -1;
let answer;
let rightAnswersNumber = 0;
let wrongAnswersNumber = 0;

async function getPage() {
  const page = Math.floor(Math.random() * 30);
  const response = await fetch(`https://rslang-easy-english-be.herokuapp.com/words?page=${page}&group=${difficulty}`);
  const data = response.json();
  return data;
}

function finish() {
  
  screen2.style.display = 'none';
  screen3.style.display = 'flex';
  successLineBox.append(successLine);
  const rightAnswersSpan = document.createElement('span');
  rightAnswersSpan.innerText = rightAnswersNumber;
  rightAnswersTableTitle.append(rightAnswersSpan);
  const wrongAnswersSpan = document.createElement('span');
  wrongAnswersSpan.innerText = wrongAnswersNumber;
  wrongAnswersTableTitle.append(wrongAnswersSpan);
}

function toNextWord() {
  count++;
  if (count === 20) {
    finish();
  }
  answer = Boolean(Math.round(Math.random()));
  wordSpan.innerText = words[count];
  if (answer) {
    translationSpan.innerText = translations[count];
  } else {
    let j;
    do {
      j = Math.floor(Math.random() * 20);
    } while (j === count);
    translationSpan.innerText = translations[j];
  }
}

function pressRightButton() {
  const successSign = document.createElement('div');
  successSign.classList.add('success-sign');
  successLine.append(successSign);
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <tr>
      <td>${words[count]}</td>
      <td>${translations[count]}</td>
    </tr>
  `;
  if (answer) {
    rightAnswerSound.play();
    rightAnswersNumber++;
    successSign.style.backgroundColor = '#32CD32';
    rightAnswersTable.append(tableRow);
  } else {
    wrongAnswerSound.play();
    wrongAnswersNumber++;
    successSign.style.backgroundColor = '#FF6347';
    wrongAnswersTable.append(tableRow);
  }
  toNextWord();
}

function pressWrongButton() {
  const successSign = document.createElement('div');
  successSign.classList.add('success-sign');
  successLine.append(successSign);
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <tr>
      <td>${words[count]}</td>
      <td>${translations[count]}</td>
    </tr>
  `;
  if (answer) {
    wrongAnswerSound.play();
    wrongAnswersNumber++;
    successSign.style.backgroundColor = '#FF6347';
    wrongAnswersTable.append(tableRow);
  } else {
    rightAnswerSound.play();
    rightAnswersNumber++;
    successSign.style.backgroundColor = '#32CD32';
    rightAnswersTable.append(tableRow);
  }
  toNextWord();
}

async function play() {
  const data = await getPage();
  data.forEach((item) => {
    words.push(item.word);
    translations.push(item.wordTranslate);
  });
  toNextWord();
}

function clear() {
  words.length = 0;
  translations.length = 0;
  count = -1;
  rightAnswersNumber = 0;
  wrongAnswersNumber = 0;
  while (successLine.firstChild) {
    successLine.removeChild(successLine.firstChild);
  }
  successLineBox.removeChild(successLineBox.firstChild);
  time = 60;
}

screen1.classList.add('screen', 'screen1');
description.innerText = descriptionText;
buttonSet.classList.add('button-set');
levels.forEach((item) => {
  const button = document.createElement('button');
  button.innerText = item;
  button.classList.add('button', `button-${item}`);
  button.addEventListener('click', () => {
    screen1.style.display = 'none';
    screen2.style.display = 'flex';
    difficulty = item - 1;
    play();
  });
  buttonSet.append(button);
});
screen1.append(description, buttonSet);
screen2.classList.add('screen', 'screen2');
// timer.classList.add('timer');
successLine.classList.add('success-line');
// wordSpan.classList.add('word-span');
// translationSpan.classList.add('translation-span');
// choiceButtons.classList.add('choice');
// rightButton.innerText = 'ВЕРНО';
// rightButton.classList.add('choice-button', 'right-button');
// rightButton.addEventListener('click', pressRightButton);
// wrongButton.innerText = 'НЕВЕРНО';
// wrongButton.classList.add('choice-button', 'wrong-button');
// wrongButton.addEventListener('click', pressWrongButton);
// rightAnswerSound.setAttribute('src', './assets/sounds/rightanswer.mp3');
// wrongAnswerSound.setAttribute('src', './assets/sounds/wronganswer.mp3');
// choiceButtons.append(rightButton, wrongButton);
// screen2.append(timer, successLine, wordSpan, translationSpan, choiceButtons);
screen3.classList.add('screen', 'screen3');
successLineBox.classList.add('success-line-box');
rightAnswersTableTitle.innerText = 'Я знаю ';
wrongAnswersTableTitle.innerText = 'Я не знаю ';
results.classList.add('results-list');
results.append(rightAnswersTableTitle, rightAnswersTable, wrongAnswersTableTitle, wrongAnswersTable);
endButtons.classList.add('end-buttons-box');
playAgainButton.classList.add('end-button');
playAgainButton.innerText = 'ИГРАТЬ СНОВА';
playAgainButton.addEventListener('click', () => {
  clear();
  screen1.style.display = 'flex';
  screen2.style.display = 'none';
  screen3.style.display = 'none';
});
exitButton.classList.add('end-button');
exitButton.innerText = 'НА ГЛАВНУЮ';
linkToMain.href = '../../index.html';
linkToMain.append(exitButton);
endButtons.append(playAgainButton, linkToMain);
screen3.append(successLineBox, results, endButtons);

screen1.style.display = 'flex';
screen2.style.display = 'none';
screen3.style.display = 'none';

main.append(screen1, screen2, screen3);
