import './style.css'
import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import rainy from '../images/rain.png'


console.log('he  llo')
console.log(cloudy)
async function weatherOfLocation(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a1bb61ddca7149229b3145231240306&q=${location}`, {mode: 'cors'})
    response.json().then(function(response) {
        const location = response.location.name
        const time = response.location.localtime
        const temperatureDegrees = response.current.temp_c
        const condition = response.current.condition.text
        console.log(location, time, temperatureDegrees, condition )

        const weatherOfNewLocation = new locationWeather(location, time, temperatureDegrees, condition)
        weatherOfNewLocation.changeTime()
        weatherOfNewLocation.changeLocation()
        weatherOfNewLocation.changeTemperature()
        weatherOfNewLocation.changeCondition()
        weatherOfNewLocation.changeImage()
    })
    .catch(function(err) {
        alert('Enter a real city')
    })
}

weatherOfLocation('london')

const submit = document.querySelector('.submit')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    const locationInput = document.querySelector('#location')
    const locationValue = locationInput.value
    weatherOfLocation(locationValue)
})


class locationWeather {
    constructor(location, time, temperature, condition) {
        this.location = location
        this.time = time
        this.temperature = temperature
        this.condition = condition
    }

    changeTime() {
        const newTime = document.querySelector('.date')
        newTime.textContent = this.time
    }

    changeLocation() {
        const newLocation = document.querySelector('.location')
        newLocation.textContent = this.location
    }

    changeTemperature() {
        const newTemperature = document.querySelector('.temperature')
        newTemperature.textContent = `${this.temperature}°`
    }

    changeCondition() {
        const newCondition = document.querySelector('.conditionText')
        newCondition.textContent = this.condition
    }

    sayhi() {
        console.log('hello')
    }

    changeImage() {
        const newImage = document.querySelector('img')
        if (this.condition === 'Mist' || this.condition === 'Partly cloudy' || this.condition === 'Cloudy') {
            newImage.src = cloudy
        } else if (this.condition === 'Sunny' || this.condition === 'Clear'){
            newImage.src = sunny
        } else if (this.condition === 'Rain' || this.condition === 'Patchy rain nearby'){
            newImage.src = rainy
        }
    }
}
