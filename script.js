const previousNumber = document.querySelector(".previousNumber");
const currentNumber = document.querySelector(".currentNumber");
const operator = document.querySelector(".operator");
const operatorButtons = document.querySelectorAll(".mathButton");
const equalsButton = document.querySelector(".equalsButton");
const digits = document.querySelectorAll(".digits");
const clearButton = document.querySelector(".clearButton");
const deleteButton = document.querySelector(".delete");
let operatorValue = '';

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
deleteButton.addEventListener("click", deleteNumber);
window.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.shiftKey === false && e.code === `Digit${e.key}`) {
    currentNumber.innerHTML += e.key;
  } else if (e.code === "Backspace") {
    deleteNumber();
  } else if (e.code === 'Delete') {
    clearScreen();
  } else if (e.shiftKey === false && e.code === "Equal" || e.code === 'Enter') {
    showResult();
  } else if (e.code === "Period" && currentNumber.innerHTML === "") {
    currentNumber.innerHTML = "0.";
  } else if (
    e.code === "Period" &&
    !currentNumber.innerHTML.includes(".") &&
    currentNumber.innerHTML != "" &&
    currentNumber.innerHTML != "0."
  ) {
    currentNumber.innerHTML += ".";
  } 
  if (e.shiftKey === true && e.code === 'Equal') {
    operatorValue = '+';
    operate();
  } else if (e.shiftKey === true && (e.code === 'Digit8' || e.key === '8' || e.key === '*')) {
    operatorValue = 'X';
    operate();
  } else if (e.shiftKey === false && e.code === 'Slash') {
    operatorValue = '÷';
    operate();
  } else if (e.code === 'Minus' && currentNumber.innerHTML != '') {
    operatorValue = '-';
    operate();
  }else if (e.code === 'Minus' && currentNumber.innerHTML === '') {
    return currentNumber.innerHTML += '-'
  }
});

let result = "";

function displayNumbers() {
  if (currentNumber.innerHTML.includes(".") && this.textContent === ".") {
    return;
  }
  if (this.textContent === "." && currentNumber.innerHTML === "") {
    return (currentNumber.innerHTML = "0.");
  }
  currentNumber.innerHTML += this.textContent;
}

function operate() {
  if (currentNumber.innerHTML === "" && this.textContent === "-") {
    return (currentNumber.innerHTML = "-");
  }
  if (operator.innerHTML != "") {
    showResult();
  }
  if (operatorValue != '') {
    previousNumber.innerHTML = currentNumber.innerHTML;
    operator.innerHTML = operatorValue;
    currentNumber.innerHTML = '';
  } else {
  previousNumber.innerHTML = currentNumber.innerHTML;
  operator.innerHTML = this.innerHTML;
  currentNumber.innerHTML = "";
}
}

function showResult() {
  a = Number(previousNumber.innerHTML);
  b = Number(currentNumber.innerHTML);
  if (b === "") return;
  switch (operator.innerHTML || operatorValue) {
    case "+":
      result = Math.round((a + b) * 1000) / 1000;
      break;
    case "-":
      result = Math.round((a - b) * 1000) / 1000;
      break;
    case "X":
      result = Math.round(a * b * 1000) / 1000;
      break;
    case "÷":
      result = Math.round((a / b) * 1000) / 1000;
      if (b === 0) result = "lol, try again";
      break;
    case "2^":
      result = Math.round(a ** b * 1000) / 1000;
  }
  currentNumber.innerHTML = result;
  operator.innerHTML = "";
  previousNumber.innerHTML = "";
}

function clearScreen() {
  currentNumber.innerHTML = "";
  previousNumber.innerHTML = "";
  operator.innerHTML = "";
}

function deleteNumber() {
  currentNumber.innerHTML = currentNumber.innerHTML.slice(0, -1);
}
