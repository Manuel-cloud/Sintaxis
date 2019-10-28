 "use strict";

 //FUNCIONES PARA EL PRIMER APARTADO

 //Genera el array aleatorio
 function addExample() {
  var str = "";
  var max = 100;
  var min = 0;
  //Bucle que genera una lista de 5 enteros separados por coma.
  for (let i=0; i<4; i++){
    str = str + Math.floor(Math.random()*(max-min+1)+min) + ", "; //Función que genera un random entre 0 y 100.
  }
  str = str + Math.floor(Math.random()*(max-min+1)+min); //No está en el bucle para no concatenar la última coma
  return str;
 }

 function mayor_menor_media() {
 	//Dado un stirng con enteros separados por comas, obtengo un array utilizando la "," como separador.
	var enteros = document.getElementById ("array").value.split(",");
 	var resultado1 = document.getElementById ("resultado1"); //Elemento donde se muestra el resultado
 	//Variables para obtener los resultados. Se le asigna la constante Infinity.
 	var mayor = -Infinity;
 	var menor = Infinity;
 	var suma = 0;
 	var intTmp = 0; //Variable para calculos temporales.
 	for (let i=0; i<enteros.length; i++){
   //for (let i of enteros) { //Bucle for of equivalente al tradicional
      //intTmp = parseInt(i);
 		intTmp = parseInt(enteros[i]); //Recordad que el array es de String.
 		if (intTmp < menor) menor = intTmp;
 		if (intTmp > mayor) mayor = intTmp;

 		suma = suma + intTmp;
 	}

 	resultado1.innerHTML = "Mayor: " + mayor + ";<br/>" +
 						  "Menor: " + menor + ";<br/>" +
 						  "Media: " + suma / enteros.length;
 }


 //FUNCIONES PARA EL SEGUNDO APARTADO

 function concatenar() {
  var integers1 = document.getElementById("array1").value.split(","); //Array de string con los enteros
  var integers2 = document.getElementById("array2").value.split(","); //Array de string con los enteros
  var resultado2 = document.getElementById("resultado2");
  var arrayResult=[];

  //resultado2.innerHTML = integers1.concat (integers2); //La función concat no hace lo que realmente tiene que hacer el ejercicio

  for (let i = 0; i<integers2.length; i++){ //Bucle para recorrer los enteros
    arrayResult[i*2] = integers1[i]; //El índice del algoritmo se va actulizando con la variable del bucle.
    arrayResult[i*2+1] = integers2[i]; //Se simplifica utilizando la función push de array.
  }

  resultado2.innerHTML = arrayResult;
 }


 //FUNCIONES PARA EL TERCER APARTADO

function concatenar_diferentes() {
  //Arrays de string con number.
  var integers1 = document.getElementById("array3").value.split(",");
  var integers2 = document.getElementById("array4").value.split(",");
  var resultado3 = document.getElementById("resultado3"); //Elemento donde se muestra el resultado.
  var arrayResult=[];
  var aux;
  var minLength;

  //Obtengo la longitud mínima de ambos arrays en "minLength", y en aux guardo una referencia del array más largo.
  if (integers1.length < integers2.length) {
    aux = integers2;
    minLength = integers1.length;
  } else {
    aux = integers1;
    minLength = integers2.length;
  }

  //Recorro ambos arrays hasta que finaliza el array más corto.
  var i; //La i está fuera del bucle para reutilizarla.
  for (i = 0; i<minLength ; i++){
    arrayResult.push(integers1[i]);
    arrayResult.push(integers2[i]);
  }
  // i=minLength en este momento. Recorro el array más largo, por medio de aux, hasta que finalice.
  for (;i<aux.length;i++){
    arrayResult.push(aux[i]);
  }

  resultado3.innerHTML = arrayResult;
}

 //FUNCIONES PARA EL CUARTO APARTADO

  //Función que trabaja con los elementos de la página
  function addElement() {
    var integers = document.getElementById("array5").value.split(","); //Array de Strings con los enteros.
    var resultado4 = document.getElementById("resultado4"); //Elemetos para mostrar el resultado
    var position = parseInt(document.getElementById("numInteger1").value); //Obtenemos la posición donde almacenar el resultado de la página
    var number = parseInt(document.getElementById("element").value); //Obtenemos el número a almacenar de la página

    addElementAt (integers, position, number); //Añade el número al array. El array es un objeto se pasa por referencia
    resultado4.innerHTML = integers; //Se muestra el resultado
  }

  //Función independiente de los elementos de la página. Sería reutilizable en culaquier otra página.
  function addElementAt(array, position, number) {
    for (let i = position, tmp = 0; i< array.length; i++){
     tmp = array[i];
     array[i] = number;
     number = tmp;
    }
    array[array.length] = number;
  }


  //FUNCIONES PARA EL QUINTO APARTADO

  function sortArray () {
    var integers = document.getElementById ("array6").value.split(","); //array de string con eneteros
    var resultado = document.getElementById ("resultado5"); //Elemento donde se muestra el resultado

    sort(integers); //Ordenamos el array

    resultado.innerHTML = integers; //Mostramos el resultado
  }

  //Función de ordanmiento de la burbuja.
  function sort(array){
    for (let i = 0, tmp; i < array.length-1; i++){ //Bucle que recorre todos los elementos hasta el penúltimo
      for (let j = i+1; j < array.length; j++){ //Bucle para hacer comparaciones. Se comienza en el siguiente valor de i ya que los anteriores están ya ordenados
        if (parseInt (array[i])>parseInt (array[j])) { //Comparativa entre elementos
          tmp = array[i];  //Si se cumple la condición se intercambian los valores de las posiciones.
          array[i] = array [j];
          array [j] = tmp;
        }
      }
    }
  }
