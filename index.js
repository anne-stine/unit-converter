//#region --- Metric/Imperial Unit Conversion

// Grab all elements

let valueEl = document.getElementsById("value-el").innerText

console.log(valueEl)

let getValue = document.getElementsByName("value")
let feetEl = document.getElementById("feet-el")
let gallonsEl = document.getElementById("gallons-el")
let poundsEl = document.getElementById("pounds-el")


// Define individual calculations

// 1 meter *3.281 = feet
// 1 feet /3.281 = meters

// 1 liter *0,264 = gallons
// 1 gallon /0,264 = liters

// 1 kilo *2.205 = pounds
// 1 pound /2.205 = kilos


function length() {
    getValue.innerText = valueEl + "meters"
    feetEl.innerText = valueEl * 3.281
}

function volume() {

}

function mass() {

}

// Trigger calculations

function convert() {
    length()
    volume()
    mass()
}


//#endregion