import { showTime } from './time.js';
import { showGreeting } from './greeting.js';
import { setBg } from './image-slider.js';
import { getWeather, getLocaleStorage } from './weather.js';
import { getQuotes, changeQuote } from './day-quote.js';

const city = document.querySelector('.city');
const changeQuoteElement = document.querySelector('.change-quote');

showTime();
showGreeting();
document.addEventListener('DOMContentLoaded', () => {
    setBg();
    getLocaleStorage();
    getWeather(city)
});
city.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather(city)
    }
})
getQuotes();
changeQuoteElement.addEventListener('click', changeQuote);