// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare function for generatePassword 



//Declare arrays here for lowercase, uppercase, special characters and numbers.

const lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialcharArray = ["#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","["\""\ "\'"]
const numbercharArray = ["0","1","2","3","4","5","6","7","8","9"];


//Prompt user for passwordLength
//if  less than <8 characters in length or more than >128 characters. Alert user to put in correct passwordLength.




//Prompt user for lowercase characters
//Prompt user for uppercase characters
//Prompt user for special characters
//Prompt user for numeric characters


//Confirm user inputs for characters

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
