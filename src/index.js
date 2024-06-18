console.log('he  llo')
 
async function weatherOfLocation(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a1bb61ddca7149229b3145231240306&q=${location}`, {mode: 'cors'})
    response.json().then(function(response) {
        const location = response.location.name
        const time = response.location.localtime
        const temperatureDegrees = response.current.temp_c
        const condition = response.current.condition.text
        console.log(location, time, temperatureDegrees, condition )
    })
    .catch(function(err) {
        alert('Enter a real city')
    })
}

const submit = document.querySelector('.submit')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    const locationInput = document.querySelector('#location')
    const locationValue = locationInput.value
    weatherOfLocation(locationValue)
})
