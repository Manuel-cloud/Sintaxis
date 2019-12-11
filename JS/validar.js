"use strict";

function EmailException(code){
    this.name="EmailException";
    switch(code)
    {
        case 1:
            this.message="Error; la direccion necesita @";
            break;
        case 2:
            this.message="Error: repeticion excesiva de puntos o guiones";
            break;
        case 3:
            this.message="Error: dominio no valido";
            break;
        default:
            this.message="Error: error desconocido";
    }
    this.code=code;
}

EmailException.prototype=new BaseException();
EmailException.prototype.constructor=BaseException;


function sendEmail(){
    var resultado=document.getElementById("resultado");
    var address=document.getElementById("address").value;

    try{
        resultado.style.color="blue";
        resultado.innerHTML=validateEmail(address);

    }catch(e)
    {
        resultado.style.color="red";
        resultado.innerHTML=e.toString();
    }
}

function validateEmail(address){
    if(!/@/.test(address))
    {
        throw new EmailException(1);
    }else if(/\w*(\.|-){2,}\w*@/.test(address))
    {
        throw new EmailException(2);
    }else if(!/(\.com|\.es|\.net)$/.test(address))
    {
        throw new EmailException(3);
    }
    else{
        return "Email correcto";
    }
}