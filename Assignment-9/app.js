// task 1
var literalArray = [];
// task 2
var objectArray = [];
// task 3
var stringArray = ["karachi", "lahore", "islamabad"];
// task 4
var numberArray = [1,2,3,4,5];
// task 5
var booleanArray = [true,false];
// task 6
var mixedArray = ["a",123,"true","karachi"];

// task 7
var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("<h1>Qualification</h1>")
for (var i = 0; i <=7; i++){
    document.write(i+1+")"+educationArray[i]+"<br/>")
}

// task 8
var studentName = ["Micheal","John", "Tony"]
var score = [320,230,480];
var percentage = [];
for(var i = 0; i <=2; i++){
    percentage[i] =  score[i] / 500 * 100

}

for (var a = 0; a<=2; a++){
document.write("score of "+studentName[a]+" is "+score[a]+"Precentage "+percentage[a]+"% <br/>")
}

// task 9

var color = ["Red","Yellow","Green"]
document.write(color+"<br/>");
var beginning = prompt("Enter which color you want to add at the beginning of array")
color.unshift(beginning)
document.write(color+"<br/>");
var ending = prompt("Enter which color you want to add at the ending of array")
color.push(ending)
document.write(color+"<br/>");
color.shift()
document.write(color+"<br/>");
color.pop()
document.write(color+"<br/>");
var update =+prompt("At which index do you want to add color?")
var newColor =+prompt(" which color do you want to add on that index?")
color.splice(update,0,newColor)
document.write(color+"<br/>");
var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color+"<br/>");

// task 10
var score = [320,230,480,120]
document.write("Score of students :" +score+"<br/>");
score.sort()
document.write(" Ordered Score of students :" +score);

// task 11
var cities = ["karachi","lahore","quetta","peshawar"];
document.write("cities list: <br/>"+cities+"<br/>")
var selectedCities = cities.slice(2,4)
document.write("selected cities list: <br/>"+selectedCities)
// task 12
var arr = ["This","is","my","cat"]
document.write("array/; <br/>"+arr+"<br/>")
var join = arr.join(" ")
document.write("string: <br/>"+join) 
// task 13

var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("out : <br/>"+fourthDevice+"<br/>")

// task 14


var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.pop()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.pop()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.pop()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.pop()
document.write("out : <br/>"+fourthDevice+"<br/>")

// task 15

var phone = ["apple","samsung","motorla","nokia","sony & haier"]
document.write(
    "<select>"+
    "<option>"+phone[0]+"</option>"+
    "<option>"+phone[1]+"</option>"+
    "<option>"+phone[2]+"</option>"+
    "<option>"+phone[3]+"</option>"+
    "<option>"+phone[4]+"</option>"+
    "</select>"
)