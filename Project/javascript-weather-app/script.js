const cityInput = document.getElementById('cityInput')
const searchBtn = document.getElementById('searchBtn')
const loadingIndicator = document.getElementById('loadingIndicator')
const errorMessage = document.getElementById('errorMessage')
const weatherResult = document.getElementById('weatherResult')

const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search?name='
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

const weatherCodeMap = {
    0: { text: 'Clear Sky (Sunny)', icon: '☀️' },
    1: { text: 'Mostly Clear', icon: '🌤️' },
    2: { text: 'Partly Cloudy', icon: '⛅' },
    3: { text: 'Cloudy (Badal)', icon: '☁️' },
    45: { text: 'Foggy', icon: '🌫️' },
    48: { text: 'Foggy', icon: '🌫️' },
    51: { text: 'Light Drizzle', icon: '🌦️' },
    53: { text: 'Drizzle', icon: '🌦️' },
    55: { text: 'Heavy Drizzle', icon: '🌦️' },
    61: { text: 'Light Rain (Baarish)', icon: '🌧️' },
    63: { text: 'Rain (Baarish)', icon: '🌧️' },
    65: { text: 'Heavy Rain', icon: '🌧️' },
    71: { text: 'Light Snow', icon: '🌨️' },
    73: { text: 'Snow', icon: '🌨️' },
    75: { text: 'Heavy Snow', icon: '❄️' },
    80: { text: 'Rain Showers', icon: '🌦️' },
    81: { text: 'Rain Showers', icon: '🌦️' },
    82: { text: 'Heavy Rain Showers', icon: '⛈️' },
    95: { text: 'Thunderstorm', icon: '⛈️' },
    96: { text: 'Thunderstorm with Hail', icon: '⛈️' },
    99: { text: 'Thunderstorm with Hail', icon: '⛈️' }
}

function getWeatherInfo(code){
    return weatherCodeMap[code] || { text: 'Unknown', icon: '❓' }
}

function showLoading(){
    loadingIndicator.classList.remove('hidden')
    weatherResult.innerHTML = ''
    errorMessage.classList.add('hidden')
}

function hideLoading(){
    loadingIndicator.classList.add('hidden')
}

function showError(message){
    hideLoading()
    errorMessage.textContent = `Oops: ${message}`
    errorMessage.classList.remove('hidden')
}

async function getCoordinates(city){
    const response = await fetch(`${GEOCODE_URL}${city}`)

    if(!response.ok){
        throw new Error(`Server returned status: ${response.status}`)
    }

    const data = await response.json()
    if(!data.results || data.results.length === 0){
        throw new Error('City not found')
    }

    const place = data.results[0]
    return {
        latitude: place.latitude,
        longitude: place.longitude,
        name: place.name,
        country: place.country
    }
}

async function getWeather(latitude, longitude){
    const url = `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    const response = await fetch(url)

    if(!response.ok){
        throw new Error(`Server returned status: ${response.status}`)
    }

    const data = await response.json()
    return data.current_weather
}

function renderWeather(place, weather){
    hideLoading()

    const dayOrNight = weather.is_day === 1 ? 'Day (Din)' : 'Night (Raat)'

    const condition = getWeatherInfo(weather.weathercode)

    weatherResult.innerHTML =
    `
    <div class="weather-card">
        <h2>${place.name}, ${place.country}</h2>
        <div class="weather-icon">${condition.icon}</div>
        <p>${condition.text}</p>
        <p>Time: ${dayOrNight}</p>
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Wind Speed: ${weather.windspeed} km/h</p>
    </div>
    `
}

async function fetchWeather(city){
    if(city === ''){
        showError('Please enter a city name')
        return
    }

    showLoading()

    try {
        const place = await getCoordinates(city)
        const weather = await getWeather(place.latitude, place.longitude)
        renderWeather(place, weather)
    } catch (error) {
        console.log('fetch process failed:', error)
        showError(error.message)
    }
}
searchBtn.addEventListener('click', ()=>{
    const city = cityInput.value.trim()
    fetchWeather(city)
})

cityInput.addEventListener('keyup', (event)=>{
    if(event.key === 'Enter'){
        fetchWeather(cityInput.value.trim())
    }
})