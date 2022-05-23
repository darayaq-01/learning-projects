document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
const foodSelect = document.querySelector("#food-select")
const transportSelect = document.querySelector("#transport-select")

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    // 2. Display the total cost in the cost-el span.
    let foodSelectValue = Number(foodSelect.value)
    let transportSelectValue = Number(transportSelect.value)
    let result = foodSelectValue + transportSelectValue
    costEl.innerText = result

}
