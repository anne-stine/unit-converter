//#region --- Metric/Imperial Unit Conversion

// Grab all elements
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


// Conversions triggered oninput

function convert(valNum) {

    // Convert length
    feet = valNum * 3.281
    meters = valNum / 3.281
    lengthEl.innerText = valNum + " meters" + " = " + feet.toFixed(3) + " feet" + " | " + valNum + " feet" + " = " + meters.toFixed(3) + " meters"
    
    // Convert volume
    gallons = valNum * 0.264
    liters = valNum / 0.264
    volumeEl.innerText = valNum + " liters" + " = " + gallons.toFixed(3) + " gallons" + " | " + valNum + " gallons" + " = " + liters.toFixed(3) + " liters"
    
    // Convert mass
    pounds = valNum * 2.205
    kilos = valNum / 2.205
    massEl.innerText = valNum + " kilos" + " = " + pounds.toFixed(3) + " pounds" + " | " + valNum + " pounds" + " = " + kilos.toFixed(3) + " kilos"

    // Let value be 0 if input is empty
    if (valNum == "") {
        valNum = 0
    }

    // Change plural words into singular words if value is 1
    if (valNum == 1) {
        
    }
}

//#endregion