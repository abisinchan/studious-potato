const generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

function generatePassword() {
    let lengthOption = parseInt(prompt("How many characters would you like your password to contain?"));
    if (isNaN(lengthOption) || lengthOption < 8 || lengthOption > 128) {
        alert("Please enter a valid length between 8 and 128 characters.");
        return "";
      }  
}

const includeNumbers = confirm('Click OK to confirm inclusion of numeric characters');
const includeLowercase = confirm('Click OK to confirm inclusion of lowercase alphabets');
const includeUppercase = confirm('Click OK to confirm inclusion of uppercase alphabets');
const includeSymbols = confirm('Click OK to confirm inclusion of special characters');

includeNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

 includeLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  

includeUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


includeSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '>', '?', ':', '/', '~', '_','-', '=', '+'];



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var generateBtn = document.querySelector("#generate");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  