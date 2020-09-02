// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
var specialchars = "!@#$%^&*()_+=;:{}[]"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var possibleoptions = ""

  // Prompt for length of password
  var passwordLength = prompt("Enter length of password")
  // Prompt for character types to include in the password
  var wantlowercase = confirm("Do you want lowercase?")
  var wantuppercase = confirm("Do you want uppercase?")
  var wantnumbers = confirm("Do you want numbers")
  var wantspecialchars = confirm("Do you want special characters")

  //If one was not chosen - Alert user must chose one
  if (wantlowercase === false && wantuppercase === false && wantnumbers === false && wantspecialchars === false)
    return alert("Must select one.") // will end function

  //console.log ("at least one selected")

  // Check if one type was selected
  if (wantlowercase === true)
    possibleoptions += lowercase
  if (wantuppercase === true)
    possibleoptions += uppercase
  if (wantnumbers === true)
    possibleoptions += numbers
  if (wantspecialchars === true)
    possibleoptions += specialchars

  //need to get a variable for the 81 characters
  //pass that through a function that get a random index for each character in the array

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var selectedoptions = possibleoptions;

    function getRandomIndex(selectedoptions) {
      return Math.floor(Math.random() * selectedoptions.length);

    }
    var onechar = selectedoptions.charAt(getRandomIndex(selectedoptions));
    password += onechar;
  }

  return password;
}

