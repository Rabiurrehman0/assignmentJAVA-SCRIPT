// chpt1
// task1
alert("Hello there! Welcome to our website.");
// task2
alert("JavaScript Alert\nError! Please enter a valid password.");
// task3
alert("Welcome to JS Land..Happy Coding!");
// task4
alert("JavaScript Alert..Welcome to JS Land..");
alert("JavaScript Alert..Happy Coding!");
alert("Prevent this page from creating additional dialogs.");

// chapt2
// task1
var username;
// task2
var myName = "RABI UR REHMAN";
alert(myName);
//   task3
var message;
message = "Hello World";
alert(message);
// task4
var Mname = "Rabi";
alert(Mname);
var age = "23 years";
alert(age);
var skills = "Certified Web Development";
alert(skills);
//   task5
alert("Pizza\nPizz\npiz\npi\np\n");
// task6
var email;
email = "rabi@gmail.com";
alert("my email address is " + email);
// task7
var book;
book = " i am trying to learn from the book A smarter way to learn JavaScript";
alert(book);
// task8
document.write("Yah! i can write HTML content through Javascript");
//   task9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
//   chap3
// task1
var age = 20;
alert("I am " + age + "years old");
// task2
alert("you have visited thiss website 14 times");
// task3
var birthyear = 1998;
document.write("My birth year is " + birthyear);
//   task4
var VisitorName = "RABI";
var ProductTitle = "XYZ Clothing store";
var Quantity = "5 T-shirt's ";
document.write(VisitorName + " ordered " + Quantity + " on " + ProductTitle);

//   chapter4
// task1
var name, age, lastName;
//   task2a
var myName;
var numberOne;
var upperCase;
var _MyName;
var My_name;
var $startWithDollar;
//   task2b
//   var 249;
//   var hey ;
//   var n 02;
//   var legal-varibl:
//   var legal variabl;
// task 3
var a = document.getElementById("heading");
var b =
  "Variables names can only contain , alphabet, $ ,uppercase and _. for example:$my_1stVariable";
var c =
  "Variables must begin with a letter, $ or _ . For example : $name,_name or name";
var d = "Variables names are case sensitivee";
var e = "Variables names should not be JS keyword";
document.write(b + "<br>" + c + "<br>" + d + "<br>" + e);

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
document.write(
  "You will need " +
    totalSnacks +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maximumAge
);
// chapter6
// task1
var num = 9;
document.write("the value is :;" + num);
var num = ++num;
document.write("<br>the value of ++num is :" + num);
var num = num++;
document.write(" <br>value of ++num is:" + num);
var num = --num;
document.write(" <br>value of --num is:" + num);
var num = num--;
document.write(" <br>value of num-- is:" + num);
// task2
var a = 23;
var b = 11;
document.write(+--a + "<br>");
document.write(+--a - --b + "<br>");
document.write(--a - --b + ++b + "<br>");
document.write(--a - --b + ++b + b + "<br>");
var result = --a - --b + ++b + b--;
document.write(result);
document.write("<br>a is" + a);
document.write("<br>b is" + b);
document.write("<br>result is" + result);
// task3
var enter = prompt("enter Name");
var msg = "hey wellcome!";
alert(msg);
// task4 no assgnment
// task5
var num = parseInt(prompt("enter number"));
if (isNaN(num)) {
  number = 5;
}
var table = "";
for (var i = 1; i <= 10; i++) {
  table += num + "x" + i + "=" + num * i + "<br>";
}
document.write(table);
// task6
var name1 = prompt("enter subject name one ");
var name2 = prompt("enter subject name two ");
var name3 = prompt("enter subject name three ");
var total = 100;
var grand_total = 300;
var obtained_marks1 = parseInt(prompt("1st subject marks"));
var obtained_marks2 = parseInt(prompt("2nd subject marks"));
var obtained_marks3 = parseInt(prompt("3rd subject marks"));
var all_obtained = obtained_marks1 + obtained_marks2 + obtained_marks3;
var percentage = (all_obtained / grand_total) * 100;
document.write("subject one  is " + name1);
document.write("<br>subject two is " + name2);
document.write("<br>subject three is " + name3);
document.write("<br> overall percentage is " + percentage);
// task7 NA
// chapter7
// task1
var cityName = prompt("Enter the city name:");
if (cityName.toLowerCase() === "karachi") {
  document.write("<h2>Welcome to the city of lights!</h2>");
}
// task2
var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
  document.write("<h2>Good Morning Sir.</h2>");
} else if (gender.toLowerCase() === "female") {
  document.write("<h2>Good Morning Ma'am.</h2>");
} else {
  document.write("<h2>Good Morning!</h2>");
}
// task3
var signalColor = prompt("Enter the color of the traffic signal:");
signalColor = signalColor.toLowerCase();
if (signalColor === "red") {
  document.write("<h3>Must Stop</h3>");
} else if (signalColor === "yellow") {
  document.write("<h3>Ready to move</h3>");
} else if (signalColor === "green") {
  document.write("<h3>Move now</h3>");
} else {
  document.write("<h3>Invalid color</h3>");
}
// task4
var remainingFuel = +prompt(
  "Enter the remaining fuel in your car (in liters):"
);
if (remainingFuel < 0.25) {
  document.write("<h2>Please refill the fuel in your car.</h2>");
} else {
  document.write("<h3>Fuel level is sufficient. Have a safe journey!</h3>");
}
// task5a
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
// task5b
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// task5c
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
// task5d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
// task5e
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
// task5f
if ("car" < "cat") {
  alert("car is smaller than cat");
}
// task6
var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (totalObtainedMarks / totalMarks) * 100;
var grade;
if (percentage >= 80) {
  grade = "A+";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else if (percentage >= 40) {
  grade = "D";
} else {
  grade = "Fail";
}
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");
document.write("<h3>Grade: " + grade + "</h3>");
// task7
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
  document.write("<h3>Bingo! Correct answer.</h3>");
} else if (userGuess === secretNumber + 1) {
  document.write("<h3>Close enough to the correct answer.</h3>");
} else {
  document.write(
    "<h3>Sorry, incorrect guess. The secret number was " +
      secretNumber +
      ".</h3>"
  );
}
// task8
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
  document.write("<h3>The number " + number + " is divisible by 3.</h3>");
} else {
  document.write("<h3>The number " + number + " is not divisible by 3.</h3>");
}
//  task9
var number = +prompt("Enter a number:");
if (number % 2 === 0) {
  document.write("<h3>The number " + number + " is even.</h3>");
} else {
  document.write("<h3>The number " + number + " is odd.</h3>");
}
// task10
var temperature = +prompt("Enter the temperature in degrees Celsius:");
if (temperature > 40) {
  document.write("<h3>It is too hot outside.</h3>");
} else if (temperature > 30) {
  document.write("<h3>The weather today is normal.</h3>");
} else if (temperature > 20) {
  document.write("<h3>Today's weather is cool.</h3>");
} else if (temperature > 10) {
  document.write("<h3>OMG! Today's weather is so cool.</h3>");
} else {
  document.write("<h3>It is extremely cold outside.</h3>");
}
