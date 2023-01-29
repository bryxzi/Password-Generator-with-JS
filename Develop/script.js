// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



function generatePassword () {

  let passlength = window.prompt('how long do you want your password to be?')
  console.log(passlength);

  let validator;

  if (passlength >= 8 && passlength <= 128)
  validator = true;
else {
  console.log('invalid password length');
  return;
}

let lowercase = window.confirm('do you want lowercase letters?');
let uppercase = window.confirm('do you want uppercase letters?');
let numeric = window.confirm('do you want numbers?');
let special = window.confirm('do you want special characters?');

if (!lowercase && !uppercase && !numeric && !special) {
console.log('you must atleast select one');
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
  
  console.log(password);
}


