

const apiKey ="5348a5397850a2d381ddbd78c4af3a76"; // keep using your free key
const lat = 6.3350;
const lon = 5.6275;

// FREE API endpoints
const CURRENT_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather data not available");
    return response.json();
}

// ---------------- CURRENT WEATHER ----------------
function displayCurrentWeather(data) {
    const container = document.getElementById("current-weather");
    if (!container || !data) return;

    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const low = Math.round(data.main.temp_min);
    const high = Math.round(data.main.temp_max);

    // OpenWeather icon
    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Sunrise time
    const sunrise = new Date(data.sys.sunrise * 1000)
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    container.innerHTML = `
        <div class="weather-row">
            <img src="${iconURL}" alt="${description}">

            <div class="weather-info">
                <p class="temp">${temp}°C</p>
                <p>${description}</p>
                <p>Low: ${low}°C</p>
                <p>High: ${high}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Sunrise: ${sunrise}</p>
            </div>
        </div>
    `;
}

// ---------------- FORECAST (3 DAYS) ----------------
function displayForecast(data) {
    if (!data || !data.list) return;

    const forecastContainer = document.querySelector(".forecast");
    forecastContainer.innerHTML = "<h2>Weather Forecast</h2>";

    // 3-hour intervals → pick ~same time each day
    const dayIndexes = [8, 16, 24];

    dayIndexes.forEach(i => {
        const item = data.list[i];
        if (!item) return;

        const date = new Date(item.dt * 1000);
        const dayName = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        const p = document.createElement("p");
        p.textContent = `${dayName}: ${Math.round(item.main.temp)}°C`;

        forecastContainer.appendChild(p);
    });
}

// ---------------- SPOTLIGHT MEMBERS ----------------
async function getSpotlights() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Members data not available");
        const data = await response.json();

        // Filter only Gold (3) and Silver (2) members
        const premiumMembers = data.filter(member => member.membershipLevel === 3 || member.membershipLevel === 2);

        // Shuffle the array
        const shuffled = premiumMembers.sort(() => 0.5 - Math.random());

        // Pick 2 or 3 members randomly
        const spotlightMembers = shuffled.slice(0, Math.floor(Math.random() * 2) + 2);

        displaySpotlights(spotlightMembers);
    } catch (err) {
        console.error("Error fetching spotlight members:", err);
    }
}

function displaySpotlights(members) {
    const spotlightContainer = document.querySelector(".spotlight");
    spotlightContainer.innerHTML = ""; // Clear previous content

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="business-header">
                <h3>${member.name}</h3>
                <p>tagline</p>
            </div>
            <div class="business-info">
                <img src="images/${member.image}" alt="${member.name}" loading="lazy">
                <div class="contact-info">
                    <p><strong>EMAIL:</strong> ${member.email}</p>
                    <p><strong>PHONE:</strong> ${member.phone}</p>
                    <p><strong>URL:</strong> ${member.website}</p>
                </div>
            </div>
        `;

        spotlightContainer.appendChild(card);
    });
}


// ---------------- INIT ----------------
async function initWeather() {
    try {
        const currentData = await fetchJSON(CURRENT_URL);
        const forecastData = await fetchJSON(FORECAST_URL);

        displayCurrentWeather(currentData);
        displayForecast(forecastData);
    } catch (err) {
        console.error(err);
    }
}

initWeather();
getSpotlights();

