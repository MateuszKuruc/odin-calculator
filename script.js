const previousNumber = document.querySelector('.previousNumber');
const currentNumber = document.querySelector('.currentNumber');
const operator = document.querySelector('.operator');
const operatorButtons = document.querySelectorAll('.mathButton');
const equalsButton = document.querySelector('.equalsButton');
const digits = document.querySelectorAll('.digits')
const clearButton = document.querySelector('.clearButton');

for (let i = 0; i < operatorButtons.length; i++) {
    const operatorButton = operatorButtons[i];
    operatorButton.addEventListener('click', operate)
}

for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    digit.addEventListener('click', displayNumbers);
}

equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);

let result = '';

function displayNumbers() {
    currentNumber.innerHTML += this.textContent;
    
}

function operate() {
previousNumber.innerHTML = currentNumber.innerHTML;
operator.innerHTML = this.innerHTML;
currentNumber.innerHTML = '';
}

function showResult() {
  
};

function clearScreen() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    operator.innerHTML = '';
}