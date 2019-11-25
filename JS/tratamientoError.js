"use strict";

function init()
{
    var resultado=document.getElementById("resultado");
    var x=document.getElementById("num");
    resultado.innerHTML="";
    try{
        if(x.value==""){
            throw "La cadena es vacia";
        }
        if(isNaN(x.value))
        {
            throw "No es un numero";
        }else{
            x=Number(x.value);//Convertimos en numero
        }
        if(x>10) throw "El numero es demasiado alto";
        if(x<5) throw "El numero es demasiado pequeño";
    }
    catch(err)
    {
        resultado.style.color="red";
        resultado.innerHTML="Error: "+err+".";
    }
    // finally{
    //     resultado.innerHTM="Clausula finally";
    // }
}