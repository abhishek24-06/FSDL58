const registrationForm = document.getElementById('registrationForm');
const resultMessage = document.getElementById('resultMessage');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const trainNumber = formData.get('trainNumber');
    const date = formData.get('date');
    const trainClass = formData.get('class');

    resultMessage.textContent = `Registration successful for ${name} (${email}) on train ${trainNumber} for ${date} in ${trainClass} class.`;
});