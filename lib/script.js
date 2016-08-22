/*****************************************
 Declare variables & define all the keys
*****************************************/

var currentDigits = "";
var currentSum = "";
var result;

var keys = document.getElementsByClassName("key");
console.log(keys)
for (var i = keys.length - 1; i >= 0; i--) {
    var el = keys[i];

    el.addEventListener('click', function(e){
      var dataType = e.path[1].dataset.type;
      if(dataType === "number"){
        var newDigit = e.path[0].textContent;
        number(newDigit);
      };
      if (dataType === "operator") {
        var newOperator = e.path[1];
        operator(newOperator);
      };
      if (dataType === "action") {
        var newAction = e.path[1].dataset.method;
        action (newAction);
      };
    });
}

/*****************************************
 Number Keys Function
*****************************************/

function number (newDigit) {
  currentDigits = currentDigits + newDigit;
  upperScreen.innerHTML = currentDigits;
}

/*****************************************
 Operator Keys Functions
*****************************************/

function operator (newOperator) {
  if (newOperator.dataset.method === "decimal") {
    console.log("It's a decimal");
    decimal ();
    return;
  }
  if (newOperator.dataset.method === "equalsKey") {
    equalsKey ();
    return;
  }
  if (newOperator.dataset.method === "minus") {
    checkFirstDigit();
    checkSum();
    currentSum = currentSum + " " + newOperator.innerText + " ";
    lowerScreen.innerHTML = currentSum;
    return;
  }
  if (currentDigits === "" && currentSum === "") {
    return;
  }
  checkSum();
  currentSum = currentSum + " " + newOperator.innerText + " ";
  lowerScreen.innerHTML = currentSum;
}

function decimal () {
  if (currentDigits.charAt(0) === "." || currentDigits.indexOf(".") >= 1) {
    return;
  }
  currentDigits = currentDigits + ".";
  upperScreen.innerHTML = currentDigits;
}

function equalsKey () {
  getResult();
  if (result !== undefined){
  upperScreen.innerHTML = result;
}
  reset();
  lowerScreen.innerHTML = "";
}

function checkFirstDigit() {
  if(currentDigits === "" && currentSum === "") {
    return;
  }
}

function checkSum() {
  currentSum = currentSum + currentDigits;
  currentDigits = "";
  for (var i = 0; i < currentSum.length; i++) {
    if(currentSum[i] == " "){
      equals();
    }
  }
}

function getResult() {
  currentSum = currentSum + currentDigits;
  result = eval(currentSum.replace("x", "*").replace("÷", "/"));
  currentSum = result;
}

function equals() {
  getResult();
  upperScreen.innerHTML = "";
  lowerScreen.innerHTML = currentSum;
}

function reset () {
  currentDigits = "";
  currentSum = "";
}

/*****************************************
 Action Keys Functions
*****************************************/

function action (newAction) {
  if (newAction === "ac") {
    clearCurrentSum ();
  }
  if (newAction === "ce") {
    clearCurrentDigit ();
  }
}

function clearCurrentDigit () {
  currentDigits = "";
  upperScreen.innerHTML = currentDigits;
  lowerScreen.innerHTML = currentSum;
}

function clearCurrentSum () {
  currentSum = "";
  clearCurrentDigit ();
}
