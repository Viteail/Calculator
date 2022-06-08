const getDisplay = document.querySelector("#display-numbers");
const getSecondDisplay = document.querySelector("#display-second-numbers");
const getButtons = document.querySelectorAll("button");
const getButtonAllClear = document.querySelector("#all-clear");
const getButtonClear = document.querySelector("#clear");
const mainDisplay = document.querySelector("#display");

let arr = [];
let secondArr = [];
let saveArr = [];
let result = [];

// displayes each button value on display
function displayNumbers() {
  for (const display of getButtons) {
    if (arr.length === 0) {
      if (display.matches(".number")) {
        display.addEventListener("click", (e) => {
          if (arr.length !== 29) {
            if (arr.length === 0 && e.target.classList.contains("zero")) {
              return;
            } else arr.push(`${display.value}`);
          }
        });
        display.addEventListener("click", () => {
          getDisplay.textContent = arr.join("");
          return console.log(getDisplay.firstChild.textContent);
        });
      }
    }
  }
}

function operate() {
  for (const displaySecond of getButtons) {
    if (displaySecond.matches(".operator")) {
      displaySecond.addEventListener("click", () => {
        if (arr.length !== 0) {
          if (secondArr.includes("÷", "+", "-", "x", "%") === false) {
            saveArr = arr;
            secondArr.push(`${displaySecond.value}`);
          }
        }
      });
      displaySecond.addEventListener(
        "click",
        () =>
          (getSecondDisplay.textContent =
            `${saveArr.join("")}` + ` ` + `${secondArr}`)
      );
      displaySecond.addEventListener("click", () => (arr = []));
    }
  }
}

function add() {}

function subtract() {}

function divide() {}

function multiply() {}

function remainder() {}

getButtonAllClear.addEventListener("click", () => {
  arr = [];
  secondArr = [];
  saveArr = [];
  getDisplay.textContent = arr.join("");
  getSecondDisplay.textContent = secondArr.join("");
});

getButtonClear.addEventListener("click", () => {
  arr.pop();
  return (getDisplay.textContent = arr.join(""));
});

displayNumbers();
operate();

// ideas :
// when press operate do arr = saveArr and show saveArr on secondDisplays DONE
// get numbers from the secondDisplay
// getDisplay.firstChild.textContent use this method to calculate numbers
