🌤️ Weather Search App

A simple, clean weather search app built with HTML, CSS, and vanilla JavaScript. Search any city in the world and get its current weather — temperature, wind speed, sky condition (sunny/cloudy/rainy/etc.), and whether it's day or night.

No frameworks, no API key, no signup required.

✨ Features


🔍 Search weather by city name
🌡️ Current temperature and wind speed
☀️🌧️☁️ Visual weather condition with icon (clear, cloudy, rain, snow, thunderstorm, etc.)
🌙 Day/Night indicator
⚡ Clean, centered, rounded-corner UI
❌ Error handling for invalid city names


🚀 Demo

Just open index.html in any browser — no build step, no server needed.

🛠️ Built With


HTML5
CSS3 (Flexbox)
Vanilla JavaScript (Fetch API, async/await)


🌐 APIs Used

This project uses Open-Meteo — a free, open-source weather API that requires no API key.

1. Geocoding API

Converts a city name into latitude/longitude coordinates.


Docs: https://open-meteo.com/en/docs/geocoding-api

Endpoint: https://geocoding-api.open-meteo.com/v1/search?name={city}


2. Weather Forecast API

Takes latitude/longitude and returns the current weather for that location.


Docs: https://open-meteo.com/en/docs

Endpoint: https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true


How it works:


User types a city name and hits search
App calls the Geocoding API to get that city's coordinates
App calls the Weather API with those coordinates
The returned weathercode (a number) is mapped to a readable condition + emoji
Result is rendered in a card showing temperature, wind speed, condition, and day/night


📂 Project Structure

weather-app/
├── index.html      # Page structure
├── style.css       # Styling
└── script.js       # Fetch logic + DOM rendering

📋 How to Run


Clone this repository
Open index.html in your browser
Type a city name and press Search (or hit Enter)


📝 License

This project is open source and free to use for learning purposes.
