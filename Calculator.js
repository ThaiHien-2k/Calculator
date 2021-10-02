const previous = document.querySelector('[data-previous]');
const input = document.querySelector('[data-input]');
const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const equal = document.querySelector('[data-equals]');
const clearALL = document.querySelector('[data-AC]');
const doidau = document.querySelector('[data-doidau]')
const persent = document.querySelector('[data-persent]')
const dot = document.querySelector('[data-dot]')
let x = "";
let y = "";
let result = null;
let lastOperation = "" ;
let haveDot = false;

number.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    y += e.target.innerText;
    input.innerText = y;
  });
});

operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!y) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (x && y && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(y);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

function clearVar(name = "") {
  x += y + " " + name + " ";
  previous.innerText = x;
  input.innerText = "";
  y = "";
  input.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(y);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(y);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(y);
  } else if (lastOperation === "÷") {
    result = parseFloat(result) / parseFloat(y);
  } 
}


equal.addEventListener("click", () => {
  if (!y || !x) return;
  haveDot = false;
  mathOperation();
  clearVar();
  input.innerText = result;
  previous.innerText = result;
  y = result;
  x = "";
});

clearALL.addEventListener("click", () => {
  x = "";
  y = "";
  previous.innerText = "";
  input.innerText = "0";
  haveDot = false;
  result = "";
});

doidau.addEventListener("click", () => {
    x = "";
    y =-y;
    previous.innerText = "";
    result = "";
    input.innerText =-input.innerText;
  });

  persent.addEventListener("click", () => {
    x = "";
    y =y/100;
    previous.innerText = "";
    result = "";
    input.innerText =input.innerText/100;
  });

  dot.addEventListener("click", () => {
    x = "";
    y =0+y;
    previous.innerText = "";
    result = "";
    input.innerText = 0 + input.innerText;
  });


window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "." 
  ) {
    clickButtonEl(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
});
function clickButtonEl(key) {
  number.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operation.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equal.click();
}
