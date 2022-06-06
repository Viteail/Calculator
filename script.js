const getDisplay = document.querySelector("#display-numbers");
const getSecondDisplay = document.querySelector("#display-second-numbers");
const getButtons = document.querySelectorAll("button");
const getButtonAllClear = document.querySelector("#all-clear");
const getButtonClear = document.querySelector("#clear");

let arr = [];
let secondArr = [];
let saveArr = [];
let result = [];

// displayes each button value on display
function displayNumbers() {
  for (const display of getButtons) {
    if (arr.length === 0) {
      if (display.matches(".number")) {
        display.addEventListener("click", () => {
          // if arr is empty and btn zero is pressed dont aply
          arr.push(`${display.value}`);
        });
        display.addEventListener(
          "click",
          () => (getDisplay.textContent = arr.join(""))
        );
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

getButtonAllClear.addEventListener("click", () => {
  arr = [];
  secondArr = [];
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
