// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; { 
    confirm("Would you like lower case letters in your password?");
}
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; { 
    confirm("Would you like upper case letters in your password?");
}
var numericVal = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; {
    confirm("Would you like numbers in your password?");
}
var specChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]; { 
    confirm("Would you like special characters in your password?");
}
var passwordLength = prompt("How many characters would you like your password to be?");

if (!lowerCase && !upperCase && !numericVal && !specChar) {
  alert("You must select a lowercase, uppercase, number, or special character in your password.")
  generatePassword();
} 

if (passwordLength < 8 && passwordLength > 128) {
  alert("Your password must be between 8 and 128 characters.")
  generatePassword();
}

for (var i = 7; i < 129; i++) {

    var num = Math.floor(Math.random() * Math.floor(128));
    console.log(lowerCase[num]);
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);