
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
equalKey.addEventListener('click', equals);

// Declare variables for screen display and total sum.

var currentDigit = "";
var currentSum = "";
var currentTotal = 0;

function numberKey (key) {
  currentDigit = currentDigit + key.path[0].textContent;
  upperScreen.innerHTML = currentDigit;
  console.log(currentDigit);
}

function minus () {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
  currentTotal = currentTotal - parseInt(currentDigit);
  currentSum = currentSum + currentDigit;
  currentDigit = "";
  updateDisplays();
  currentSum = currentSum + " - ";
  console.log(currentTotal);
}

function addition () {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
  currentTotal = currentTotal + parseInt(currentDigit);
  currentSum = currentSum + currentDigit;
  currentDigit = "";
  updateDisplays();
  currentSum = currentSum + " + ";
  console.log(currentTotal);
}

function divide () {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
  currentSum = currentSum + currentDigit + " ÷ ";
  updateDisplays();
}

function multiply () {
  if(currentDigit === "" && currentSum === "") {
    return;
  }
  currentSum = currentSum + currentDigit + " x ";
  updateDisplays();
}

function decimal () {
  if (currentDigit.charAt(0) === "." || currentDigit.indexOf(".") >= 1) {
    return;
  }
  currentDigit = currentDigit + ".";
  upperScreen.innerHTML = currentDigit;
}

function equals() {
  currentSum = currentSum + currentDigit;
  
  console.log(currentTotal);
  upperScreen.innerHTML = currentTotal;
  lowerScreen.innerHTML = currentSum;
  reset();
}

function clearCurrentDigit () {
  currentDigit = "";
  updateDisplays();
}

function clearCurrentSum () {
  currentDigit = "";
  currentSum = "";
  updateDisplays();
}

function updateDisplays() {
  upperScreen.innerHTML = currentDigit;
  lowerScreen.innerHTML = currentSum;
}

function reset () {
  var currentDigit = "";
  var currentSum = "";
  var currentTotal = 0;
}
