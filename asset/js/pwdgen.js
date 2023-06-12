const generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

function generatePassword() {
    let lengthOption = parseInt(prompt("How many characters would you like your password to contain?"));
    if (isNaN(lengthOption) || lengthOption < 8 || lengthOption > 128) {
        alert("Please enter a valid length between 8 and 128 characters.");
        return "";
      }
    
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var generateBtn = document.querySelector("#generate");
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  