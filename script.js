const fetchButton = document.getElementById('fetchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

fetchButton.addEventListener('click', () => {
    const cityName = cityInput.value;
    if (cityName) {
        fetchWeather(cityName);
    }
});

function fetchWeather(city) {
    const apiKey = 8c633262478aa74b31d199c1e208fb5c; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherText = `Current temperature: ${temperature}°C<br>Weather: ${description}`;
            weatherInfo.innerHTML = weatherText;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}
