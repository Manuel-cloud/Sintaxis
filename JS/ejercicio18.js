function Persona(nombre, edad, genero){
    this.nombre=""||nombre;
    this.edad=""||edad;
    this.genero=""||genero;
}
Persona.prototype.obtDetalles=function(){
    return "Nombre: "+this.nombre+" Edad: "+this.edad+" Genero: "+this.genero;
}

function Estudiante(){
    Persona.call(this);
    this.grupo="";
    this.curso="";
}
Estudiante.prototype=new Persona;
Estudiante.prototype.registrar=function(curso, grupo){
    this.curso=curso;
    this.grupo=grupo;
}

function Profesor(){
    Persona.call(this);
    this.asignatura="";
    this.nivel="";
}
Profesor.prototype=new Persona;
Profesor.prototype.asignar=function(asignatura, nivel){
    this.asignatura=asignatura;
    this.nivel=nivel;
}

function init(){
    var resultado=document.getElementById("resultado");
    resultado.innerHTML="";
    var person=new Persona("Luis", 13, "Neutro");
    resultado.innerHTML=resultado.innerHTML+person.obtDetalles()+"<br>";
    var estud= new Estudiante();
    estud.registrar("3eso","c");
    resultado.innerHTML=resultado.innerHTML+"Nombre: "+estud.nombre+" Curso: "+estud.curso+" Grupo: "+estud.grupo+"<br>";
    var profe=new Profesor();
    profe.asignar("Lengua","Bajo");
    resultado.innerHTML=resultado.innerHTML+"Asignatura: "+profe.asignatura+" Nivel: "+profe.nivel;
}