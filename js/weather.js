const city = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

export async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=18c0a094855efd87e1f433b10157630e&units=metric   `;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    setLocaleStorage();
}

function setLocaleStorage() {
    localStorage.setItem('city', city.value)
    localStorage.setItem('weatherIcon', weatherIcon.classList);
    localStorage.setItem('temperature', temperature.textContent);
    localStorage.setItem('weatherDescription', weatherDescription.textContent);
    localStorage.setItem('wind', wind.textContent);
    localStorage.setItem('humidity', humidity.textContent);
}

export function getLocaleStorage() {
    if (localStorage.getItem('weatherIcon')) {
        city.value = localStorage.getItem('city');
        temperature.textContent = localStorage.getItem('temperature');
        weatherDescription.textContent = localStorage.getItem('weatherDescription');
        wind.textContent = localStorage.getItem('wind');
        humidity.textContent = localStorage.getItem('humidity');
    }
}