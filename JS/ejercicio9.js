"use strict";

function buildDate (date, month, year) {
	var resultado = document.getElementById ("resultado");
	var date = parseInt (date);
	var month = parseInt (month);
	var year = parseInt (year);

	//Revisa la referencia de cada objeto. Hay siempre métodos que resuelven problemas sin tener que reinventarlos.
	resultado.innerHTML = new Date(year, month, date, 0, 0, 0, 0).toLocaleString();
}

