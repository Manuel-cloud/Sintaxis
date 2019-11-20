function Direccion(direccion, tipoCalle, numero, piso, cp){
    this.direccion=direccion;
    this.tipoCalle=tipoCalle;
    this.numero=numero;
    this.piso=piso;
    this.cp=cp;
}

Direccion.prototype.toString=function(){
    return "Direccion: "+this.direccion+" Tipo: "+this.tipoCalle+" Numero: "+this.numero+" Piso: "+this.piso+" Codigo Postal: "+this.cp;
}
/*GETTERS*/ 
Direccion.prototype.getDireccion=function(){
    return this.direccion;
}
Direccion.prototype.getTipoCalle=function(){
    return this.tipoCalle;
}
Direccion.prototype.getNumero=function(){
    return this.numero;
}
Direccion.prototype.getPiso=function(){
    return this.piso;
}
Direccion.prototype.getCP=function(){
    return this.cp;
}

/*SETTERS*/ 
Direccion.prototype.setDireccion=function(direccion){
    this.direccion=direccion;
}
Direccion.prototype.setTipoCalle=function(tipoCalle){
    this.tipoCalle=tipoCalle;
}
Direccion.prototype.setNumero=function(numero){
    this.numero=numero;
}
Direccion.prototype.setPsio=function(piso){
    this.piso=piso;
}
Direccion.prototype.setCP=function(cp){
    this.cp=cp;
}

/*PRUEBAS*/
function init(){
    var resultado=document.getElementById("resultado");
    resultado.innerHTML="";
    var c1=new Direccion("Altagracia","Calle",2,"3e",13008);
    resultado.innerHTML=resultado.innerHTML+c1.toString()+"<br>";
    resultado.innerHTML=resultado.innerHTML+c1.getDireccion()+"<br>";
    c1.setCP(13001);
    resultado.innerHTML=resultado.innerHTML+c1.getCP(); 
}