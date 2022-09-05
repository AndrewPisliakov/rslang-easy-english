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
const successLine = document.createElement('div');
const wordDataBox = document.createElement('div');
const audioButtonBox = document.createElement('div');
const imageBox = document.createElement('div');
const wordBox = document.createElement('div');
const wordAudioButtonSpan = document.createElement('span');
const wordSpan = document.createElement('span');
const transcriptionSpan = document.createElement('span');
const exampleBox = document.createElement('div');
const exampleAudioButtonSpan = document.createElement('span');
const textExampleSpan = document.createElement('span');
const exampleTranslateBox = document.createElement('div');
const exampleTranslateSpan = document.createElement('span');
const choice = document.createElement('div');
const dontKnowButton = document.createElement('button');
const nextButton = document.createElement('button');
const rightAnswerSound = document.createElement('audio');
const wrongAnswerSound = document.createElement('audio');

const screen3 = document.createElement('section');
const successLineBox2 = document.createElement('div');
const successLineBox3 = document.createElement('div');
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
const transcriptions = [];
const translations = [];
const audioURLs = [];
const imageURLs = [];
const textExamples = [];
const audioExampleURLs = [];
const textExampleTranslations = [];
const choiceButtons = [];

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
  successLineBox3.append(successLine);
  const rightAnswersSpan = document.createElement('span');
  rightAnswersSpan.classList.add('right-answer-span');
  rightAnswersSpan.innerText = rightAnswersNumber;
  rightAnswersTableTitle.append(rightAnswersSpan);
  const wrongAnswersSpan = document.createElement('span');
  wrongAnswersSpan.classList.add('wrong-answer-span');
  wrongAnswersSpan.innerText = wrongAnswersNumber;
  wrongAnswersTableTitle.append(wrongAnswersSpan);
}

function pressChoiceButton() {
  const successSign = document.createElement('div');
  successSign.classList.add('success-sign');
  successLine.append(successSign);
  const tableRow = document.createElement('tr');
  const firstCell = document.createElement('td');
  const playButton = document.createElement('button');
  playButton.classList.add('audio-play-button');
  const playButtonImg = document.createElement('img');
  playButtonImg.src = './assets/audio.svg';
  playButton.append(playButtonImg);
  const url = audioURLs[count];
  playButton.addEventListener('click', () => {
    const audio = new Audio();
    audio.src = `https://rslang-easy-english-be.herokuapp.com/${url}`;
    audio.play();
  });
  firstCell.append(playButton);
  const secondCell = document.createElement('td');
  secondCell.classList.add('second-sell');
  secondCell.innerText = words[count];
  const thirdCell = document.createElement('td');
  thirdCell.innerText = translations[count];
  tableRow.append(firstCell, secondCell, thirdCell);
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
}

function toNextWord() {
  count++;
  if (count === 20) {
    finish();
  }
  if (audioButtonBox.firstChild) {
    audioButtonBox.removeChild(audioButtonBox.firstChild);
  }
  if (imageBox.firstChild) {
    imageBox.removeChild(imageBox.firstChild);
  }
  if (wordAudioButtonSpan.firstChild) {
    wordAudioButtonSpan.removeChild(wordAudioButtonSpan.firstChild);
  }
  if (exampleAudioButtonSpan.firstChild) {
    exampleAudioButtonSpan.removeChild(exampleAudioButtonSpan.firstChild);
  }
  audioButtonBox.style.display = 'block';
  imageBox.style.display = 'none';
  const playButton = document.createElement('button');
  playButton.classList.add('big-audio-play-button');
  const playButtonImg = document.createElement('img');
  playButtonImg.src = './assets/audio.svg';
  playButton.append(playButtonImg);
  const wordAudioURL = audioURLs[count];
  playButton.addEventListener('click', () => {
    const audio = new Audio();
    audio.src = `https://rslang-easy-english-be.herokuapp.com/${wordAudioURL}`;
    audio.play();
  });
  audioButtonBox.append(playButton);
  const img = document.createElement('img');
  img.classList.add('word-image');
  img.src = `https://rslang-easy-english-be.herokuapp.com/${imageURLs[count]}`;
  img.alt = words[count];
  imageBox.append(img);
  const smallPlayButton = document.createElement('button');
  smallPlayButton.classList.add('small-audio-play-button');
  const smallPlayButtonImg = document.createElement('img');
  smallPlayButtonImg.src = './assets/audio.svg';
  smallPlayButton.append(smallPlayButtonImg);
  smallPlayButton.addEventListener('click', () => {
    const audio = new Audio();
    audio.src = `https://rslang-easy-english-be.herokuapp.com/${wordAudioURL}`;
    audio.play();
  });
  wordAudioButtonSpan.append(smallPlayButton);
  wordSpan.innerText = words[count];
  transcriptionSpan.innerText = transcriptions[count];

  const examplePlayButton = document.createElement('button');
  examplePlayButton.classList.add('small-audio-play-button');
  const examplePlayButtonImg = document.createElement('img');
  examplePlayButtonImg.src = './assets/audio.svg';
  examplePlayButton.append(examplePlayButtonImg);
  const exampleAudioURL = audioExampleURLs[count];
  examplePlayButton.addEventListener('click', () => {
    const audio = new Audio();
    audio.src = `https://rslang-easy-english-be.herokuapp.com/${exampleAudioURL}`;
    audio.play();
  });
  exampleAudioButtonSpan.append(examplePlayButton);

  textExampleSpan.innerHTML = textExamples[count];
  exampleTranslateSpan.innerText = textExampleTranslations[count];
  imageBox.style.display = 'none';
  wordBox.style.display = 'none';
  exampleBox.style.display = 'none';
  exampleTranslateBox.style.display = 'none';
  const variants = [];
  variants.push(count);
  for (let i = 1; i <= 4; i++) {
    const j = Math.floor(Math.random() * 20);
    if (variants.includes(j)) {
      i--;
    } else {
      variants.push(j);
    }
  }
  for (let i = variants.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [variants[i], variants[j]] = [variants[j], variants[i]];
  }
  variants.forEach((item) => {
    const button = document.createElement('button');
    choiceButtons.push(button);
    button.innerText = translations[item].toUpperCase();
    button.classList.add('variant-button');
    button.addEventListener('click', () => {
      audioButtonBox.style.display = 'none';
      imageBox.style.display = 'block';
      wordBox.style.display = 'flex';
      exampleBox.style.display = 'flex';
      exampleTranslateBox.style.display = 'block';
      if (button.innerText === translations[count].toUpperCase()) {
        button.style.backgroundColor = '#32CD32';
        answer = true;
        pressChoiceButton();
      } else {
        button.style.backgroundColor = '#FF6347';
        choiceButtons.forEach((btn) => {
          if (btn.innerText === translations[count].toUpperCase()) {
            btn.style.backgroundColor = '#32CD32';
          }
        });
        answer = false;
        pressChoiceButton();
      }
      choiceButtons.forEach((btn) => {
        btn.disabled = 'true';
      });
      dontKnowButton.style.display = 'none';
      nextButton.style.display = 'block';
    });
    choice.append(button);
  });
}

async function play() {
  const data = await getPage();
  data.forEach((item) => {
    words.push(item.word);
    transcriptions.push(item.transcription);
    translations.push(item.wordTranslate);
    audioURLs.push(item.audio);
    imageURLs.push(item.image);
    textExamples.push(item.textExample);
    audioExampleURLs.push(item.audioExample);
    textExampleTranslations.push(item.textExampleTranslate);
  });
  toNextWord();
}

function dontKnow() {
  audioButtonBox.style.display = 'none';
  imageBox.style.display = 'block';
  wordBox.style.display = 'flex';
  exampleBox.style.display = 'flex';
  exampleTranslateBox.style.display = 'block';
  choiceButtons.forEach((btn) => {
    if (btn.innerText === translations[count].toUpperCase()) {
      btn.style.backgroundColor = '#32CD32';
    }
  });
  answer = false;
  pressChoiceButton();
  dontKnowButton.style.display = 'none';
  nextButton.style.display = 'block';
}

function continueToNextWord() {
  choiceButtons.length = 0;
  while (choice.firstChild) {
    choice.removeChild(choice.firstChild);
  }
  dontKnowButton.style.display = 'block';
  nextButton.style.display = 'none';
  toNextWord();
}

function clear() {
  words.length = 0;
  transcriptions.length = 0;
  translations.length = 0;
  audioURLs.length = 0;
  imageURLs.length = 0;
  textExamples.length = 0;
  audioExampleURLs.length = 0;
  textExampleTranslations.length = 0;
  choiceButtons.length = 0;

  count = -1;
  rightAnswersNumber = 0;
  wrongAnswersNumber = 0;
  rightAnswersTableTitle.removeChild(rightAnswersTableTitle.lastChild);
  wrongAnswersTableTitle.removeChild(wrongAnswersTableTitle.lastChild);
  while (choice.firstChild) {
    choice.removeChild(choice.firstChild);
  }
  while (successLine.firstChild) {
    successLine.removeChild(successLine.firstChild);
  }
  while (rightAnswersTable.firstChild) {
    rightAnswersTable.removeChild(rightAnswersTable.firstChild);
  }
  while (wrongAnswersTable.firstChild) {
    wrongAnswersTable.removeChild(wrongAnswersTable.firstChild);
  }
  successLineBox2.append(successLine);
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
successLineBox2.classList.add('success-line-box');
successLine.classList.add('success-line');
successLineBox2.append(successLine);
wordDataBox.classList.add('word-data-box');
audioButtonBox.classList.add('audio-button-box');
imageBox.classList.add('image-box');
wordSpan.classList.add('content-span');
transcriptionSpan.classList.add('content-span');
textExampleSpan.classList.add('content-span');
exampleTranslateSpan.classList.add('content-span');
wordBox.append(wordAudioButtonSpan, wordSpan, transcriptionSpan);
wordBox.classList.add('word-box');
exampleBox.append(exampleAudioButtonSpan, textExampleSpan);
exampleBox.classList.add('example-box');
exampleTranslateBox.append(exampleTranslateSpan);
wordDataBox.append(audioButtonBox, imageBox, wordBox, exampleBox, exampleTranslateBox);
choice.classList.add('choice');
rightAnswerSound.setAttribute('src', './assets/sounds/rightanswer.mp3');
wrongAnswerSound.setAttribute('src', './assets/sounds/wronganswer.mp3');
screen2.append(successLineBox2, wordDataBox, choice, dontKnowButton, nextButton);
dontKnowButton.classList.add('dont-know-button');
dontKnowButton.innerText = 'Я НЕ ЗНАЮ';
dontKnowButton.addEventListener('click', dontKnow);
nextButton.classList.add('next-button');
nextButton.innerText = 'ДАЛЬШЕ';
nextButton.style.display = 'none';
nextButton.addEventListener('click', continueToNextWord);

screen3.classList.add('screen', 'screen3');
successLineBox3.classList.add('success-line-box');
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
screen3.append(successLineBox3, results, endButtons);

screen1.style.display = 'flex';
screen2.style.display = 'none';
screen3.style.display = 'none';

main.append(screen1, screen2, screen3);
