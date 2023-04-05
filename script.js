let firstNumber = 0;
let secondNumber = 0;
let operator
let resultNumber = 0;


let displayValue = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', allClear);


for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    digit.addEventListener('click', changeDisplay);
}

function changeDisplay() {
    let digitPressed = this.innerHTML
    displayValue.textContent = displayValue.textContent + digitPressed
    // digits.style.color = 'red';
    console.log(displayValue.textContent);
    return;
}

function allClear() {
    displayValue.textContent = ''
}



function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') return add(firstNumber, secondNumber);
    else if (operator === '-') return subtract(firstNumber, secondNumber);
    else if (operator === '*') return multiply(firstNumber, secondNumber);
    else if (operator === '/') return divide(firstNumber, secondNumber);   
}
