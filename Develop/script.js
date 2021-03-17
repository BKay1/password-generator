// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare arrays in memory for lowercase, uppercase, special characters and numbers.

const lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const specialCharArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

const numberCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Generate Password

function generatePassword() {
  // Create a variable to store our generated password
  var password = "";
  //const passwordChar = "";

  //Prompt user for passwordLength
  //if  less than <8 characters in length or more than >128 characters. Alert user to put in correct passwordLength.

  let passwordLength = prompt(
    "How many characters would you like your password to contain?"
  );
  passwordLength = parseInt(passwordLength);

  if (!passwordLength) {
    alert("Please add a numeric value");
    return;
  }

  if (passwordLength < 8) {
    alert("Your password must be at least 8 characters!");
    return;
  }
  if (passwordLength > 128) {
    alert("Your password must be less than 128 characters!");
    return;
  }

  //Prompt and confirm with user re password characters
  let confirmLowercase = confirm(
    "Do you want Lowercase characters in your password"
  );

  let confirmUppercase = confirm(
    "Do you want Uppercase characters in your password"
  );

  let confirmSpecialChar = confirm(
    "Do you want Special characters in your password"
  );

  let confirmNumber = confirm("Do you want Number characters in your password");

  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmSpecialChar &&
    !confirmNumber
  ) {
    alert(
      "Your password must contain at least one special, numeric, lowercase, or uppercase character"
    );
    return;
  }

  const optionsArray = [];

  //random maths floor etc

  if (confirmLowercase) {
    optionsArray.push(lowercaseArray);
  }
  if (confirmUppercase) {
    optionsArray.push(uppercaseArray);
  }
  if (confirmSpecialChar) {
    optionsArray.push(specialCharArray);
  }
  if (confirmNumber) {
    optionsArray.push(numberCharArray);
  }

  const randomNumber = Math.floor(Math.random() * 26);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
