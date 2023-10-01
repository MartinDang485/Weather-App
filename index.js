
import WEATHER_API_KEY from "./apikey.js";

//Query Selectors
let city = document.querySelector('.search'); //class
let temp = document.querySelector('#temperature');
let humidity = document.querySelector('#humidity');
let windspeed = document.querySelector('#windspeed');
let cityText = document.querySelector('.city-text');
let cloudy = document.querySelector('#cloudy');


function fetchWeather(city) { //Parameter city passed in, so the api knows what city to get info for
        fetch('https://api.weatherapi.com/v1/current.json?key='+WEATHER_API_KEY+'&q=' + city)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            cityText.textContent = 'Weather in ' + data.location.name;
            temp.textContent = data.current.temp_f + ' F';
            cloudy.textContent = data.current.condition.text;
            humidity.textContent = 'Humdidity: ' + data.current.humidity;
            windspeed.textContent = 'Windspeed: ' + data.current.wind_mph + 'mph';
        })
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    fetchWeather(city.value);
}) //city.value is the input put in by user, which is the city as a parameter






