const getDisplay = document.querySelector("#display-numbers");
const getSecondDisplay = document.querySelector("#display-second-numbers");
const getButtons = document.querySelectorAll("button");
const getButtonAllClear = document.querySelector("#all-clear");
const getButtonClear = document.querySelector("#clear");
const mainDisplay = document.querySelector("#display");
const getEqualBtn = document.querySelector("#equals");
const getPeriod = document.querySelector("#period");
const getNegativeBtn = document.querySelector("#negative");

let firstDisplayData = "";
let secondDisplayData = "";
let SaveData = "";
let resultData = "";

// displayes each button value with class .number on display

document.addEventListener("keydown", keyboardEvent);

// keyboard support

function keyboardEvent(e) {
  if (firstDisplayData.length !== 29) {
    if (
      (e.keyCode >= 48 && e.keyCode <= 57 && firstDisplayData !== "0") ||
      (e.keyCode >= 96 && e.keyCode <= 105 && firstDisplayData !== "0")
    ) {
      console.log(e.keyCode);
      firstDisplayData += e.key;
    } else if (firstDisplayData === "0") {
      firstDisplayData = "";
      firstDisplayData += e.key;
    }
    getDisplay.textContent = firstDisplayData;
  }
}

function display() {
  for (const display of getButtons) {
    if (firstDisplayData === "") {
      if (display.matches(".number")) {
        display.addEventListener("click", (e) => {
          if (firstDisplayData.length !== 29) {
            if (firstDisplayData !== "0" && e.target.matches(".number")) {
              firstDisplayData += display.value;
            } else if (
              firstDisplayData === "0" &&
              e.target.matches(".number")
            ) {
              firstDisplayData = "";
              firstDisplayData += display.value;
            }
            return (getDisplay.textContent = firstDisplayData);
          }
        });
      }
      getPeriod.addEventListener("click", () => {
        if (getDisplay.textContent === "0") {
          firstDisplayData = "0";
        }

        if (
          firstDisplayData !== "" &&
          firstDisplayData.includes(".") === false
        ) {
          firstDisplayData += getPeriod.value;
          return (getDisplay.textContent = firstDisplayData);
        }
      });
      getNegativeBtn.addEventListener("click", negativeNumbers);
    }
  }
}

function negativeNumbers() {
  if (
    firstDisplayData !== "0" &&
    firstDisplayData !== "" &&
    firstDisplayData.charAt(0) !== "-"
  ) {
    firstDisplayData = "-" + firstDisplayData;
    getDisplay.textContent = firstDisplayData;
  } else if (
    firstDisplayData !== "0" &&
    firstDisplayData !== "" &&
    firstDisplayData.charAt(0) === "-"
  ) {
    firstDisplayData = firstDisplayData.slice(1);
    getDisplay.textContent = firstDisplayData;
  }
}

function displayError() {
  if (firstDisplayData === Infinity) {
    firstDisplayData = "";
    SaveData = "";
    secondDisplayData = "";
    resultData = "";
    getSecondDisplay.textContent = "";
    getDisplay.textContent = "Error!";
  }
  return;
}

// saves data from firstDisplayData to SaveData and displayes each button value with class .operator on secondDisplay
function operate() {
  for (const displaySecond of getButtons) {
    if (displaySecond.matches(".operator")) {
      displaySecond.addEventListener("click", () => {
        if (firstDisplayData !== "") {
          if (SaveData === "" && firstDisplayData !== "") {
            SaveData = firstDisplayData;
          }
          secondDisplayData += displaySecond.value;
          getSecondDisplay.textContent = SaveData + ` ` + secondDisplayData;
          if (secondDisplayData.length !== 2) {
            firstDisplayData = "";
          }
        }
      });
      getEqualBtn.addEventListener("click", result);
      // evaluate a single pair of numbers at a time
      displaySecond.addEventListener("click", (e) => {
        if (secondDisplayData.length === 2) {
          if (e.target.classList.contains("add")) {
            if (secondDisplayData.includes("++")) {
              resultData = +SaveData + +firstDisplayData;
            } else if (secondDisplayData.includes("-+")) {
              resultData = +SaveData - +firstDisplayData;
            } else if (secondDisplayData.includes("÷+")) {
              resultData = +SaveData / +firstDisplayData;
            } else if (secondDisplayData.includes("x+")) {
              resultData = +SaveData * +firstDisplayData;
            } else if (secondDisplayData.includes("%+")) {
              resultData = +SaveData % +firstDisplayData;
            }
            resultData = "" + resultData;
            secondDisplayData = "+";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
            displayError();
            firstDisplayData = "";
          } else if (e.target.classList.contains("subtract")) {
            if (secondDisplayData.includes("+-")) {
              resultData = +SaveData + +firstDisplayData;
            } else if (secondDisplayData.includes("--")) {
              resultData = +SaveData - +firstDisplayData;
            } else if (secondDisplayData.includes("÷-")) {
              resultData = +SaveData / +firstDisplayData;
            } else if (secondDisplayData.includes("x-")) {
              resultData = +SaveData * +firstDisplayData;
            } else if (secondDisplayData.includes("%-")) {
              resultData = +SaveData % +firstDisplayData;
            }
            resultData = "" + resultData;
            secondDisplayData = "-";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
            displayError();
            firstDisplayData = "";
          } else if (e.target.classList.contains("divide")) {
            if (secondDisplayData.includes("+÷")) {
              resultData = +SaveData + +firstDisplayData;
            } else if (secondDisplayData.includes("-÷")) {
              resultData = +SaveData - +firstDisplayData;
            } else if (secondDisplayData.includes("÷÷")) {
              resultData = +SaveData / +firstDisplayData;
            } else if (secondDisplayData.includes("x÷")) {
              resultData = +SaveData * +firstDisplayData;
            } else if (secondDisplayData.includes("%÷")) {
              resultData = +SaveData % +firstDisplayData;
            }
            resultData = "" + resultData;
            secondDisplayData = "÷";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
            displayError();
            firstDisplayData = "";
          } else if (e.target.classList.contains("multiply")) {
            if (secondDisplayData.includes("+x")) {
              resultData = +SaveData + +firstDisplayData;
            } else if (secondDisplayData.includes("-x")) {
              resultData = +SaveData - +firstDisplayData;
            } else if (secondDisplayData.includes("÷x")) {
              resultData = +SaveData / +firstDisplayData;
            } else if (secondDisplayData.includes("xx")) {
              resultData = +SaveData * +firstDisplayData;
            } else if (secondDisplayData.includes("%x")) {
              resultData = +SaveData % +firstDisplayData;
            }
            resultData = "" + resultData;
            secondDisplayData = "x";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
            displayError();
            firstDisplayData = "";
          } else if (e.target.classList.contains("remainder")) {
            if (secondDisplayData.includes("+%")) {
              resultData = +SaveData + +firstDisplayData;
            } else if (secondDisplayData.includes("-%")) {
              resultData = +SaveData - +firstDisplayData;
            } else if (secondDisplayData.includes("÷%")) {
              resultData = +SaveData / +firstDisplayData;
            } else if (secondDisplayData.includes("x%")) {
              resultData = +SaveData * +firstDisplayData;
            } else if (secondDisplayData.includes("%%")) {
              resultData = +SaveData % +firstDisplayData;
            }
            resultData = "" + resultData;
            secondDisplayData = "%";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
            displayError();
            firstDisplayData = "";
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
  resultData = "" + resultData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  getDisplay.textContent = firstDisplayData;
  displayError();
}

function subtract() {
  resultData = +SaveData - +firstDisplayData;
  resultData = "" + resultData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  getDisplay.textContent = firstDisplayData;
  displayError();
}

function divide() {
  resultData = +SaveData / +firstDisplayData;
  resultData = "" + resultData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  getDisplay.textContent = firstDisplayData;
  displayError();
}

function multiply() {
  resultData = +SaveData * +firstDisplayData;
  resultData = "" + resultData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  resultData = "";
  getDisplay.textContent = firstDisplayData;
  displayError();
}

function remainder() {
  resultData = +SaveData % +firstDisplayData;
  resultData = "" + resultData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  getDisplay.textContent = firstDisplayData;
  displayError();
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
  if (firstDisplayData.length === 1 || firstDisplayData.length === 0) {
    firstDisplayData = "0";
  } else if (firstDisplayData !== "") {
    firstDisplayData = firstDisplayData.replace(/\d$/, "");
  }
  return (getDisplay.textContent = firstDisplayData);
});

display();
operate();

// ideas : 0
