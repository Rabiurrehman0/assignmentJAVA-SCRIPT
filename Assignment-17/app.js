function submit(){
    var name= document.getElementById('name')
    var email= document.getElementById('email')
    alert("your name is "+name.value)
    alert("your email is "+email.value)
}


function seemore(){
    var seemore=document.getElementById('seemore')
    var btn=document.getElementById('btn')
    if(btn.innerHTML==="see more"){
        seemore="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!"
        console.log(seemore)
        document.getElementById('seemore').innerHTML=seemore
        btn.innerHTML="see less"
        btn.style.color="red"
    }else{
        seemore="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure eveniet et odit quae ipsa architecto adipisci repellendus vitae vero. Illum animi magni maxime deserunt eius earum asperiores autem similique!"
        console.log(seemore)
        document.getElementById('seemore').innerHTML=seemore
        btn.innerHTML="see more"
        btn.style.color="aqua"

        
    }

}