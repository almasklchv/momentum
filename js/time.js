const time = document.querySelector('.time');
const dateHtml = document.querySelector('.date');
const userLang = navigator.language || navigator.userLanguage; 


export function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    if (seconds < 10) {
        time.textContent = `${hours}:${minutes}:0${seconds}`;
    } if (hours < 10) {
        time.textContent = `0${hours}:${minutes}:${seconds}`;
    } else if (minutes < 10) {
        time.textContent = `${hours}:0${minutes}:${seconds}`;
    } else {
        time.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    showDate();
    setTimeout(showTime, 1000);   
}

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', weekday: 'long'};
    const currentDate = date.toLocaleDateString(userLang, options);
    dateHtml.textContent = currentDate;
}

