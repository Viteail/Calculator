const getDisplay = document.querySelector("#display-numbers");
const getButtons = document.querySelectorAll("button");
const getButtonAllClear = document.querySelector("#all-clear");
const getButtonClear = document.querySelector("#clear");

let arr = [];

// displayes each button value on display

for (const display of getButtons) {
  display.addEventListener("click", () => arr.push(`${display.value}`));
  display.addEventListener(
    "click",
    () => (getDisplay.textContent = arr.join(""))
  );
}

getButtonAllClear.addEventListener("click", () => {
  arr = [];
  return (getDisplay.textContent = arr.join(""));
});

getButtonClear.addEventListener("click", () => {
  arr.pop();
  arr.pop();
  return (getDisplay.textContent = arr.join(""));
});
