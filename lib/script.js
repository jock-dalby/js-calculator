// $( document ).ready(function() {
// Assign a variable to each key

    var keys = document.getElementsByClassName("key");
    console.log(keys)
    for (var i = keys.length - 1; i >= 0; i--) {
        var el = keys[i];

        el.addEventListener('click', function(e){
          var dataType = e.path[1].dataset.type;
          if(dataType === "number"){
            numberKey(e);
          };
          if (dataType === "operator") {
            operator(e.path[1].dataset.method);
          };
          if (dataType === "action") {
            action (e.path[1].dataset.method);
          };
        });
    }

function operator (method) {
  if (method === "plus") {
    plus ();
  }
  if (method === "minus") {
    minus ();
  }
  if (method === "divide") {
    divide ();
  }
  if (method === "multiply") {
    multiply ();
  }
  if (method === "decimal") {
    decimal ();
  }
  if (method === "equalsKey") {
    equalsKey ();
  }
}

function action (key) {
  if (key === "ac") {
    clearCurrentSum ();
  }
  if (key === "ce") {
    clearCurrentDigit ();
  }
}

var currentDigit = "";
var currentSum = "";
var result;

function numberKey (key) {
  currentDigit = currentDigit + key.path[0].textContent;
  upperScreen.innerHTML = currentDigit;
}

function minus () {
  checkFirstDigit();
  checkSum();
  currentSum = currentSum + " - ";
  lowerScreen.innerHTML = currentSum;
}

function plus () {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
  checkSum();
  currentSum = currentSum + " + ";
  lowerScreen.innerHTML = currentSum;
}

function divide () {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
  checkSum();
  currentSum = currentSum + " ÷ ";
  lowerScreen.innerHTML = currentSum;
}

function multiply () {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
  checkSum();
  currentSum = currentSum + " x ";
  lowerScreen.innerHTML = currentSum;
}

function decimal () {
  if (currentDigit.charAt(0) === "." || currentDigit.indexOf(".") >= 1) {
    return;
  }
  currentDigit = currentDigit + ".";
  upperScreen.innerHTML = currentDigit;
}

function getResult() {
  currentSum = currentSum + currentDigit;
  result = eval(currentSum.replace("x", "*").replace("÷", "/"));
  currentSum = result;
}

function equals() {
  getResult();
  upperScreen.innerHTML = "";
  // reset();
  lowerScreen.innerHTML = currentSum;
}

function equalsKey () {
  getResult();
  if (result !== undefined){
  upperScreen.innerHTML = result;
}
  reset();
  lowerScreen.innerHTML = "";
}

function clearCurrentDigit () {
  currentDigit = "";
  upperScreen.innerHTML = currentDigit;
  lowerScreen.innerHTML = currentSum;
}

function clearCurrentSum () {
  currentSum = "";
  clearCurrentDigit ();
}

function reset () {
  currentDigit = "";
  currentSum = "";
}

function checkFirstDigit() {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
}

function checkSum() {
  currentSum = currentSum + currentDigit;
  currentDigit = "";
  for (var i = 0; i < currentSum.length; i++) {
    if(currentSum[i] == " "){
      equals();
    }
  }
}
