const output = document.querySelector('#output');

const inputLength = document.querySelector('#inputLength');
const inputVolume = document.querySelector('#inputVolume');
const inputMass = document.querySelector('#inputMass');

// btn
const calc = document.querySelector('#calc');
const reset = document.querySelector('#reset');
const checkedBtn = document.querySelectorAll("input[name='inputs']");

let xNumber = 0;
let selected = null;

inputLength.addEventListener('change', (e) => {
  xNumber = e.target.value;
});
inputVolume.addEventListener('change', (e) => {
  xNumber = e.target.value;
});
inputMass.addEventListener('change', (e) => {
  xNumber = e.target.value;
});

calc.addEventListener('click', calculate);
reset.addEventListener('click', resetFunc);

const check = () => {
  for (const c of checkedBtn) {
    if (c.checked) {
      selected = c.id;
      break;
    }
  }
};

function resetFunc() {
  xNumber = 0;
  output.innerText = 0;
}

function calculate() {
  check();
  switch (selected) {
    case 'meter':
      result = xNumber * 0.3048;
      output.innerText = `${result.toFixed(2)} mt`;
      break;
    case 'feet':
      result = xNumber / 0.3048;
      output.innerText = `${result.toFixed(2)} ft`;
      break;
    case 'liters':
      result = xNumber / 0.264;
      output.innerText = `${result.toFixed(2)} lt`;
      break;
    case 'gallons':
      result = xNumber * 0.264;
      output.innerText = `${result.toFixed(2)} gl`;
      break;
    case 'kilograms':
      console.log('kilograms');
      result = xNumber * 0.4535;
      output.innerText = `${result.toFixed(2)} kg`;
      break;
    case 'pounds':
      console.log('punds');
      result = xNumber / 0.4535;
      output.innerText = `${result.toFixed(2)} pounds`;
      break;
    default:
      console.log('especify your option');
  }
}
