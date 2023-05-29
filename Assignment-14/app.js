// task 1
function printCurrentDateTime(now){
    document.getElementById('result').innerHTML=now
}
var now = new Date()

printCurrentDateTime(now)

// task 2
function greeting(fn,ln){
    alert(`Hello ${fn + " " + ln}`)
}
var fn='abdul'
var ln='basit'
fn=fn.charAt(0).toUpperCase() +fn.slice(1)
ln=ln.charAt(0).toUpperCase() +ln.slice(1)

greeting(fn ,ln)
// task 3
function addition(a,b){
    return a+b
}
var a = +prompt('Enter first number')
var b = +prompt('Enter second number')

alert(addition(a,b))
// task 4
function calculator(a,b,operator){
    switch (operator) {
        case "+":
            return a+b
            break;
        case "-":
            return a-b
            break;
        case "x":
            return a*b
            break;
        case "/":
            return a/b
            break;
        default:
            break;
    }
}


var fNumber=+prompt('enter first number')
var lNumber=+prompt('enter last number')
var op=pr4ompt('enter operator')
alert(calculator(fNumber,lNumber,op))


// task 5
function square(a){
    return a*a
}
var num=+prompt('enter number')
alert(square(num))

// task 7
function factorial(a){

    /*
    a=5
    a=5*4
    a=20
    a=20*3
    a=60
    a=60*2
    a=120
    a=120*1
    */
    if(a>1){
        for(var i=a-1; i>=1; i--){
            a = a*i
        }
        return a
    }
    else if(a==0 && a ==1){
        return 1
    }else{
        alert('please enter right input')
    }
}
var fact=+prompt('enter factorial number')
alert(factorial(fact))

// task 8
function incrementation(a,b){
    if(a<b){
        for (i=a; i<=b; i++){
            document.write("<br/>" + i + "<br/>")
        }
    }else{
        console.log('enter right inputs')
    }
}

var start=+prompt('enter start number')
var end=+prompt('enter end number')

incrementation(start,end)


// task 9
function calculateHypotenuse(b,p){
    function square(b,p){
        var y=b*b
        var z=p*p
        return y+z
    }
    var y = square(b,p)
    console.log(Math.sqrt(y))
}
calculateHypotenuse(6,7)

// task 10
function area(a,b){
    return a*b
}
// direct argument passing

console.log(area(5,6))


// argument as var

var len=5
var wid=6
console.log(area(len,wid))

// task 11
function palindrome(palindrome) {
    var i = 0;
    var j = palindrome.length - 1;
    while(i < j) {
        if(palindrome[i] == palindrome[j]) {
            i++; 
            j--;
        }
        else {
            return false;
        }
    }
    return true;
}
var x = prompt('Enter Word ')
console.log(palindrome(x))


// task 12
function titlecase(str) {
    
    var stringtoLowerCase = str.toLowerCase()
    
    var x = stringtoLowerCase.split(' ')
    var titlFormat = x.map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    })
    var title = titlFormat.join(' ')
    return title
  
  }
console.log(titlecase("hello there"))

function longWord(str){
    var x=str.split(' ')
    var y=x.sort(function(a,b){
        console.log(a,b)
        return b.length-a.length
    })
    console.log(y)
    console.log(x[0],x[0].length)
}
let resLong=prompt('enter sentence')
longWord(resLong)

// task 13
function findOccurance(string,letter){
    var count= 0;
    for (var i= 0; i < string.length; i++) {
       if (string.charAt(i) == letter) {
           count ++
       }
     }
     return count;

}
var x ="cbc"
var y="o"
console.log(findOccurance(x,y))