const display = document.querySelector('.display');
const list = document.querySelector('.list');
const listSum = document.querySelector(".list-sum")
const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn');
const saveBtn = document.querySelector('.save-btn');
const rebootBtn = document.querySelector('.reboot-btn');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
saveBtn.addEventListener('click', save);
rebootBtn.addEventListener('dblclick', reboot);

let stored = [];
let count = null
let sum = 0

function increment() {
  count++;
  display.textContent = count;
}

function decrement() {
  count > 0 ? count-- : (count = 0);
  display.textContent = count;
}

function save() {
  stored.push(count);
  sum = stored.reduce((a, b) => a + b, 0);
  //  list.textContent = stored
  list.innerHTML += `<li>${count}</li>`
  listSum.textContent = sum
  display.textContent = count = 0;
}

function reboot() {
  const confirmAction = confirm("This action will delete all the information stored. Do you want to continue?")
  if (confirmAction) {
    count = 0;
    stored = [];
    list.textContent = stored;
    listSum.textContent = 0
    // localStorage.clear()
  }
}
