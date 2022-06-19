const inputEl = document.querySelector("#input-el")
const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")
const temperatureEl = document.querySelector("#temperature-el")

const convert = (valNum) =>
{
    if (!valNum) valNum = 0

    // Convert length
    feet = valNum * 3.281
    meters = valNum / 3.281
    lengthEl.innerText = `${valNum} meters = ${feet.toFixed(3)} feet | ${valNum} feet = ${meters.toFixed(3)} meters`
    
    // Convert volume
    gallons = valNum * 0.264
    liters = valNum / 0.264
    volumeEl.innerText = `${valNum} liters = ${gallons.toFixed(3)} gallons | ${valNum} gallons = ${liters.toFixed(3)} liters`
    
    // Convert mass
    pounds = valNum * 2.205
    kilos = valNum / 2.205
    massEl.innerText = `${valNum} kilos = ${pounds.toFixed(3)} pounds | ${valNum} pounds = ${kilos.toFixed(3)} kilos`

    // Convert temperature
    fahrenheit = (valNum * (9 / 5)) + 32
    celcius = (valNum - 32) * 5 / 9
    temperatureEl.innerText = `${valNum}°C = ${fahrenheit.toFixed(0)}°F | ${valNum}°F = ${celcius.toFixed(0)}°C`
}

document.querySelector("#formUnitConvert").addEventListener("submit", (e) => 
{
    e.preventDefault()
    convert(inputEl.value)
    inputEl.blur()
})
