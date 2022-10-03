// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var userInput = window.prompt("How many characters do you want your password to be?")

var passwordLength = parseInt(userInput)

 if (isNaN(passwordLength)) {
window.alert("That is not a number!")
 } else{
    window.alert("That is a valid number")
 }
   
    
    return "Generated password will go here!";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
