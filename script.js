// Assignment Code
var characterAmountRange = document.getElementById("characterAmountRange")
var characterAmountNumber = document.getElementById("characterAmountNumber")

var password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to input character Amount Range and character Amount Number.

characterAmountRange.addEventListener("input", syncharacterAmount)
characterAmountNumber.addEventListener("input", syncharacterAmount)

