const inputEl = document.querySelector("#input-el")
const convertBtn = document.querySelector("#convert-btn")
const lengthEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")

const convert = (valNum) =>
{
    if (!valNum){valNum = 0}

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
    massEl.innerText = `${valNum} kilos = ${feet.toFixed(3)} pounds | ${valNum} pounds = ${kilos.toFixed(3)} kilos`
}

convertBtn.addEventListener("click", () => convert(inputEl.value))
document.addEventListener("keydown", (e) => {if (e.key === "Enter"){convert(inputEl.value)}})