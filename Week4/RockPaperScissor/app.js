const choices = ['rock', 'paper', 'scissors'];
const choiceButtons = document.querySelectorAll('.choice');
const resultMessage = document.getElementById('resultMessage');

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = getResult(userChoice, computerChoice);
        resultMessage.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    });
});

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}