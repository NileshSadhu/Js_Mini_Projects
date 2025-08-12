document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const weatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const errorMesssge = document.getElementById("error-message");

    const API_KEY = "";

    weatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();
        console.log(city);
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    })

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        console.log(data);
        const { name, main, weather } = data;

        cityName.textContent = name;
        temperature.textContent = `Temperature : ${main.temp}`;
        description.textContent = `Description : ${weather[0].description}`;

        weatherInfo.classList.remove("hidden");
        errorMesssge.classList.add("hidden");
    }

    function showError() {
        weatherInfo.classList.add("hidden");
        errorMesssge.classList.remove("hidden");
    }
})