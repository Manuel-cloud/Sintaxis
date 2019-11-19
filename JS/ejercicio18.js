function Persona(nombre, edad, genero){
    this.nombre=""||nombre;
    this.edad=""||edad;
    this.genero=""||genero;
}
Persona.prototype.obtDetalles=function(){
    console.log("Nombre: "+this.nombre+" Edad: "+this.edad+" Genero: "+this.genero);
}

function Estudiante(){
    this.grupo="";
    this.curso="";
}
Estudiante.prototype=new Persona;
Estudiante.prototype.registrar=function(curso, grupo){
    this.curso=curso;
    this.grupo=grupo;
}

function Profesor(){
    this.asignatura="";
    this.nivel="";
}
Profesor.prototype=new Persona;
Profesor.prototype.asignar=function(asignatura, nivel){
    this.asignatura=asignatura;
    this.nivel=nivel;
}

var person=new Persona("Luis", 13, "Neutro");
person.obtDetalles();
var estud= new Estudiante();
estud.registrar("3eso","c");
console.log("Nombre: "+estud.nombre+" Curso: "+estud.curso+" Grupo: "+estud.grupo);
var profe=new Profesor();
profe.asignar("Lengua","Bajo");
console.log("Asignatura: "+profe.asignatura+" Nivel: "+profe.nivel);