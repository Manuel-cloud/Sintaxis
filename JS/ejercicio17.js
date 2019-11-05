"use strict";

// Variable global donde iremos guardando los enteros recogidos.
 var ARRAY = [];
 var cont=0;
 var SUMAH=0;
 var SUMAV=0;
 

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
 		for(let i=0;i<=num;i++){
             ARRAY[i]=new Array(num+1);
            if(i<num){
                for(let j=0;j<=num;j++){
                    console.log("Pasada"+cont);
                    if(j==num){
                        ARRAY[i][j]=SUMAV;
                        SUMAV=0;
                    }else{
                        cont++;
                        ARRAY[i][j]=cont;
                        SUMAV+=cont;
                    }
                    
                }
            }
         }
         //Sacamos la fila de las sumas
         for(let i=0;i<=num;i++){
            for(let j=0;j<=num;j++){
                if(j==num){
                    ARRAY[j][i]=SUMAH;
                }else{
                    SUMAH+=ARRAY[j][i];
                }
             }
             SUMAH=0;
         }

        //Creamos la tabla
        drawTable(resultado, ARRAY);
     }
     
     function drawTable(elem, matrix){
         elem.innerHTML="";
         for(let array of matrix){
             for(let value of array){
                elem.innerHTML=elem.innerHTML+value+" ";
             }
             elem.innerHTML=elem.innerHTML+"<br>";
         }

     }
 }

