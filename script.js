const getDisplay = document.querySelector("#display-numbers");
const getSecondDisplay = document.querySelector("#display-second-numbers");
const getButtons = document.querySelectorAll("button");
const getButtonAllClear = document.querySelector("#all-clear");
const getButtonClear = document.querySelector("#clear");

let arr = [];
let secondArr = [];
let saveArr = [];

// displayes each button value on display

for (const display of getButtons) {
  if (display.matches(".number")) {
    display.addEventListener("click", () => arr.push(`${display.value}`));
    display.addEventListener(
      "click",
      () => (getDisplay.textContent = arr.join(""))
    );
  }
}

function operate() {
  for (const displaySecond of getButtons) {
    if (displaySecond.matches(".operator")) {
      displaySecond.addEventListener("click", () => {
        if (secondArr.includes(`${displaySecond.value}`) === false) {
          secondArr.push(`${displaySecond.value}`);
        }
      });
      displaySecond.addEventListener(
        "click",
        () =>
          (getSecondDisplay.textContent = `${arr.join("")}` + `${secondArr}`)
      );
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

operate();
