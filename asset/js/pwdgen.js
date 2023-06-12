
// dom
const generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

// password generator
function generatePassword() {
  const lengthOption = parseInt(prompt("How many characters would you like your password to contain?"));

  // password generator conditions
  if (isNaN(lengthOption) || lengthOption < 8 || lengthOption > 128) {
    alert("Please enter a valid length between 8 and 128 characters.");
    return "";
  }

  const includeNumbers = confirm('Click OK to confirm inclusion of numeric characters');
  const includeLowercase = confirm('Click OK to confirm inclusion of lowercase alphabets');
  const includeUppercase = confirm('Click OK to confirm inclusion of uppercase alphabets');
  const includeSymbols = confirm('Click OK to confirm inclusion of special characters');

  if (!includeNumbers && !includeLowercase && !includeUppercase && !includeSymbols) {
    alert("Please select at least one character type.");
    return "";
  }
// create new array for random selection
  let selectedCharacters = [];

  if (includeNumbers) {
    let arrayCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    selectedCharacters = selectedCharacters.concat(arrayCharacters);
  }

  if (includeLowercase) {
    let arrayCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    selectedCharacters = selectedCharacters.concat(arrayCharacters);
  }

  if (includeUppercase) {
    let arrayCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    selectedCharacters = selectedCharacters.concat(arrayCharacters);
  }

  if (includeSymbols) {
    let arrayCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '>', '?', ':', '/', '~', '_','-', '=', '+'];
    selectedCharacters = selectedCharacters.concat(arrayCharacters);
  }

  let password = "";

  for (let i = 0; i < lengthOption; i++) {
    const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    password += selectedCharacters[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
