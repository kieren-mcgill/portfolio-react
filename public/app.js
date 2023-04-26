const today = new Date();
const timeOfDay = today.getHours();
const greetEl = document.getElementById('greet-el');
const timeStampEl  = document.getElementById('current-year')

if (timeOfDay < 12) {
    greetEl.textContent = 'Good morning.';
} else if (timeOfDay > 11 && timeOfDay < 18) {
    greetEl.textContent = 'Good afternoon.';
} else if (timeOfDay > 17) {
    greetEl.textContent = 'Good evening.';
}

timeStampEl.textContent = today.getFullYear().toString();