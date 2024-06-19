

export default function changeTemperature(temperature) {
    const newTemperature = document.querySelector('.temperature')
    newTemperature.textContent = `${temperature}°`
}