const getDisplay = document.querySelector("#display-numbers");
const getSecondDisplay = document.querySelector("#display-second-numbers");
const getButtons = document.querySelectorAll("button");
const getButtonAllClear = document.querySelector("#all-clear");
const getButtonClear = document.querySelector("#clear");
const mainDisplay = document.querySelector("#display");
const getEqualBtn = document.querySelector("#equals");

let firstDisplayData = "";
let secondDisplayData = "";
let SaveData = "";

// displayes each button value on display
function display() {
  for (const display of getButtons) {
    if (firstDisplayData === "") {
      if (display.matches(".number")) {
        display.addEventListener("click", (e) => {
          if (firstDisplayData.length !== 29) {
            if (
              firstDisplayData === "" &&
              e.target.classList.contains("zero")
            ) {
              return;
            } else firstDisplayData += display.value;
            return (getDisplay.textContent = firstDisplayData);
          }
        });
      }
    }
  }
}

function operate() {
  for (const displaySecond of getButtons) {
    if (displaySecond.matches(".operator")) {
      displaySecond.addEventListener("click", () => {
        if (firstDisplayData !== "") {
          if (secondDisplayData.includes("÷", "+", "-", "x", "%") === false) {
            SaveData = firstDisplayData;
            secondDisplayData += displaySecond.value;
            getSecondDisplay.textContent =
              SaveData + ` ` + secondDisplayData;
            return (firstDisplayData = "");
          }
        }
      });

    }
  }
}

function add() {
  const add = +firstDisplayData + +SaveData;
  getSecondDisplay.textContent = "";
  getDisplay.textContent = add;
}

function subtract() {
  const subtract = +firstDisplayData - +SaveData;
  getSecondDisplay.textContent = "";
  getDisplay.textContent = subtract;
}

function divide() {
  const divide = +firstDisplayData / +SaveData;
  getSecondDisplay.textContent = "";
  getDisplay.textContent = divide;
}

function multiply() {
  const multiply = +firstDisplayData * +SaveData;
  getSecondDisplay.textContent = "";
  getDisplay.textContent = multiply;
}

function remainder() {
  const remainder = +firstDisplayData % +SaveData;
  getSecondDisplay.textContent = "";
  getDisplay.textContent = remainder;
}

getButtonAllClear.addEventListener("click", () => {
  firstDisplayData = "";
  secondDisplayData = "";
  getDisplay.textContent = firstDisplayData;
  getSecondDisplay.textContent = secondDisplayData;
});

getButtonClear.addEventListener("click", () => {
  firstDisplayData = firstDisplayData.replace(/\d$/, "");
  return (getDisplay.textContent = firstDisplayData);
});

display();
operate();

// ideas :
