import cloudy from '../images/cloudy.png'
import sunny from '../images/sunny.png'
import rainy from '../images/rain.png'

export default function changeImage(condition) {
    const newImage = document.querySelector('img')
    if (condition === 'Mist' || condition === 'Partly cloudy' || condition === 'Cloudy') {
        newImage.src = cloudy
    } else if (condition === 'Sunny' || condition === 'Clear'){
        newImage.src = sunny
    } else if (condition === 'Rain' || condition === 'Patchy rain nearby'){
        newImage.src = rainy
    }
}