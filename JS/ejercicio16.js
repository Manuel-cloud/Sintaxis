function validar_frase(){
    var frase = document.getElementById ("frase");
    // var reg = new RegExp("^[A-Z].*\.$","gm");
    var reg = /^[A-Z].*\.$/;
    if(reg.test(frase.value)===true){
        resultado1.innerHTML="Correcto";
        resultado1.style.color = "green";
    }
    else{
        resultado1.innerHTML="Incorrecto";
        resultado1.style.color = "red";
    }
}

function validar_telefono(){
    var tlf = document.getElementById ("telefono");
    var reg = new RegExp("^9\d{8}$","gm");
    if(reg.test(tlf.value)===true){
        resultado2.innerHTML="Correcto";
        resultado2.style.color = "green";
    }
    else{
        resultado2.innerHTML="Incorrecto";
        resultado2.style.color = "red";
    }
}

function validar_telefonoInt(){
    var tlf = document.getElementById ("telefonoInt");
    var reg = new RegExp("^\(\+34\)9\d{8}$","gm");
    if(reg.test(tlf.value)===true){
        resultado3.innerHTML="Correcto";
        resultado3.style.color = "green";
    }
    else{
        resultado3.innerHTML="Incorrecto";
        resultado3.style.color = "red";
    }
}

function validar_fecha(){
    var fecha = document.getElementById ("fecha");
    var reg = new RegExp("^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/(\d{4})\s/([01]\d|2[0-3])\:/([0-5]\d)$","gm");
    if(reg.test(fecha.value)===true){
        resultado4.innerHTML="Correcto";
        resultado4.style.color = "green";
    }
    else{
        resultado4.innerHTML="Incorrecto";
        resultado4.style.color = "red";
    }
}

function validar_cp(){
    var cp = document.getElementById ("cp");
    var reg = new RegExp("^\d{5}$","gim");
    if(reg.test(cp.value)===true){
        resultado5.innerHTML="Correcto";
        resultado5.style.color = "green";
    }
    else{
        resultado5.innerHTML="Incorrecto";
        resultado5.style.color = "red";
    }
}

function validar_email(){
    var email = document.getElementById ("email");
    var reg = new RegExp("\w{6,}+\@\w{6,}\.[a-zA-Z]{2,3}$","gim");//minimo 6 letras hasta inginita
    if(reg.test(email.value)===true){
        resultado6.innerHTML="Correcto";
        resultado6.style.color = "green";
    }
    else{
        resultado6.innerHTML="Incorrecto";
        resultado6.style.color = "red";
    }
}

function validar_importe(){
    var importe = document.getElementById ("importe");
    var reg = new RegExp("^(\-?)\d+([.,]\d+)?$","gim");
    if(reg.test(importe.value)===true){
        resultado7.innerHTML="Correcto";
        resultado7.style.color = "green";
    }
    else{
        resultado7.innerHTML="Incorrecto";
        resultado7.style.color = "red";
    }
}

function validar_banco(){
    var banco = document.getElementById ("banco");
    var reg = new RegExp("^\d{4}\s\d{4}\s\d{2}\s\d{10}$","gim");
    if(reg.test(banco.value)===true){
        resultado8.innerHTML="Correcto";
        resultado8.style.color = "green";
    }
    else{
        resultado8.innerHTML="Incorrecto";
        resultado8.style.color = "red";
    }
}

function validar_pweb(){
    var pweb = document.getElementById ("pweb");
    var reg = new RegExp("^www\.\w+\.[a-zA-Z]{2,3}$","gim");
    if(reg.test(pweb.value)===true){
        resultado9.innerHTML="Correcto";
        resultado9.style.color = "green";
    }
    else{
        resultado9.innerHTML="Incorrecto";
        resultado9.style.color = "red";
    }
}

function validar_web(){
    var web = document.getElementById ("web");
    var reg = new RegExp("^(http|https)\:\/\/www\..*\.(es|com|net|org)\:\d{1,5}$","gim");
    if(reg.test(web.value)===true){
        resultado10.innerHTML="Correcto";
        resultado10.style.color = "green";
    }
    else{
        resultado10.innerHTML="Incorrecto";
        resultado10.style.color = "red";
    }
}

function validar_webCompl(){
    var webcom = document.getElementById ("webcom");
    var reg = new RegExp("^http[s]?\:\/\/www\..*\.(es|com|net|org)\:\d{1,5}\?(\w+=\w+)(\&\w+=\w+)*$","gim");
    if(reg.test(webcom.value)===true){
        resultado11.innerHTML="Correcto";
        resultado11.style.color = "green";
    }
    else{
        resultado11.innerHTML="Incorrecto";
        resultado11.style.color = "red";
    }
}
