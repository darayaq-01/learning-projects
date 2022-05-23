const form = document.querySelector("#pass-generator-form")

const result0 = document.querySelector("#result")
const result1 = document.querySelector("#result1")
const result2 = document.querySelector("#result2")
const result3 = document.querySelector("#result3")

const copyBtnClass = document.querySelector(".copy-btn-class")
const copyBtn0 = document.querySelector("#copy-btn")
const copyBtn1 = document.querySelector("#copy1-btn")
const copyBtn2 = document.querySelector("#copy2-btn")
const copyBtn3 = document.querySelector("#copy3-btn")


const lengthPass = document.querySelector("#length")
const upperCase = document.querySelector("#uppercase")
const numbersInclude = document.querySelector("#numbers")
const specialSymbols = document.querySelector("#symbols")

const UPPER_CODES = arrayMaxMin(65, 90)
const lOWER_CODES = arrayMaxMin(97, 122)
const NUMBER_CODES = arrayMaxMin(48, 57)
const SYMBOL_CODES = arrayMaxMin(33, 47)
    .concat(arrayMaxMin(58, 64))
    .concat(arrayMaxMin(91, 96))
    .concat(arrayMaxMin(123, 126))

form.addEventListener("submit", formFunc)
copyBtn0.addEventListener("click", copyFunc0)
copyBtn1.addEventListener("click", copyFunc1)
copyBtn2.addEventListener("click", copyFunc2)
copyBtn3.addEventListener("click", copyFunc3)

// features

// generate codes
function arrayMaxMin(low, high) {
    const arr = []
    for (let i = low; i <= high; i++) {
        arr.push(i)
    }
    return arr
}

// generate passwords
function formFunc(e) {
    e.preventDefault()
    const charAmount = lengthPass.value
    const includeUppercase = upperCase.checked
    const includeNumbers = numbersInclude.checked
    const includeSymbols = specialSymbols.checked
    const res = [result0, result1, result2, result3]

    for (let i of res) {
        i.innerText = generatePassword(
            charAmount,
            includeUppercase,
            includeNumbers,
            includeSymbols
        )
    }

}

let generatePassword = (
    charAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
) => {
    let charCodes = lOWER_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPER_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES)
    const passwordCharacters = []
    for (let i = 0; i < charAmount; i++) {
        const charCode =
            charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(charCode))
    }
    return passwordCharacters.join("")
}


// copy function
function copyGeneral(textarea, passwordToCopy) {
    if (!passwordToCopy) return

    textarea.value = passwordToCopy
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("Password copied to clipboard")
}

function copyFunc0() {
    const textarea = document.createElement("textarea")
    const passwordToCopy = result0.innerText
    copyGeneral(textarea, passwordToCopy)
}


function copyFunc1() {
    const textarea = document.createElement("textarea")
    const passwordToCopy = result1.innerText
    copyGeneral(textarea, passwordToCopy)
}

function copyFunc2() {
    const textarea = document.createElement("textarea")
    const passwordToCopy = result2.innerText
    copyGeneral(textarea, passwordToCopy)
}

function copyFunc3() {
    const textarea = document.createElement("textarea")
    const passwordToCopy = result3.innerText
    copyGeneral(textarea, passwordToCopy)
}