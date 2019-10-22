var dias=window.prompt("¿Cuántos días quieres restar?","");
var d = new Date();
dias=dias*3600*24*1000;
var dif=d.getTime()-dias;
var ndia=new Date();
ndia.setTime(dif);
document.write("No encontrariamos en la fecha: "+ndia.getFullYear()+"/"+ndia.getMonth()+"/"+ndia.getDate());