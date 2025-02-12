// This file contains the JavaScript logic for the number guessing game.

const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const resultMessage = document.getElementById('resultMessage');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
    } else {
        resultMessage.textContent = 'Too high! Try again.';
    }
});

let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
}

function checkGuess() {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = 'Congratulations! You guessed it right!';
    } else if (userGuess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    }
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('resetGame').addEventListener('click', startGame);

// Start the game when the page loads
window.onload = startGame;