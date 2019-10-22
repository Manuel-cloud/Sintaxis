document.write("Dias para Navidad <br>");
var d = new Date(2019,8,10);
var navidad=new Date(2019,11,25);
var dif=navidad.getTime()-d.getTime();
var cont=dif/(1000*60*60*24);
document.write("Faltan "+cont.toFixed()+" dias para Navidad");