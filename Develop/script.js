// debugger
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
// TODO: prompt: what is the length?
//    valid values are >=8 characters && <=128 characters

  var size = prompt("What is the length of the password? Enter a number between 8-128.", "8");
  console.log(size, typeof size);

  // confirm: lowercase yes or no 
  var askLowercase = window.confirm("Would you like to include at least 1 lowercase letter?");

  if (askLowercase === false) {
    var arrLowercase = [];
  }
  else {
    var arrLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  
//  confirm: UPPERCASE yes or no
var askUppercase = window.confirm("Would you like to include at least 1 uppercase letter?");

if (askUppercase === false) {
  var arrUppercase = [];
}
else {
  var arrUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
};

//  confirm: numeric yes or no
var askNumeric = window.confirm("Would you like to include at least 1 number?");

if (askNumeric === false) {
  var arrNumeric = [];
}
else {
  var arrNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
};

//  confirm: special characters yes or no
var askSpecialChar = window.confirm("Would you like to include at least 1 special character? (ie ~, !, @, #, $, etc)");

if (askSpecialChar === false) {
  var arrSpecialChar = [];
}
else {
  var arrSpecialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "-", "?", "<", ">"];
};

//     at least one of each confirmed criteria should be included in the generated password

// generate a password with above criteria

  return "zero";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
