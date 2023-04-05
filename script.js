let firstNumber = 4;
let secondNumber = 5;
let operator = 0;
let result = 0;

if ((operator === '-' || operator === '+' || operator === 'X' || operator === '/') && firstNumber === 'number') {
    displayValue.textContent = '';
}

let displayValue = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', allClear);
const operatorButtons = document.querySelectorAll('.mathButton');
const equalsButton = document.querySelector('.equalsButton');
equalsButton.addEventListener('click', updateSecondNumber);

for (let i = 0; i < operatorButtons.length; i ++) {
    const operatorButton = operatorButtons[i];
    operatorButton.addEventListener('click', chooseOperator);
}


for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    digit.addEventListener('click', changeDisplay);
}

function changeDisplay() {
    let digitPressed = this.innerHTML;
    displayValue.textContent = displayValue.textContent + digitPressed
    // digits.style.color = 'red';
    console.log(displayValue.textContent);
    return;
}

function allClear() {
    displayValue.textContent = '';
}

function chooseOperator() {
    firstNumber = updateFirstNumber();
    console.log(firstNumber);
    let operatorChoice = this.innerHTML;
    switch(operatorChoice) {
        case '+':
            operator = '+';
            displayValue.textContent = '';
            break;
        case '-':
            operator = '-';
            displayValue.textContent = '';
            break;
        case 'X':
            operator = 'X';
            displayValue.textContent = '';
            break;
        case '/':
            operator = '/';
            displayValue.textContent = '';
            break;
        default:
            operator
    }
}

function updateFirstNumber() {
    let firstNumber = Number(displayValue.textContent);
    console.log(typeof firstNumber, firstNumber + ' is a firstNumber');
    displayValue.textContent = '';
    return firstNumber;
}

function add(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    displayValue.textContent = result;
    return result;
}

function subtract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    displayValue.textContent = result;
    return result;
}

function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    displayValue.textContent = result;
    return result;
}

function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    displayValue.textContent = result;
    return result;
}

function makeCalc(firstNumber, operator, secondNumber) {
    if (operator === '+') console.log(add(firstNumber, secondNumber));
    else if (operator === '-') subtract(firstNumber, secondNumber);
    else if (operator === 'X') multiply(firstNumber, secondNumber);
    else if (operator === '/') divide(firstNumber, secondNumber);   
}

function updateSecondNumber() {
    secondNumber = Number(displayValue.textContent);
    console.log(typeof secondNumber, secondNumber + ' is the second number');
    makeCalc(firstNumber, operator, secondNumber);
}