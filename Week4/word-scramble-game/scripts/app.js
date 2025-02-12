// filepath: scripts/app.js
const words = ['javascript', 'programming', 'developer', 'function', 'variable'];
let currentWord = '';
let scrambledWord = '';

const scrambledWordElement = document.getElementById('scrambledWord');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('resultMessage');
const newWordButton = document.getElementById('newWordButton');

function scrambleWord(word) {
    const scrambled = word.split('').sort(() => 0.5 - Math.random()).join('');
    return scrambled === word ? scrambleWord(word) : scrambled;
}

function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    scrambledWordElement.textContent = scrambledWord;
    guessInput.value = '';
    resultMessage.textContent = '';
}

guessButton.addEventListener('click', () => {
    const userGuess = guessInput.value.toLowerCase();
    if (userGuess === currentWord) {
        resultMessage.textContent = 'Congratulations! You guessed the correct word!';
    } else {
        resultMessage.textContent = 'Wrong guess! Try again.';
    }
});

newWordButton.addEventListener('click', setNewWord);

// Initialize the game with a new word
setNewWord();