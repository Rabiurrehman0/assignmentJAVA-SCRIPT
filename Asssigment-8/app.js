      // task 1
      // Prompt the user to enter a character
            var character = prompt("Enter a character:");

            // Get the ASCII code of the character
            var asciiCode = character.charCodeAt(0);

            // Check if the character is a number
            if (asciiCode >= 48 && asciiCode <= 57) {
            document.write("<h3>The input is a number.</h3>");
            }
            // Check if the character is an uppercase letter
            else if (asciiCode >= 65 && asciiCode <= 90) {
            document.write("<h3>The input is an uppercase letter.</h3>");
            }
            // Check if the character is a lowercase letter
            else if (asciiCode >= 97 && asciiCode <= 122) {
            document.write("<h3>The input is a lowercase letter.</h3>");
            }
            // If none of the above conditions match, the input is not a number or a letter
            else {
            document.write("<h3>The input is not a number or a letter.</h3>");
            }
             // task 2
               // Prompt the user to enter the first integer
            var firstInteger = parseInt(prompt("Enter the first integer:"));

            // Prompt the user to enter the second integer
            var secondInteger = parseInt(prompt("Enter the second integer:"));

            // Check if the first integer is greater than the second integer
            if (firstInteger > secondInteger) {
            document.write("<h3>The larger number is: " + firstInteger + "</h3>");
            }
            // Check if the second integer is greater than the first integer
            else if (secondInteger > firstInteger) {
            document.write("<h3>The larger number is: " + secondInteger + "</h3>");
            }
            // If none of the above conditions match, the two integers are equal
            else {
            document.write("<h3>The two integers are equal.</h3>");
            }
// task 3
  // Prompt the user to enter a number
  var number = parseFloat(prompt("Enter a number:"));

  // Check if the number is positive
  if (number > 0) {
  document.write("<h3>The number is positive.</h3>");
  }
  // Check if the number is negative
  else if (number < 0) {
  document.write("<h3>The number is negative.</h3>");
  }
  // If none of the above conditions match, the number is zero
  else {
  document.write("<h3>The number is zero.</h3>");
  } 
//   task 4
  // Prompt the user to enter a character
  var character = prompt("Enter a character:");

  // Convert the character to lowercase for easier comparison
  character = character.toLowerCase();

  // Check if the character is a vowel
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
  document.write("<h3>True, the character is a vowel.</h3>");
  }
  // If the character is not a vowel
  else {
  document.write("<h3>False, the character is not a vowel.</h3>");
  }
//   task 5
  // Store the correct password
  var correctPassword = "Password123";

  // Prompt the user to enter their password
  var enteredPassword = prompt("Enter your password:");

  // Check if the entered password is empty
  if (!enteredPassword) {
  document.write("<h3>Please enter your password.</h3>");
  }
  // Check if the entered password matches the correct password
  else if (enteredPassword === correctPassword) {
  document.write("<h3>Correct! The password you entered matches the original password.</h3>");
  }
  // If the entered password is incorrect
  else {
  document.write("<h3>Incorrect password.</h3>");
  }
//   task 6
  // var greeting;
            // var hour = 13;
            // if (hour < 18) {
            // greeting = "Good day";
            // else
            // greeting = "Good evening";
            // }

            var greeting;
            var hour = 13;
            if (hour < 18) {
            greeting = "Good day";
            } else {
            greeting = "Good evening";
            }
            
 // task 7
     // Prompt the user to enter the time in 24-hour clock format
     var time = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

     // Extract the hour from the time
     var hour = parseInt(time.substring(0, 2));

     // Determine the appropriate case based on the hour
     if (hour >= 0 && hour < 12) {
     document.write("<h3>Good morning!</h3>");
     } else if (hour >= 12 && hour < 18) {
     document.write("<h3>Good afternoon!</h3>");
     } else if (hour >= 18 && hour < 24) {
     document.write("<h3>Good evening!</h3>");
     } else {
     document.write("<h3>Invalid time entered.</h3>");
     }

