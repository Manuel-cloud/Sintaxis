 "use strict";

 function generateMatrix (num) { //num es un string, pero las operaciones lo transforman a entero automáticamnte.
	var start = Date.now(); 
	var resultado = document.getElementById ("resultado"); 
 	var array = [];
 	for (let i=0;i<=num+1;i++){ //Instanciamos el número de arrays más 1 para la suma.
 		array[i]=[];
 	}

 	for (let i=0, x, y, suma=0; i<num*num; i++){
		 y = i % num;
		console.log("pasada " +i +" columna " +y);
		 x = Math.floor(i / num);
		console.log("pasada " +i +" fila " +x);
		 array[x][y] = i+1; 
		 console.log("valor asignado a " +x +" "+y +" valor " +(i+1));
 		suma = suma + i +1; //Contador para la fila.
 		if (y === num-1) { //Si llegamos a la última posición asignamos la suma en la matriz e inicializamos el contador.
 			array[x][y+1] = suma;
 			suma = 0; 		
 		} 			
 		if (x === num-1) { //Ampliación: si llegamos al final de X realizamos la suma de la columna.
 			let j,total = 0;
 			for (j=0;j<=num-1;j++){
 				total = total + array[j][y];
 			}
 			array[x+1][y] = total;	
 		} 			
 	}

 	var total=0;
	for (let j=0;j<num;j++){
		total = total + array[j][num];
	}
	array[num][num] = total;	

	 drawMatrix (resultado, array);
	 var end = Date.now();
	 console.log("Tiempo transcurrido " + (end - start));
 }

 //Función para mostrar la matriz.
 function drawMatrix (elem, matrix){
 	elem.innerHTML="";
 	for (let array of matrix) { //En array tendremos cada uno de los array que tenemos en matrix
 		for (let value of array) { //En value obtenemos cada valor de los arrays internos.
 			elem.innerHTML = elem.innerHTML + value + "----";
 		}
 		elem.innerHTML = elem.innerHTML + "<br/>";
 	}
 }

 