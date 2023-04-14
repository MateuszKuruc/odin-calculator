const previousNumber = document.querySelector(".previousNumber");
const currentNumber = document.querySelector(".currentNumber");
const operator = document.querySelector(".operator");
const operatorButtons = document.querySelectorAll(".mathButton");
const equalsButton = document.querySelector(".equalsButton");
const digits = document.querySelectorAll(".digits");
const clearButton = document.querySelector(".clearButton");
const deleteButton = document.querySelector('.delete')

for (let i = 0; i < operatorButtons.length; i++) {
  const operatorButton = operatorButtons[i];
  operatorButton.addEventListener("click", operate);
}

for (let i = 0; i < digits.length; i++) {
  const digit = digits[i];
  digit.addEventListener("click", displayNumbers);
}

equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearScreen);
deleteButton.addEventListener('click', deleteNumber);

let result = "";

function displayNumbers() {
    if (currentNumber.innerHTML.includes('.') && this.textContent === '.') {
        return;
    }
    if (this.textContent === '.' && currentNumber.innerHTML === '') {
        return currentNumber.innerHTML = '0.'
    }
  currentNumber.innerHTML += this.textContent;
}

function operate() {
    if (currentNumber.innerHTML === '' && this.textContent === '-') {
        return currentNumber.innerHTML = '-';
    }
    if (operator.innerHTML != '') {
        showResult();
    }
  previousNumber.innerHTML = currentNumber.innerHTML;
  operator.innerHTML = this.innerHTML;
  currentNumber.innerHTML = "";
}

function showResult() {
    a = Number(previousNumber.innerHTML);
    b = Number(currentNumber.innerHTML);
    if (currentNumber.innerHTML === '') return;
    switch(operator.innerHTML) {
        case '+':
            result = Math.round((a + b) * 1000) / 1000;
            break;
        case '-':
            result = Math.round((a - b) * 1000) / 1000;
            break;
        case 'X':
            result = Math.round((a * b) * 1000) / 1000;
            // result = a * b;
            break;
        case '÷':
            result = Math.round((a / b) * 1000) / 1000;
            break;
        case '2^':
            result = Math.round((a ** b) * 1000) / 1000;
    }
    currentNumber.innerHTML = result;
    operator.innerHTML = '';
    previousNumber.innerHTML = '';
}

function clearScreen() {
  currentNumber.innerHTML = "";
  previousNumber.innerHTML = "";
  operator.innerHTML = "";
}

function deleteNumber() {
    currentNumber.innerHTML = currentNumber.innerHTML.slice (0, -1);
}