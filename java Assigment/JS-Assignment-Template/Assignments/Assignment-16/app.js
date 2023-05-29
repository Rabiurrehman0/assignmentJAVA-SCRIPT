function deleteRow(e){
    var pr=e.parentNode.parentNode
    pr.remove()
}
var img=document.getElementById('img')
function imageChange(){
    img.src='https://www.pakmobizone.pk/wp-content/uploads/2019/12/VgoTel-Smart-7-Blue-1.jpg'
}

function restoreImage(){
     img.src='https://static.toiimg.com/thumb/msid-70072353,width-640,resizemode-4/70072353.jpg'

}
var counter=document.getElementById('counter').innerHTML

function increment(){
    counter=parseInt(counter)+1
    document.getElementById('counter').innerHTML=counter
}

function decrement(){
    counter=parseInt(counter)-1
    document.getElementById('counter').innerHTML=counter

}