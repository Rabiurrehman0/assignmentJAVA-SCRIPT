// task 1

function main() {
  
    var userInput = parseInt(prompt("Enter a positive integer:"));
  
    if (Number.isInteger(userInput) && userInput > 0) {
      
      var roundedValue = Math.round(userInput);
  
      var floorValue = Math.floor(userInput);
  
      var ceilValue = Math.ceil(userInput);
  
      document.write("Number: " + userInput + "<br>");
      document.write("Rounded Value: " + roundedValue + "<br>");
      document.write("Floor Value: " + floorValue + "<br>");
      document.write("Ceil Value: " + ceilValue + "<br>");
    } else {
      
      document.write("Invalid input. Please enter a positive integer.");
    }
  }
  main();
//   task 2

function main() {
    
    var userInput = parseFloat(prompt("Enter a negative floating-point number:"));
  
    if (Number.isFinite(userInput) && userInput < 0) {
     
      var roundedValue = Math.round(userInput);
  
      var floorValue = Math.floor(userInput);
  
      var ceilValue = Math.ceil(userInput);
  
      document.write("Number: " + userInput + "<br>");
      document.write("Rounded Value: " + roundedValue + "<br>");
      document.write("Floor Value: " + floorValue + "<br>");
      document.write("Ceil Value: " + ceilValue + "<br>");
    } else {
     
      document.write("Invalid input. Please enter a negative floating-point number.");
    }
  }
  
  main();
//   task 3

function main() {
   
    var userInput = parseFloat(prompt("Enter a number:"));
  
    var absoluteValue = Math.abs(userInput);
  
    document.write("Absolute value of " + userInput + " is " + absoluteValue);
  }
  
  main();
//   task 4

function main() {
   
    var diceValue = Math.floor(Math.random() * 6) + 1;
  
    document.write("Dice value: " + diceValue);
  }
  
  main();
//   task 5

function main() {
    
    var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
  
    document.write("Coin value: " + coinValue);
  }
  
  main();
//   task 6

function main() {
   
    var randomNumber = Math.floor(Math.random() * 100) + 1;
  
    document.write("Random number: " + randomNumber);
  }
  
  main();
//   task 7

function main() {

    var userInput = prompt("Enter your weight:");
  
    var weight = parseFloat(userInput);
  
    if (Number.isNaN(weight)) {
      document.write("Invalid input. Please enter a valid weight.");
    } else {
     
      document.write("Weight: " + weight + " kgs");
    }
  }
  
  main();
//   task 8

function main() {
    
    var secretNumber = Math.floor(Math.random() * 10) + 1;
  
    var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
  
    if (userInput === secretNumber) {
   
      document.write("Congratulations! You guessed the secret number.");
    } else {
     
      document.write("Sorry, that was incorrect. The secret number was " + secretNumber + ".");
    }
  }
  
  main();
  