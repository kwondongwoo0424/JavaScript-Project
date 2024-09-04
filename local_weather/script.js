const API_KEY = "cb08452c030eb26df597f17a6f5acb75";
const form = document.querySelector('form')
const searchBox = document.querySelector('#citySearch')
const submitBtn = document.querySelector('#reading-glasses')
const tempBox = document.querySelector(".temperature")
const CityNameBox = document.querySelector(".CityName")
const SUNNY_ICON = document.querySelector('#sunny-icon')
const windBox = document.querySelector('.wind')
const windContainer = document.querySelector('.windSpeedBox')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let cityName = searchBox.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        windContainer.classList.remove('hidden')
        const weather = data.weather[0].main
        tempBox.innerText = (`${(data.main.temp).toFixed(1)}°C`)
        CityNameBox.innerText = data.name
        SUNNY_ICON.style.display = 'inline';
        const weatherDescription = data.weather[0].description;
        const windSpeed = `${(data.wind.speed).toFixed(1)} m/s`;
        console.log(windSpeed)
        const humidity = data.main.humidity;
        let weatherData = data.weather[0].icon;
        let weatherUri = 'https://openweathermap.org/img/wn/' + weatherData + '@2x.png';
        SUNNY_ICON.src = weatherUri;
        windBox.innerText=`${windSpeed} Wind speed`
    });
})

