//this is where i put my var to show in the password gen on  the website
var specialChar = ["!", "%", "&", ",", "*", "+", "-", "_", ".", "/", "<", ">", "?", "~", "$", "@", "{", "}", "[", "]", "^", "#"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//this is where i made a function that finds what ever password length the person on the site choses as long as its batween 8-128 char
function findPasswordlength(){
  var pwLeghth = prompt("please chose a passowrd batween 8 and 128 charictars")
  while(pwLeghth<=7 || pwLeghth>=129){
  
  alert("The password length must be between 8-128 characters! Please try again.");
  var pwLength = (prompt("How many characters would you like your password to contain? Remember: it has to be between 8-128 characters!"));
  } 
return pwLeghth;
//commented this out becasuse i found while statments and i liked the simplicity of this 
//   if (pwLeghth < 8 ){alert ("password must be batween 8 and 128 characters long")}
 // else if (pwLeghth > 128){alert ("password must be batween 8 and 128 characters long")} 
}
// this is where i find the i put my confirm options to make them chose uppercase or lowercase so the code can make the password baseed off there selection 
function getPasswordCriteria() {
  var pwLeghth = findPasswordlength();
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseSpecialchar = confirm("Do you want specialchar in your password?");
  var userChoseAlphalower = confirm("Do you want lowercase letters in your password?");
  var userChoseAlupper = confirm("Do you want uppercase letters in your password?");
  var options = {
    pwLeghth: pwLeghth,
    userChoseNumbers: userChoseNumbers,
    userChoseSpecialchar: userChoseSpecialchar,
    userChoseAlphalower: userChoseAlphalower,
    userChoseAlupper: userChoseAlupper,   
  };
  return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}
// this is where i call all the numbers letters and char to action in the code so they will show in the password genorator
function generatePassword() {
    var userChose = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];
    if(userChose.userChoseNumbers) {
      availableChars = availableChars.concat(number);
    }
    if(userChose.userChoseSpecialchar){
      availableChars = availableChars.concat(specialChar);
    }
    if(userChose.userChoseAlphalower){
      availableChars = availableChars.concat(alphaLower);
    }
     if(userChose.userChoseAlupper){
      availableChars = availableChars.concat(alphaUpper);
     }
    

    for(var i = 0; i <userChose.pwLeghth; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }


  return passwordArr.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


















