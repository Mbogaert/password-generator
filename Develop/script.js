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

  var size = prompt("What is the length of the password? \nEnter a number between 8-128.", "8");
  size = Number.parseInt(size, 10);
  // if size is not NaN then return an error
  if (Number.isNaN(size)) {
    alert("Invalid format. Please enter a valid number between 8 and 128.");
    return '';
  }
  // if size is too big or too small return an error
  if (size < 8 || size > 128) {
    alert("Invalid legnth. Please choose a value between 8 and 128.");
    return '';
  }
  console.log('size', size, typeof size);

  // confirm: lowercase yes or no 
  var askLowercase = window.confirm("Would you like to include at least 1 lowercase letter? \nOK for yes, CANCEL for no.");

  console.log('askLowercase', askLowercase, typeof askLowercase);

  if (askLowercase === false) {
    var allLowercase = [];
  }
  else {
    var allLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  };
  
//  confirm: UPPERCASE yes or no
var askUppercase = window.confirm("Would you like to include at least 1 uppercase letter? \nOK for yes, CANCEL for no.");

console.log('askUppercase', askUppercase, typeof askUppercase);

if (askUppercase === false) {
  var allUppercase = [];
}
else {
  var allUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
};

//  confirm: numeric yes or no
var askNumeric = window.confirm("Would you like to include at least 1 number? \nOK for yes, CANCEL for no.");

console.log('askNumeric', askNumeric, typeof askNumeric);

if (askNumeric === false) {
  var allNumeric = [];
}
else {
  var allNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
};

//  confirm: special characters yes or no
var askSpecialChar = window.confirm("Would you like to include at least 1 special character? (ie ~, !, @, #, $, etc) \nOK for yes, CANCEL for no.");

console.log('askSpecialChar', askSpecialChar, typeof askSpecialChar);

if (askSpecialChar === false) {
  var allSpecialChar = [];
}
else {
  var allSpecialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "-", "?", "<", ">"];
};

// at least one of each confirmed criteria should be included in the generated password
if (askLowercase === false && askUppercase === false && askNumeric === false && askSpecialChar === false) {
  window.alert("Invalid input. You must choose at least 1 character type.");
  return '';
}

// generate a password with criteria
//  size: 8 --> 12345678 128 --> 123455....8
//  allLowercase: if true then the password will contain one lowercase
//  allUppercase: if true then the password will contain one uppercase
//  allNumeric: if true then the password will contain one number
//  allSpecialChar: if true then the password will contain one special character
 
  return '';
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
