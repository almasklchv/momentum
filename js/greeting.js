const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const date = new Date();
const hours = date.getHours();

export function getTimeOfDay() {
    if (hours >= 5 && hours <= 11) {
        return 'morning';
    } else if (hours >= 12 && hours <= 17) {
        return 'afternoon';
    } else if (hours >= 18 && hours <= 21) {
        return 'evening';
    } else if (hours >= 22 && hours <= 4) {
        return 'night';
    }
}

export function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;

    window.addEventListener('beforeunload', setLocaleStorage);
    window.addEventListener('load', getLocaleStorage);
}

function setLocaleStorage() {
    localStorage.setItem('name', name.value);
}

function getLocaleStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}