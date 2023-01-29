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


}


