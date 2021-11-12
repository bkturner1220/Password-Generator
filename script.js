// Assignment Code
let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseChars = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
let numbersOnly = '1234567890';
let specialChars = '~!@#$%^&*()_+{}:?><;.,';
let passwd = '';
let avalChars = '';
let generateBtn = document.querySelector('#generate');


function generatePassword(){

// Determine the desired length of the password.
let pwLength = prompt('Please indicate a password length between 8 and 128.')

// Verify the password length entered meets the length requirements
if (pwLength >= 8 && pwLength <= 128) {
  console.log(pwLength)
}

// If password length provided is less than the min or more than the max
// will return and error and require the user to start again.
// Password length criteria must be met before user can select desired password character content.
else {
  alert('Your password must be at least 8, but no more than 128, characters \nPlease enter a valid number between 8 & 128.')
  return '';
}

// Determine if user wants lower case letters in the password.
let arrayLowerCase = confirm('Do you want to use lower case (a-z) letters in your password?')
console.log(arrayLowerCase)


// Determine if user wants upper case letters in the password.
let arrayUpperCase = confirm('Do you want to use upper case (A-Z) letters in your password?')
console.log(arrayUpperCase)


// Determine if user wants numbers in the password.
let arrayNumbersOnly = confirm('Do you want to use numbers (0-9) in your password?')
console.log(arrayNumbersOnly)


// Determine if user wants special characters in the password.
let arraySpecialChars = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')
console.log(arraySpecialChars)


// Validate at least one criteria was selected
// Execute random character selection based on password length
if (arrayLowerCase) {
  avalChars += lowerCaseChars
}

// If upper case letters are wanted, randomly select a letter from specified array.
if (arrayUpperCase) {
  avalChars += upperCaseChars
}

// If numbers are wanted, randomly select a number from specified array.
if (arrayNumbersOnly) {
  avalChars += numbersOnly
}

// If special characters are wanted, randomly select a character from specified array.
if (arraySpecialChars) {
  avalChars += specialChars
}
// Will stop the process and return an alert if there are no character types selected.
if (
  !arrayLowerCase && !arrayUpperCase && !arrayNumbersOnly && !arraySpecialChars
) {
  return alert('Please select at least one criteria!');
  
}

for (let i = 0; i < pwLength; i++) {
  // Selects the characters that will be in the password randomly from
  // the characters that were pulled into availChars. Will loop through
  // selecting characters at random until there are enough characters to
  // fullfil the password length requirement
  passwd +=avalChars[Math.floor(Math.random () * avalChars.length)];
}
return passwd;
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  passwordText.value = passwd;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);