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
var c1=new Direccion("Altagracia","Calle",2,"3e",13008);
console.log(c1.toString());
console.log(c1.getDireccion());
c1.setCP(13001);
console.log(c1.getCP()); 