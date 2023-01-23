/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


function render() {
         let num = inputEl.value * 1;
    length.textContent = `${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = ${(num / 3.281).toFixed(3)}` 
    
    volume.textContent = `${num} liter = ${(num * 0.264).toFixed(3)} gallons| ${num} gallons = ${(num / 0.264).toFixed(3)}`
    
    mass.textContent =  `${num} kilos = ${(num * 2.204).toFixed(3)} pound | ${num} feet = ${(num / 2.204).toFixed(3)}`   
    
    console.log(typeof num)

}

convertBtn.addEventListener("click", render)