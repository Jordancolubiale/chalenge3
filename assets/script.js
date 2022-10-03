// Assignment Code
var generateBtn = document.querySelector("#generate");

// function randomNum(min, max) {
// if (!max) {
//     max = min
//     min - 0
// }
// var rand = Math.random()
// return Math.floor(min*(1 - rand) + rand*max)
// }

function getRandomItem(list) {
    // return list[randomNum(list.length)]
     return list[Math.floor(Math.random()*list.length)]
}

function generatePassword() {

    var userInput = window.prompt("How many characters do you want your password to be?")

    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("That is not a number!")
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be from 8-128 characters")
        return
    }

    var userWantsNumbers = window.confirm("Would you like your password to contain numbers?")
    var userWantsSymbols = window.confirm("Would you like your password to contain symbols?")
    var userWantsLowerCase = window.confirm("Would you like your password to contain lowercase letters?")
    var userWantsUpperCase = window.confirm("Would you like your password to contain uppercase letters?")

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var symbols = ["/", "?", "!", "@", "#", "$", "%", "&", "*", "^"]
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var optionsChosen = []

    if (userWantsNumbers === true) {
        optionsChosen.push(numbers)
    }

    if (userWantsSymbols === true) {
        optionsChosen.push(symbols)
    }

    if (userWantsLowerCase === true) {
        optionsChosen.push(lowerCase)
    }

    if (userWantsUpperCase === true) {
        optionsChosen.push(uppercase)
    }

    var generatedPassword = ""

    for (var i = 0; i < passwordLength; i++) {
      var randomList = getRandomItem(optionsChosen)
      var randomChar = getRandomItem(randomList)
      console.log(randomChar)
      generatedPassword += randomChar
    }
return generatedPassword
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)