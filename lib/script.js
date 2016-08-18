
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
console.log(key0);

// Add an eventListener to each key

key0.addEventListener('click', keyPressed);
key1.addEventListener('click', keyPressed);
key2.addEventListener('click', keyPressed);
key3.addEventListener('click', keyPressed);
key4.addEventListener('click', keyPressed);
key5.addEventListener('click', keyPressed);
key6.addEventListener('click', keyPressed);
key7.addEventListener('click', keyPressed);
key8.addEventListener('click', keyPressed);
key9.addEventListener('click', keyPressed);
minusKey.addEventListener('click',keyPressed);
plusKey.addEventListener('click',keyPressed);
divideKey.addEventListener('click',keyPressed);
multiplyKey.addEventListener('click',keyPressed);
acKey.addEventListener('click',keyPressed);
ceKey.addEventListener('click',keyPressed);
decimalKey.addEventListener('click',keyPressed);
equalKey.addEventListener('click',keyPressed);

// Declare variables for screen display and total sum.

var currentDigit = "";
var currentSum = "";
var currentTotal;

function keyPressed (key) {
  var currentNum = key.path[0].textContent;
  var currentNum2 = Number(key.path[0].textContent);
  if (currentNum === "-"){
  console.log("minusKey");
} else if (currentNum === "+"){
  console.log("plusKey");
} else if (currentNum === "/"){
  console.log("divideKey");
} else if (currentNum === "X"){
  console.log("multiplyKey");
} else if (currentNum === "AC"){
  console.log("acKey");
} else if (currentNum === "CE"){
  console.log("ceKey");
} else if (currentNum === "."){
  console.log("decimalKey");
} else if (currentNum === "="){
  console.log("equalKey");
} else if (currentNum2 !== NaN){
  numberKey(currentNum2);
}
}

function numberKey (num) {
  currentDigit = currentDigit + num;
  console.log(currentDigit);
}
