function Person(Nombre, Apellido1, Apellido2, DNI, FechaNac, Sexo){
    this.nombre=Nombre||"";
    this.apellido1=Apellido1||"";
    this.apellido2=Apellido2||"";
    this.dni=DNI||"";
    this.fechaNac=FechaNac||"";
    this.sexo=Sexo||"";
}
Person.prototype.fullName=function(){
    return this.nombre+" "+this.apellido1+" "+this.apellido2;
}
Person.prototype.toString=function(){
    return "Nombre: "+this.nombre+" Apellido1: "+this.apellido1+" Apellido2: "+this.apellido2+" DNI: "+this.dni+" Fecha de Nacimiento: "+this.fechaNac+" Sexo: "+this.sexo;
}
/*GETTERS*/ 
Person.prototype.getNombre=function(){
    return this.nombre;
}
Person.prototype.getApellido1=function(){
    return this.apellido1;
}
Person.prototype.getApellido2=function(){
    return this.apellido2;
}
Person.prototype.getDNI=function(){
    return this.dni;
}
Person.prototype.getFecha=function(){
    return this.fechaNac;
}
Person.prototype.getSexo=function(){
    return this.sexo;
}
/*SETTERS*/ 
Person.prototype.setNombre=function(nombre){
    this.nombre=nombre;
}
Person.prototype.setApellido1=function(apellido1){
    this.apellido1=apellido1;
}
Person.prototype.setApellido2=function(apellido2){
    this.apellido2=apellido2;
}
Person.prototype.setDNI=function(dni){
    this.dni=dni;
}
Person.prototype.setFecha=function(fecha){
    this.fechaNac=fecha;
}
Person.prototype.setSexo=function(sexo){
    this.sexo=sexo;
}
/*PRUEBAS*/
var p1=new Person("Victor","Ramirez","Olmos","09987567D","03/21/1987", "masculino");
console.log(p1.fullName());
console.log(p1.toString());
console.log(p1.getDNI());
p1.setNombre("Jose");
console.log(p1.getNombre()); 