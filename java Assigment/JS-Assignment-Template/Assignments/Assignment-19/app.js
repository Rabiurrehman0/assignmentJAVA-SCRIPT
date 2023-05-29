
alert("please open the console and find the out puts")
var mianContent=document.getElementById('main-content')
for (var i = 0; i < mianContent.childNodes.length; i++) {
     if (mianContent.childNodes[i].nodeType === 1 ) {
         console.log(mianContent.childNodes[i].nodeName)
    }
    
}

var render=document.getElementsByClassName('render')
for(var i=0; i<render.length; i++){
    console.log(render[i].firstChild)
}
document.getElementById('first-name').value="First Name"
document.getElementById('last-name').value="Last Name"
document.getElementById('email').value="mail@mail.com"

var formContent=document.getElementById('form-content')
console.log("form-content node type is ",formContent.nodeType)
var lastName=document.getElementById('lastName')
console.log("the node type of lastName is ",lastName.nodeType)

console.log("lastName having first child of node type" , lastName.firstChild)
lastName.textContent="Node Updated"
lastName.style.color="red"

var len=mianContent.length

console.log("mianContent having first child of node type" , mianContent.firstElementChild.innerHTML)

console.log("mianContent having last child of node type" , mianContent.lastElementChild.innerHTML ) 

console.log("lastName having next child of node type" , lastName.nextElementSibling)

console.log("lastName having previous child of node type" , lastName.previousElementSibling)
