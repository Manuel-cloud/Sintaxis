"use strict";

function valid(){
    var pass1=document.getElementById("pass1").value;
    var pass2=document.getElementById("pass2").value;
    var resultado=document.getElementById("resultado");
    console.log()
    try{
        if(pass1.length<8) throw "La contraseña debe contener minimo 8 caracteres";
        if(!/[0-9]/.test(pass1)) throw "La contraseña debe contener numeros";
        if(!/[a-z]/.test(pass1)) throw "La contraseña debe contener minusculas";
        if(!/[A-Z]/.test(pass1)) throw "La contraseña debe contener mayusculas";
        if(!/\W/.test(pass1)) throw "La contraseña debe contener caracteres especiales";
        if(pass1!==pass2)
        {
             throw "Las contraseñas no coinciden";
        }else{
            resultado.style.color="blue";
            resultado.innerHTML="Contraseña valida";
        }
    }
    catch(err){
        resultado.style.color="red";
        resultado.innerHTML="Error: "+err+".";
    }

}