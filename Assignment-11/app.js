// task 1
function main() {

    var firstName = prompt("Enter your first name:");
  
    var lastName = prompt("Enter your last name:");
  
    var fullName = firstName + " " + lastName;
  
    console.log("Hello, " + fullName + "! Welcome.");
  }
 
  main();
//   task 2

function main() {
   
    var favoritePhoneModel = prompt("Enter your favorite mobile phone model:");
  
    var inputLength = favoritePhoneModel.length;
  
    document.write("Length of your input: " + inputLength);
  }
  
  main();
//   task 3

function main() {
    var word = "Pakistani";
    var targetLetter = "n";
  
    var index = word.indexOf(targetLetter);
  
    document.write("Index of letter '" + targetLetter + "' in the word '" + word + "': " + index);
  }
  
  main();
//   task 4
function main() {
    var word = "Hello World";
    var targetLetter = "l";
  
    var lastIndex = word.lastIndexOf(targetLetter);
  
    document.write("Last index of letter '" + targetLetter + "' in the word '" + word + "': " + lastIndex);
  }
  
  main();
//   task 5

function main() {
    var word = "Pakistani";
    var index = 3;  
    var character = word.charAt(index);
    document.write("Character at index " + index + " in the word '" + word + "': " + character);
  }
  
  main();
  
//   task 6

function main() {
    var word = "Hyderabad";
    var substringToReplace = "Hyder";
    var replacement = "Islam";
  
    var newWord = word.replace(substringToReplace, replacement);
  
    document.write("Original word: " + word + "<br>");
    document.write("Modified word: " + newWord);
  }
  main();
//   task 7

function main() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
  
    var modifiedMessage = message.replace(/and/g, "&");
  
    document.write("Original message: " + message + "<br>");
    document.write("Modified message: " + modifiedMessage);
  }
  
  main();
//   task 8

function main() {
    var str = "472";
  
    var num = Number(str);
  
    document.write("String value: " + str + "<br>");
    document.write("String type: " + typeof str + "<br>");
    document.write("Number value: " + num + "<br>");
    document.write("Number type: " + typeof num);
  }
  main();
  
//   task 9

function main() {
 
    var userInput = prompt("Enter your input:");
  
    var capitalizedInput = userInput.toUpperCase();
  
    console.log("Input: " + userInput);
    console.log("Capitalized input: " + capitalizedInput);
  }
  
  main();
//   task 10

function main() {
   
    var userInput = prompt("Enter your input:");
  
    var titleCaseInput = toTitleCase(userInput);
  
    console.log("Input: " + userInput);
    console.log("Title case input: " + titleCaseInput);
  }
  
  function toTitleCase(str) {
    
    var words = str.toLowerCase().split(" ");
  
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    var titleCaseStr = words.join(" ");
  
    return titleCaseStr;
  }
  
  main();
  
// task 11

function main() {
   
    var username = prompt("Enter your username:");
  
    var hasSpecialSymbols = checkSpecialSymbols(username);
  
    while (hasSpecialSymbols) {
      username = prompt("Please enter a valid username without special symbols ([@ . , !]):");
      hasSpecialSymbols = checkSpecialSymbols(username);
    }
  
    console.log("Username: " + username);
  }
  
  function checkSpecialSymbols(str) {
    var specialSymbols = ['@', '.', ',', '!'];
  
    for (var i = 0; i < specialSymbols.length; i++) {
      if (str.indexOf(specialSymbols[i]) !== -1) {
        return true;
      }
    }
  
    return false;
  }
  
  main();
  
//   task 12

function main() {
   
    var password = prompt("Enter your password:");
  
    var isValid = checkPasswordRequirements(password);
  
    while (!isValid) {
      password = prompt("Please enter a valid password:\n- It should contain alphabets and numbers\n- It should not start with a number\n- It must be at least 6 characters long");
      isValid = checkPasswordRequirements(password);
    }
   
    console.log("Password: " + password);
  }
  
  function checkPasswordRequirements(password) {
   
    var containsAlphabets = /[a-zA-Z]/.test(password);
    var containsNumbers = /[0-9]/.test(password);
  
    var startsWithLetter = isNaN(parseInt(password[0]));
  
    var isLongEnough = password.length >= 6;
  
    return containsAlphabets && containsNumbers && startsWithLetter && isLongEnough;
  }
  
  main();
//   task 13

function main() {
    var university = "University of Karachi";
  
    var universityArray = university.split(" ");
  
    document.write("Original string: " + university + "<br>");
    document.write("Array elements: " + universityArray.join(", "));
  }
  
  main();
//   task 14

function main() {
   
    var userInput = prompt("Enter your input:");
  
    var lastCharacter = userInput[userInput.length - 1];
  
    console.log("Last character: " + lastCharacter);
  }
  
  main();
//   task 15

function main() {
    var sentence = "The quick brown fox jumps over the lazy dog";
    var wordToCount = "the";
  
    var lowercaseSentence = sentence.toLowerCase();
    var lowercaseWord = wordToCount.toLowerCase();
  
    var words = lowercaseSentence.split(" ");
  
    var count = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i] === lowercaseWord) {
        count++;
      }
    }
  
    console.log("Number of occurrences of '" + wordToCount + "': " + count);
  }
  
  main();
  