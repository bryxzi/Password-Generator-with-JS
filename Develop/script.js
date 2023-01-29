// Assignment Code
var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  
}

function generatePassword() {
  let passlength = window.prompt('How long do you want your password to be?')
  
  if (passlength < 8 || passlength > 128 || isNaN(passlength)) {
    window.alert('Invalid password length, please try again!');
    return;
  }
  
  let lowercase = window.confirm('Do you want lowercase letters?');
  let uppercase = window.confirm('Do you want uppercase letters?');
  let numeric = window.confirm('Do you want numbers?');
  let special = window.confirm('Do you want special characters?');
  
  if (!lowercase && !uppercase && !numeric && !special) {
    console.log('You must choose one, please try again!');
    return;
  }
  
  var password = "";
  var characters = "";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numeric) characters += "0123456789";
  if (special) characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  
  for (let i = 0; i < passlength; i++)
  password += characters[Math.floor(Math.random() * characters.length)];
  
  return password;
}

generateBtn.addEventListener('click', writePassword);


