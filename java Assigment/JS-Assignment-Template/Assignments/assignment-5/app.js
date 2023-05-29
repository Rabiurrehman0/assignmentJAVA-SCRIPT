
// chapter5
// task1
var number1 = prompt("Enter the first number");
var number2 = prompt("Enter the second number");
var sum = number1 + number2;
document.write("sum of " + number1 + " and " + number2 + " is " + sum);
// task2a
var number1 = prompt("Enter the first number");
var number2 = prompt("Enter the second number");
var sub = number1 - number2;
document.write("subtraction of " + number1 + " and " + number2 + " is " + sub);
// task2b
var number1 = prompt("Enter the first number");
var number2 = prompt("Enter the second number");
var Muliply = number1 * number2;
document.write(
  "multiplication of " + number1 + " and " + number2 + " is " + Muliply
);
//  task2c
var number1 = prompt("Enter the first number");
var number2 = prompt("Enter the second number");
var divide = number1 / number2;
document.write("division of " + number1 + " and " + number2 + " is " + divide);
// task2d
var number1 = prompt("Enter the first number");
var number2 = prompt("Enter the second number");
var modulus = number1 % number2;
document.write("modulus " + number1 + " and " + number2 + " is " + modulus);
// task3a
var myVariable;
// task3b
myVariable = 2;
document.write("Value after variable declaration is: " + myVariable);
// task3c
myVariable = 1;
//   taskF3d
document.write("Initial value: " + myVariable);
//   task3e
myVariable++;
// task3f
document.write("Value after increment is: " + myVariable);
// task3g
myVariable += 7;
//   task3h
document.write("Value after addition is: " + myVariable);
// task3i
myVariable--;
//   task3j
document.write("Value after decrement is: " + myVariable);
// task3k
var remainder = myVariable % 3;
// task3l
document.write("The remainder is: " + remainder);
// task4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR");
// task5
var number = +prompt("Enter a number to display its multiplication table:");
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " x " + i + " = " + result + "<br>");
}
//   task6
var celsiusTemperature = 30;
var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
document.write(
  celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>"
);
var fahrenheitTemperature2 = 86;
var celsiusTemperature2 = ((fahrenheitTemperature2 - 32) * 5) / 9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");
// task7
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var item1Total = item1Price * item1Quantity;
var item2Total = item2Price * item2Quantity;
var subtotal = item1Total + item2Total;
var totalCost = subtotal + shippingCharges;
document.write("<h2>Checkout Process</h2>");
document.write("Price of Item 1: " + item1Price + " PKR");
document.write("Price of Item 2: " + item2Price + " PKR");
document.write("Ordered Quantity of Item 1: " + item1Quantity);
document.write("Ordered Quantity of Item 2: " + item2Quantity);
document.write("Shipping Charges: " + shippingCharges + " PKR");
document.write("Total Cost of Item 1: " + item1Total + " PKR");
document.write("Total Cost of Item 2: " + item2Total + " PKR");
document.write("Subtotal: " + subtotal + " PKR");
document.write(
  "Total Cost (including shipping charges): " + totalCost + " PKR"
);
// task8
var totalMarks = 1000;
var marksObtained = 750;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Percentage Calculation</h2>");
document.write("Total Marks: " + totalMarks);
document.write("Marks Obtained: " + marksObtained);
document.write("Percentage: " + percentage.toFixed(2) + "%");
// task9
var usdToPkrRate = 104.8;
var sarToPkrRate = 28;
var usdAmount = 10;
var sarAmount = 25;
var pkrAmount = usdAmount * usdToPkrRate + sarAmount * sarToPkrRate;
document.write("<h2>Currency Conversion</h2>");
document.write("Amount in US Dollars: " + usdAmount);
document.write("Amount in Saudi Riyals: " + sarAmount);
document.write(
  "Total Amount in Pakistani Rupees: " + pkrAmount.toFixed(2) + " PKR"
);
// task10
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("<h2>Arithmetic Operations</h2>");
document.write("Initial Number: " + number);
document.write("Result: " + result);
// task11
var currentYear = new Date().getFullYear();
var birthYear = 1998;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h3>Age Calculator</h3>");
document.write("Current Year: " + currentYear);
document.write("Birth Year: " + birthYear);
document.write("Possible Age 1: " + age1);
document.write("Possible Age 2: " + age2);
// task12
var radius = 5;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("<h2>Geometrizer</h2>");
document.write("Radius: " + radius);
document.write("Circumference: " + circumference.toFixed(2));
document.write("Area: " + area.toFixed(2));
// task13
var favoriteSnack = "Chocolate chip";
var currentAge = 23;
var maximumAge = 65;
var amountSnackPerDay = 3;
var yearsRemaining = maximumAge - currentAge;
var snacksPerYear = amountPerDay * 365;
var totalSnacks = yearsRemaining * snacksPerYear;
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack);
document.write("Current Age: " + currentAge);
document.write("Maximum Age: " + maximumAge);
document.write("Estimated Amount Per Day: " + amountSnackPerDay);
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);
