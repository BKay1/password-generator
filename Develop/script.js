// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare function for generatePassword 



//Declare arrays here for lowercase, uppercase, special characters and numbers.

const lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialcharArray = ["#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@"];
const numbercharArray = ["0","1","2","3","4","5","6","7","8","9",];

//["\""\ "\'" - recheck!!

//Prompt user for passwordLength
//if  less than <8 characters in length or more than >128 characters. Alert user to put in correct passwordLength.


const passwordLength = prompt("How many characters would you like your password to contain?");

  if (!passwordLength) {
      alert("Please add how many characters you would like your password to contain");
    }
    if (passwordLength < 8) || (passwordLength > 128) {
        alert("Your password must be between 8-128 characters");
   }

  
//Prompt and confirm with user re password characters
const confirmLowercase = confirm("Do you want lowercase characters in your password")
const confirmUppercase = confirm("Do you want lowercase characters in your password")
const confirmSpecialChar = confirm("Do you want special characters in your password")
const confirmNumber = confirm("Do you want number characters in your password")



//Generate Password




// Declare a new function on line 3
function generatePassword() {
	// Create a variable to store our generated password
	var password = ''

	// Logic would go here
	...

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
