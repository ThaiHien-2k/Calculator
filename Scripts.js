const previous = document.querySelector('[data-previous]');
const input = document.querySelector('[data-input]');
const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const equal = document.querySelector('[data-equals]');
const clearALL = document.querySelector('[data-AC]');
const clear = document.querySelector('[data-clear]');
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
    result = (parseFloat(result) * parseFloat(y));
    if((result)%1 === 0){
      result = result;
    }
    else{
      result = result.toFixed(2);
    }
  } else if (lastOperation === "+") {
    result = (parseFloat(result) + parseFloat(y));
    if((result)%1 === 0){
      result = result;
    }
    else{
      result = result.toFixed(2);
    }
  } else if (lastOperation === "-") {
    result = (parseFloat(result) - parseFloat(y));
    if((result)%1 === 0){
      result = result;
    }
    else{
      result = result.toFixed(2);
    }
  } else if (lastOperation === "÷") {
    result = (parseFloat(result) / parseFloat(y));
    if((result) % 1 === 0){
      result = result;
    }
    else{
      result = result.toFixed(2);
    }
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
  input.innerText = 0;
  haveDot = false;
  result = "";
});

clear.addEventListener("click", () => {
  x = "";
  y = input.innerText;
  previous.innerText = "";
  haveDot = false;
  result = "";
  input.innerText = (input.innerText).slice(0,-1) ;
  if(input.innerText.length == 0) {
    x = "";
    y = "";
    previous.innerText = "";
    input.innerText = 0;
    haveDot = false;
    result = "";
  } else
{
  x = "";
  y = input.innerText;
  previous.innerText = "";
  haveDot = false;
  result = "";
  input.innerText = (input.innerText);
}});

doidau.addEventListener("click", () => {
  if(input.innerText== 0 ) {
  x = "";
  y = "";
  previous.innerText = "";
  input.innerText = "0";
  haveDot = false;
  result = "";
  }
  else {
    y = -y;
    x = x;
    input.innerText=y;
  }
  });

  persent.addEventListener("click", () => {
    if(input.innerText== 0 ) {
      x = "";
      y = "";
      previous.innerText = "";
      input.innerText = "0";
      haveDot = false;
      result = "";
      }
      else {
        y = y/100;
        x = x;
        input.innerText=y;}

  });

  dot.addEventListener("click", () => {
    // if(input.innerText== 0 ) {
    //   x = "";
    //   y = "";
    //   previous.innerText = "";
    //   input.innerText = "0";
    //   haveDot = false;
    //   result = "";
    //   }
    //   else {
    x = x;
    y =0+y;
    input.innerText = y;
      // }
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
    clickButton(e.key);
  } else if (e.key === "+" || e.key === "-") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");
  } 
  else if (e.key === "/") {
    clickOperation("÷");
  }
  else if (e.key === "*") {
    clickOperation("x");
  }
  else if (e.key === "%") {
    clickPersent("%");
  }
  else if (e.key === ",") {
    clickDoidau(",");
  }
  else if (e.key === ";") {
    clickAC(";");
  }
  else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }
  else if (e.key == "Backspace") {
    clickClear();
  }
});
function clickButton(key) {
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

function clickClear() {
  clear.click();
}

function clickPersent() {
  persent.click();
}

function clickAC() {
  clearALL.click();
}

function clickDoidau() {
  doidau.click();
}