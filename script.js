// debugger
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //  Ask about length of password prompt
  var size = prompt("What is the length of the password? \nEnter a number between 8-128.", "8");
  size = Number.parseInt(size, 10);
  // if size is not NaN then return an error
  if (Number.isNaN(size)) {
    alert("Invalid format. Please enter a valid number between 8 and 128.");
    return '';
  }
  // if size is too big or too small return an error
  if (size < 8 || size > 128) {
    alert("Invalid length. Please choose a value between 8 and 128.");
    return '';
  }
  console.log('size', size, typeof size);
  // variable declaring the list array
  var list = [];

  // confirm: lowercase yes or no 
  var askLowercase = window.confirm("Would you like the password to include lowercase letters? \nOK for yes, CANCEL for no.");

  console.log('askLowercase', askLowercase, typeof askLowercase);

  if (askLowercase === true) { // pushes characters to list arrary
    list.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  };
  console.log(list);

  //  confirm: UPPERCASE yes or no
  var askUppercase = window.confirm("Would you like to include uppercase letter? \nOK for yes, CANCEL for no.");

  console.log('askUppercase', askUppercase, typeof askUppercase);

  if (askUppercase === true) { // pushes characters to list array
    list.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  };
  console.log(list);

  //  confirm: numeric yes or no
  var askNumeric = window.confirm("Would you like to include numbers? \nOK for yes, CANCEL for no.");

  console.log('askNumeric', askNumeric, typeof askNumeric);

  if (askNumeric === true) { // pushes characters to list array
    list.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  };
  console.log(list);

  //  confirm: special characters yes or no
  var askSpecialChar = window.confirm("Would you like to include the password to include special characters? (ie ~, !, @, #, $, etc) \nOK for yes, CANCEL for no.");

  console.log('askSpecialChar', askSpecialChar, typeof askSpecialChar);

  if (askSpecialChar === true) { // pushes characters to list array
    list.push("~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "-", "?", "<", ">");
  };
  console.log(list);

  // at least one of each confirmed criteria should be included in the generated password
  if (askLowercase === false && askUppercase === false && askNumeric === false && askSpecialChar === false) {
    window.alert("Invalid input. You must choose at least 1 character type.");
    return '';
  }

  // initialize string for password
  var generated = '';

  // NOTE TO SELF: this is the breakdown of the loop below 
  // var counter = 0 
  // while (counter < size) {
  //   generated += list[Math.floor(Math.random() * list.length)]
  //     counter = counter + 1
  //  }

  for (var i = 0; i < size; i++) {
    generated += list[Math.floor(Math.random() * list.length)]
  }

  console.log(generated);


  // NOTE TO SELF: random code equation Math.floor(Math.random() * MAXsize)

  return generated;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
