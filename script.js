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
let resultData = "";

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
            if (getSecondDisplay.textContent != resultData);
            if (resultData != "") {
              console.log("ur mom")
              getSecondDisplay.textContent = "";
              resultData = "";
            }
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
            getSecondDisplay.textContent = SaveData + ` ` + secondDisplayData;
            if (secondDisplayData.length !== 2) {
              firstDisplayData = "";
            }
          }
        }
      });
      getEqualBtn.addEventListener("click", result);
      displaySecond.addEventListener("click", (e) => {
        if (secondDisplayData.length === 2) {
          if (e.target.classList.contains("add")) {
            resultData = +SaveData + +firstDisplayData;
            getSecondDisplay.textContent = resultData + " " + "+";
            getDisplay.textContent = "";
            firstDisplayData = "";
            secondDisplayData = "";
            SaveData = "";
          }
        }
      });
    }
  }
}

function result() {
  if (firstDisplayData !== "" && SaveData !== "") {
    if (secondDisplayData.includes("+")) {
      add();
    } else if (secondDisplayData.includes("-")) {
      subtract();
    } else if (secondDisplayData.includes("÷")) {
      divide();
    } else if (secondDisplayData.includes("x")) {
      multiply();
    } else if (secondDisplayData.includes("%")) {
      remainder();
    }
  }
}

function add() {
  resultData = +SaveData + +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = "";
  secondDisplayData = "";
  SaveData = "";
  return (getDisplay.textContent = resultData);
}

function subtract() {
  resultData = +SaveData - +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = "";
  secondDisplayData = "";
  SaveData = "";
  return (getDisplay.textContent = resultData);
}

function divide() {
  resultData = +SaveData / +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = "";
  secondDisplayData = "";
  SaveData = "";
  return (getDisplay.textContent = resultData);
}

function multiply() {
  resultData = +SaveData * +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = "";
  secondDisplayData = "";
  return (getDisplay.textContent = resultData);
}

function remainder() {
  resultData = +SaveData % +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = "";
  secondDisplayData = "";
  SaveData = "";
  return (getDisplay.textContent = resultData);
}

getButtonAllClear.addEventListener("click", () => {
  firstDisplayData = "";
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  getDisplay.textContent = firstDisplayData;
  getSecondDisplay.textContent = secondDisplayData;
});

getButtonClear.addEventListener("click", () => {
  firstDisplayData = firstDisplayData.replace(/\d$/, "");
  return (getDisplay.textContent = firstDisplayData);
});

display();
operate();

// ideas : 0
