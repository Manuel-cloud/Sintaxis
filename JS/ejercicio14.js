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
   var aux=ARRAY[ARRAY.length-1];
   var resultado = document.getElementById ("resultado");
   ARRAY.pop();
   resultado.innerHTML = "Elemento eliminado: "+aux+"<br>"+ARRAY;
}



