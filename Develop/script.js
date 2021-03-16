// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare function for generatePassword

//Declare arrays here for lowercase, uppercase, special characters and numbers.

let lowercaseArray = [
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
let uppercaseArray = [
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
let specialcharArray = [
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
let numbercharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//["\""\ "\'" - recheck!!

//Prompt user for passwordLength
//if  less than <8 characters in length or more than >128 characters. Alert user to put in correct passwordLength.

const passwordLength = prompt(
  "How many characters would you like your password to contain?"
);

if (passwordLength < 8) {
  alert("Your password must be at least 8 characters!");
}
if (passwordLength > 128) {
  alert("Your password must be less than 128 characters!");
} else {
  //Prompt and confirm with user re password characters
  let confirmLowercase = confirm(
    "Do you want lowercase characters in your password"
  );
  let confirmUppercase = confirm(
    "Do you want lowercase characters in your password"
  );
  let confirmSpecialChar = confirm(
    "Do you want special characters in your password"
  );
  let confirmNumber = confirm("Do you want number characters in your password");
}

//Generate Password

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Logic would go here

  // Return our created password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
