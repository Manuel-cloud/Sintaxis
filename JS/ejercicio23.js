"use strict";

// Variable global donde iremos guardando los enteros recogidos.
 var ARRAY = [];

 var resultado = document.getElementById ("resultado");
 function addNumber () {
 	var num = document.getElementById("num");

    try{
        if(num.value==""){
            throw "La cadena es vacia";
        }
        if(isNaN(num.value))
        {
            throw "No es un numero";
        }
        else if(ARRAY.length===10)
        {
            throw "Pila completa, no se pueden introducir más elementos";
        }
        else{
            num=Number(num.value);//Convertimos en numero
            ARRAY.push(num);
            resultado.style.color="blue";
            resultado.innerHTML = ARRAY;
        }
    }
    catch(err)
    {
        resultado.style.color="red";
        resultado.innerHTML="Error: "+err+".";
    }
 }

 function popNumber () {
    try{
        if(ARRAY.length==0){
            throw "No existen elementos para eliminar";
        }
        else{
            var aux=ARRAY[ARRAY.length-1];
            var resultado = document.getElementById ("resultado");
            ARRAY.pop();
            resultado.style.color="blue";
            resultado.innerHTML = "Elemento eliminado: "+aux+"<br>"+ARRAY;
        }
     }
     catch(err)
    {
        resultado.style.color="red";
        resultado.innerHTML="Error: "+err+".";
    }
}



