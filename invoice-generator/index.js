const washCarDisplay = document.querySelector(".wash-total")
const mowLawnDisplay = document.querySelector(".mow-total")
const pullWeedsDisplay = document.querySelector(".pull-total")
const totalDisplay = document.querySelector(".price-total")

// buttons
const washCarBtn = document.querySelector("#wash-car")
const mowLawnBtn = document.querySelector("#mow-lawn")
const pullWeedsBtn = document.querySelector("#pull-weeds")
const sendInvoiceBtn = document.querySelector(".send-invoice")

let services = 0

washCarBtn.addEventListener("click", washFunc)
mowLawnBtn.addEventListener("click", mowFunc)
pullWeedsBtn.addEventListener("click", pullFunc)
sendInvoiceBtn.addEventListener("click", invoiceFunc)

function washFunc() {
    washCarDisplay.textContent = 10
    services += 10
    totalDisplay.textContent = services
    washCarBtn.disabled = true;
}

function mowFunc() {
    mowLawnDisplay.textContent = 20
    services += 20
    totalDisplay.textContent = services
    mowLawnBtn.disabled = true;
}

function pullFunc() {
    pullWeedsDisplay.textContent = 30
    services += 30
    totalDisplay.textContent = services
    pullWeedsBtn.disabled = true;
}

function invoiceFunc() {
    // totalDisplay.textContent = services
    services = 0
    totalDisplay.textContent = services
    washCarBtn.disabled = false;    
    mowLawnBtn.disabled = false
    pullWeedsBtn.disabled = false;
}