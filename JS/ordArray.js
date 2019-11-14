"use strict"

var array=[100,"Europa",3,"Asia",-5,"America",23,"Africa",32,"Oceania",14,2];
var resultado=document.getElementById("resultado");
function Ordenar(a, b){
    if((typeof a=='number')&&(typeof b=='number'))
    {
        return a-b;
    }else if((typeof a=='number')&&(typeof b=='string'))
    {
        return -1; //No intercambia datos
    }
    else if((typeof a=='string')&&(typeof b=='number'))
    {
        return 1; //Intercambia datos
    }
    else{
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
}
function init(){
    resultado.innerHTML=array.sort(Ordenar);

}

function init2(){
    resultado.innerHTML=array.sort(Ordenar);
    resultado.innerHTML=array.reverse(array.sort(Ordenar));
}


var person=[ { id: 133, firstName: "Juan Carlos", lastName: "Rolón", email: "Hernn84@hotmail.com" }, 
{ id: 134, firstName: "César", lastName: "Jáquez", email: "Lorena_Delarosa@hotmail.com" }, 
{ id: 135, firstName: "Leticia", lastName: "Fuentes", email: "Santiago56@gmail.com" }, 
{ id: 136, firstName: "Amancio", lastName: "Fuentes",email: "Santiago56@gmail.com" }, 
{ id: 137, firstName: "Lourdes", lastName: "Armenta", email: "Timoteo42@gmail.com" } ];

// document.getElementById("Buttom3").innerHTML=init3();
// document.getElementById("Buttom3").onclick=Mostrar;
function init3(){
    person.sort(ordenarArray);

    resultado.innerHTML="";
    person.reverse();
    for(let p of person)
    {
        resultado.innerHTML=resultado.innerHTML+p.id+" "+p.firstName+" "+p.lastName+" <a href='mailto:"+p.email+"'>"+p.email+"</a><br>";
    }
}

function ordenarArray(a, b) {
    var x = a.lastName.toLowerCase();
    var y = b.lastName.toLowerCase();
    if (x != y) { //Comparamos por apellido si no son iguales.
        if (x < y) { return -1; } 
        else { return 1; };
    } else { //Si son iguales comparamos por nombre.
        x = a.firstName.toLowerCase();
        y = b.firstName.toLowerCase();
        if (x < y) {return -1; }
        else {return 1; };
    }
}

function init4(){
    person.sort(function (a, b) {
        if(a.lastName.valueOf!=b.lastName.valueOf){
            return (a.lastName.valueOf-b.lastName.valueOf )
        }
        else{
            return (a.firstName.valueOf-b.firstName.valueOf)
        }
    })
    resultado.innerHTML="";
    for(let p of person)
    {
        resultado.innerHTML=resultado.innerHTML+p.id+" "+p.firstName+" "+p.lastName+" <a href='mailto:"+p.email+"'>"+p.email+"</a><br>";
    }
}