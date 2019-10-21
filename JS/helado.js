alert("¿Que topping quiere?");
var sel=window.prompt("1.Sin topping 2.Topping de oreo 3.Topping de kitkat 4.Topping de brownie 5.Topping de lacasitos","");
precio=1.9;
switch(sel)
{
case "sin":
break;
case "oreo":
    precio+=1;
break;
case "kitkat":
    precio+=1.5;
break;
case "brownie":
    precio+=0.75;
break;
case "lacasitos":
    precio+=0.95;
break;
default:
    dicument.write("No tenemos ese topping");
break;
}
document.write("Helado + topping "+sel+" Precio:"+precio);