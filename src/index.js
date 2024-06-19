import './style.css'
import changeTime from './changeTime.js'
import changeLocation from './changeLocation.js'
import changeTemperature from './changeTemperature.js'
import changeCondition from './changeCondition.js'
import changeImage from './changeImage.js'


console.log('he  llo')
async function weatherOfLocation(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a1bb61ddca7149229b3145231240306&q=${location}`, {mode: 'cors'})
    response.json().then(function(response) {

        const location = response.location.name
        const time = response.location.localtime
        const temperatureDegrees = response.current.temp_c
        const condition = response.current.condition.text
        console.log(location, time, temperatureDegrees, condition )

        changeTime(time)
        changeImage(condition)
        changeTemperature(temperatureDegrees)
        changeCondition(condition)
        changeLocation(location)


        
    })
    .catch(function() {
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