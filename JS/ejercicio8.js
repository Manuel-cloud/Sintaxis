
var hour, minutes,seconds;
setInterval(reloj, 1000);
function reloj()
{
    var d = new Date();
    hour=d.getHours();
    minutes=d.getMinutes();
    seconds=d.getSeconds();
   
   

}
document.getElementById("relog").innerHTML = hour+":"+minutes+":"+seconds;