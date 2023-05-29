// task 1
function power(a, b) {
    var result = 1;
  
    for (var i = 0; i < b; i++) {
      result *= a;
    }
  
    return result;
  }
  

  function main() {
    
    var base = parseFloat(prompt("Enter the base number:"));
    var exponent = parseInt(prompt("Enter the exponent:"));
  
    var result = power(base, exponent);
  
    console.log(base + " raised to the power of " + exponent + " is:", result);
  }
  
  main();
  













// task2
alert("started")
function leapYear(y){
    if(y%4===0 && (y%100!==0 ||y % 400 == 0)){
        console.log(y + " is a leap year")
    }else{
        console.log(y + " is not a leap year")

    }
}

leapYear(2023)
// task3
function sides(a,b,c){
    var S=(a+b+c)/2
    console.log(S)
    var area=(S*(S-a)*(S-b)*(S-c))
    console.log(Math.sqrt(area))
}
sides(2,3,2)


// task4
function findIndexOf(array,findOf){
    x=0
    for (var i=0; i<= array.length ; i++){
        if(array[i]===findOf){
            alert(`the index of ${findOf} is ${i}`)
            x=1
        }
    }
    if(x!=1){
        alert(`the index of ${findOf} is -1`)
    }
    
}
var li=['a','b','c','d','e','f']
findIndexOf(li,"l")

// task5
function RemoveVowel(string){
    var checkPoint="";
    string=string.toLowerCase()
    for(var i=0; i<string.length; i++){
        if(string[i]!=="a" && string[i]!=="e" && string[i]!=="i" && string[i]!=="o" && string[i]!=="u"){
            checkPoint+=string[i]
        }
    }
    return checkPoint
}
console.log(RemoveVowel("hello This IS Rabi ur rehman"))
// task6
function occuranceOfvowel(str){
    str=str.toLowerCase().split('')
    console.log(str)
    for (var i=0; i<str.length; i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u" ){
            if(str[i+1]==="a" || str[i+1]==="e" || str[i+1]==="i" || str[i+1]==="o" || str[i+1]==="u" ){
                console.log(str[i] , str[i+1])
            }
        }
    }
}
occuranceOfvowel('Pleases read this application and give me gratuity')

// task 7
function convertToMeters(distance) {
    return distance * 1000;
  }
  
  
  function convertToFeet(distance) {
    return distance * 3280.84;
  }
  
 
  function convertToInches(distance) {
    return distance * 39370.1;
  }
  
 
  function convertToCentimeters(distance) {
    return distance * 100000;
  }
  
  
  function main() {
    
    var distanceInKilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
  
    
    var distanceInMeters = convertToMeters(distanceInKilometers);
    console.log("Distance in meters:", distanceInMeters);
  
    var distanceInFeet = convertToFeet(distanceInKilometers);
    console.log("Distance in feet:", distanceInFeet);
  
   
    var distanceInInches = convertToInches(distanceInKilometers);
    console.log("Distance in inches:", distanceInInches);
  
 
    var distanceInCentimeters = convertToCentimeters(distanceInKilometers);
    console.log("Distance in centimeters:", distanceInCentimeters);
  }
  
  main();
//   task 9

function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
  
    
    if (hoursWorked > regularHours) {
      var overtimeHours = hoursWorked - regularHours;
      var overtimePay = overtimeHours * overtimeRate;
      return overtimePay;
    } else {
      return 0;
    }
  }
  

  function main() {
    
    var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
  
   
    var overtimePay = calculateOvertimePay(hoursWorked);
  

    console.log("Overtime Pay: Rs.", overtimePay.toFixed(2));
  }
  

  main();
//   task 10

function calculateCurrencyNotes(amount) {
    var hundredNotes = Math.floor(amount);
    var fiftyNotes = Math.floor((amount % 1) * 10 / 5);
    var tenNotes = Math.floor(((amount % 1) * 10) % 5);
  
    console.log("Number of 100 notes:", hundredNotes);
    console.log("Number of 50 notes:", fiftyNotes);
    console.log("Number of 10 notes:", tenNotes);
  }
  

  function main() {
  
    var amount = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));
  
    calculateCurrencyNotes(amount);
  }
  
  main();
