"use strict";

// Variable global donde iremos guardando los enteros recogidos.
 var ARRAY = [];

 // Limpia formulario y elemento donde se muestra el resultado
 function cleanData (){
  document.getElementById("num").value = "" ;
 }

 function addNumber (elem) {
 	var num = parseInt (elem.value);
    var resultado = document.getElementById ("resultado");
    ARRAY.push(num);

     resultado.innerHTML = ARRAY;
 }

 function popNumber () {
   var aux=ARRAY[0];
   var resultado = document.getElementById ("resultado");
   ARRAY.shift();
   resultado.innerHTML = "Elemento eliminado: "+aux+"<br>"+ARRAY;
}
function altNumber (elem) {
    var num = parseInt (elem.value);
   var resultado = document.getElementById ("resultado");
   ARRAY.splice(0,0,num); //Colar un elemento en el array, posicion, numero de elementos que sustituye y valor

    resultado.innerHTML = "Elemento colado: "+num+"<br>"+ARRAY;
}
