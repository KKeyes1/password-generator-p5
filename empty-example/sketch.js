// password generator rules
// at least 8 characters
// one or more: lowercase, uppercase, number, special characters
// use or remove look-a-like characters?


//set up password character libraries
let lowerCaseAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numberAlpha = ['0','1','2','3','4','5','6','7','8','9'];
let specialCharAlpha = ['!','@','#','$','%','&','-','_','?'];
var alpha1;
var alpha2;
var alpha3;
var alpha4;

let password = '';

let passwordLength;

function setup() {
  // put setup code here
  createCanvas(800,64);
  passwordLength = createSlider(8, 32, 20);
  passwordLength.input(createPassword);
  createPassword();
}

function draw() {
  background(255);
  textSize(32);
  text(password, 10, 30);
  text(passwordLength.value() + ' characters', 10, 62);
}

function randomElement(array) {
  var randomElementIndex = Math.floor(Math.random()*array.length);
  return(array[randomElementIndex]);
}

function getElements(array, number) {
  var elements = '';
  for (var i = 0; i < number; i++) {
    elements += randomElement(array)
  }
  return(elements);
}

function createPassword() {
  let passwordLen = passwordLength.value();
  let newAddends = addends(passwordLen,4);
  alpha1 = newAddends[0];
  alpha2 = newAddends[1];
  alpha3 = newAddends[2];
  alpha4 = newAddends[3];
  var lower = getElements(lowerCaseAlpha, alpha1);
  var upper = getElements(upperCaseAlpha, alpha2);
  var num = getElements(numberAlpha, alpha3);
  var special = getElements(specialCharAlpha, alpha4);
  var shittyPassword = lower + upper + num + special;
  password = randomizeString(shittyPassword);
}

function randomizeString(string) {
  var updatedString = string.split('');
  var betterPassword = '';
  for (var i = 0; i < string.length; i++) {
    var randomNumber = Math.floor(Math.random()*updatedString.length);
    betterPassword += updatedString[randomNumber];
    updatedString.splice(randomNumber, 1);
  }
  return(betterPassword);
}

function addends(number, numberOfAddends) {

  let total = [number];
  while (total.length < numberOfAddends) {
    let randomElementIndex = Math.floor(Math.random()*total.length);
    let randomElement = total[randomElementIndex];
    let randomSplit = Math.floor(Math.random() * randomElement);
    if (randomSplit == 0) {
    } else {
      total.splice(randomElementIndex, 1);
      //console.log(randomSplit);
      total.push(randomSplit);
      total.push(randomElement - randomSplit);

    }

  }
  console.log(total);
  return(total);
}
