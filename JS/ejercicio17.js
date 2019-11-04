"use strict";

// Variable global donde iremos guardando los enteros recogidos.
 var ARRAY = [];
 var cont=1;
 var SUMAH=[];
 var SUMAV=[];

 // Limpia formulario y elemento donde se muestra el resultado
 function cleanData (){
  document.getElementById("num").value = "" ;
 }

 function createTable (elem) {
 	var num = parseInt (elem.value);
 	var resultado = document.getElementById ("resultado");
    

 	if (isNaN(num) || (num>10) || (num<=0)) { //Si el valor no es un entero se genera un error.
 		resultado.style.color = "red";
 		resultado.innerHTML = "Debes introducir un entero entre 0 y 10";
 	} else {
         //Sacamos la columna de las sumas
 		for(let i=0;i<(num-1);i++){
             ARRAY[i]=new Array(num);
            for(let j=0;j<(num-1);j++){
                ARRAY[i][j]=cont;
                SUMAV[i]=SUMAV[i]+cont;
                cont++;
             }
             ARRAY[i][j+1]=SUMAV[i];
         }
         //Sacamos la fila de las sumas
         for(let i=0;i<num;i++){
            for(let j=0;j<num;j++){
                SUMAH[i]=SUMAH[i]+ARRAY[j][i];
             }
             ARRAY[j+1][i]=SUMAH[i];
         }

        //Creamos la tabla
//resultado.innerHTML = "<table>";
        for(let i=0;i<ARRAY.length();i++){
          // resultado.innerHTML= "<tr>";
            for(let j=0;j<ARRAY.length;j++){
                resultado.innerHTML= ARRAY[i][j];
             }
             resultado.innerHTML="<br>";
            // resultado.innerHTML= "</tr>";
         }
      //   resultado.innerHTML= "</table>";
 	}
 }

