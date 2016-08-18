
// Assign a variable to each key

var key0 = document.getElementById("key0");
var key1 = document.getElementById("key1");
var key2 = document.getElementById("key2");
var key3 = document.getElementById("key3");
var key4 = document.getElementById("key4");
var key5 = document.getElementById("key5");
var key6 = document.getElementById("key6");
var key7 = document.getElementById("key7");
var key8 = document.getElementById("key8");
var key9 = document.getElementById("key9");
var minusKey = document.getElementById("minusKey");
var plusKey = document.getElementById("plusKey");
var divideKey = document.getElementById("divideKey");
var multiplyKey = document.getElementById("multiplyKey");
var acKey = document.getElementById("acKey");
var ceKey = document.getElementById("ceKey");
var decimalKey = document.getElementById("decimalKey");
var equalKey = document.getElementById("equalKey");
var upperScreen = document.getElementById("upperScreen");
var lowerScreen = document.getElementById("lowerScreen");
console.log(key0);

// Add an eventListener to each key

key0.addEventListener('click', numberKey);
key1.addEventListener('click', numberKey);
key2.addEventListener('click', numberKey);
key3.addEventListener('click', numberKey);
key4.addEventListener('click', numberKey);
key5.addEventListener('click', numberKey);
key6.addEventListener('click', numberKey);
key7.addEventListener('click', numberKey);
key8.addEventListener('click', numberKey);
key9.addEventListener('click', numberKey);
minusKey.addEventListener('click', minus);
plusKey.addEventListener('click', addition);
divideKey.addEventListener('click', divide);
multiplyKey.addEventListener('click',multiply);
acKey.addEventListener('click', clearCurrentSum);
ceKey.addEventListener('click', clearCurrentDigit);
decimalKey.addEventListener('click', decimal);
equalKey.addEventListener('click', equalsKey);

// Declare variables for screen display and total sum.

var currentDigit = "";
var currentSum = "";
var result;

function numberKey (key) {
  currentDigit = currentDigit + key.path[0].textContent;
  upperScreen.innerHTML = currentDigit;
  console.log(currentDigit);
}

function minus () {
  checkFirstDigit();
  checkSum();
  currentSum = currentSum + " - ";
  lowerScreen.innerHTML = currentSum;
}

function addition () {
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

function equals() {
  console.log("chickens");
  currentSum = currentSum + currentDigit;
  result = eval(currentSum.replace("x", "*").replace("÷", "/"));
  currentSum = result;
  upperScreen.innerHTML = "";
  // reset();
  lowerScreen.innerHTML = currentSum;
}

function equalsKey() {
  console.log("chickens");
  currentSum = currentSum + currentDigit;
  result = eval(currentSum.replace("x", "*").replace("÷", "/"));
  currentSum = result;
  upperScreen.innerHTML = result;
  reset();
  lowerScreen.innerHTML = "";
}

function clearCurrentDigit () {
  currentDigit = "";
  upperScreen.innerHTML = currentDigit;
  lowerScreen.innerHTML = currentSum;
}

function clearCurrentSum () {
  currentDigit = "";
  currentSum = "";
  upperScreen.innerHTML = currentDigit;
  lowerScreen.innerHTML = currentSum;
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
