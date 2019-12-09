"use strict";
//Pongo un id a la granja para identificarla
//function Granja (cp,provincia) 
function Granja (id_granja, cp,provincia)
{
    //Opcion por si no se introduce una variable (suponiendo opcional)
    // this.cp = cp;
    // this.provincia = provincia;
    this.id_granja=id_granja;
    this.cp = cp||"";
    this.provincia = provincia||"";
}

Granja.prototype.getCp = function ()
{
    return this.cp;
}

function Granjero (id_granja, provincia,cp,name, id_granjero)
{
    Granja.call(this,id_granja, cp,provincia);
    //Opcion por si no se introduce una variable (suponiendo opcional)
    // this.name = name;
    // this.id_granjero = id_granjero;
    this.name = name||"";
    this.id_granjero = id_granjero;
}

Granjero.prototype = new Granja;
Granjero.prototype.getName = function ()
{
    return this.name;
}

//Animal hereda de granja y no de granjero
// function Animal (id_granjero, id_animal, producto)
function Animal (id_granja,cp, provincia, id_animal, producto)
{
    Granja.call(this,id_granja, cp, provincia);
    //Opcion por si no se introduce una variable (suponiendo opcional)
    // this.id_animal = id_animal;
    // this.producto = producto;
    this.id_animal = id_animal;
    this.producto = producto||"";
}

// Animal.prototype = new Granjero;
Animal.prototype = new Granja;
Animal.prototype.getProducto = function ()
{
    return this.producto;
}

function Gallina(id_granja,cp, provincia, id_animal, producto, id_gallina, huevos)
{
    Animal.call(this,id_granja,cp, provincia, id_animal, producto);
    this.id_gallina = id_gallina;
    this.huevos = huevos||0;
}

Gallina.prototype = new Animal;

Gallina.prototype.setHuevos = function (x)
{
    this.huevos = this.huevos + x;
}
//Creo el get para comprobar el set
Gallina.prototype.getHuevos = function ()
{
    return this.huevos;
}
 
//Creo el caos de uso
var gallina1=new Gallina("G1","","","A1","", "g1", 2);
gallina1.setHuevos(2)
console.log(gallina1.getHuevos());


