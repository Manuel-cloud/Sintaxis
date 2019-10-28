 "use strict";

 function validate () {
 	var words = document.getElementById("words").value.split(","); //Obtengo en un array todas las palabras.
 	var resultado = document.getElementById ("resultado"); //Elemento donde se muestra el resultado

 	resultado.innerHTML = "Nº de palabras: " + words.length;
 	resultado.innerHTML = resultado.innerHTML + "<br/>Primera palabra: " + words[0]; //Utilizando los índices
 	resultado.innerHTML = resultado.innerHTML + "<br/>Última palabra: " + words[words.length-1];
 	resultado.innerHTML = resultado.innerHTML + "<br/>";

 	document.getElementById("array").innerHTML = words.join(" - "); //Se muestra el array uniendo todas las palabras separadas por un delimitador " - "
 	document.getElementById("reverso").innerHTML = words.reverse().join(" - "); //Lo muestro de forma inversa a como se presentaba
 	document.getElementById("a_z").innerHTML = words.sort(); //Lo ordeno por orden alfabético

 	// El array está ordenado, por tanto solo hay que invertirlo.
 	// Si el array no hubiera estado ordenado tendríamo que invocar los siguientes métodos words.sort().reverse().join (" ");
 	document.getElementById("z_a").innerHTML = words.reverse();
 }


 //Ejercicio: depurar el error para ver porqué ocurre
