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

// displayes each button value with class .number on display
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
// saves data from firstDisplayData to SaveData and displayes each button value with class operator on secondDisplay
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
            secondDisplayData = "+";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
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
            secondDisplayData = "-";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
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
            secondDisplayData = "÷";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
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
            secondDisplayData = "x";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
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
            secondDisplayData = "%";
            getSecondDisplay.textContent = resultData + " " + secondDisplayData;
            firstDisplayData = resultData;
            SaveData = firstDisplayData;
            resultData = "";
            getDisplay.textContent = firstDisplayData;
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
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  return (getDisplay.textContent = firstDisplayData);
}

function subtract() {
  resultData = +SaveData - +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  return (getDisplay.textContent = firstDisplayData);
}

function divide() {
  resultData = +SaveData / +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  return (getDisplay.textContent = firstDisplayData);
}

function multiply() {
  resultData = +SaveData * +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  resultData = "";
  return (getDisplay.textContent = firstDisplayData);
}

function remainder() {
  resultData = +SaveData % +firstDisplayData;
  getSecondDisplay.textContent =
    SaveData + ` ` + secondDisplayData + ` ` + firstDisplayData + ` ` + `=`;
  firstDisplayData = resultData;
  secondDisplayData = "";
  SaveData = "";
  resultData = "";
  return (getDisplay.textContent = firstDisplayData);
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
