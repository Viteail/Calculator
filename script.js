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
    display.addEventListener("click", () => {
      //      if () {
      arr.push(`${display.value}`);
      //     }
    });
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
        if (arr.length !== 0) {
          if (secondArr.includes("÷", "+", "-", "x", "%") === false) {
            // trash ^^^
            secondArr.push(`${displaySecond.value}`);
          }
        }
      });
      displaySecond.addEventListener(
        "click",
        () =>
          (getSecondDisplay.textContent =
            `${arr.join("")}` + ` ` + `${secondArr}`)
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

operate();


// ideas :
// when press operate do arr = saveArr and show saveArr on secondDisplays