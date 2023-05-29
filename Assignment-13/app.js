const result=document.getElementById('result')
const now=new Date()
result.innerHTML=now
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
alert(month[now.getMonth()])
var dayName = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const currentDay=dayName[now.getDay()].toString()
alert(`today is ${currentDay.slice(0,3)}`)
if(dayName[now.getDay()].toString()==="Saturday" || dayName[now.getDay()].toString()==="Sunday"){
    alert('Today is Fun Day')
}else{
    alert('do more code')
}
if(now.getDate()==15 || now.getDate()< 14){
    alert('First Fifteen Days of the month”')
}else{
    alert('Last Fifteen Days of the month”')
}
alert(now.getTime()/60)

const hour = now.getHours()
if(hour <=12 ){
    alert('its Am')
}else{
    alert("its PM")
}