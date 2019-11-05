function sustituirPalabra () {
    var buscar = document.getElementById ("busca");
    var sust = document.getElementById ("sust");
    var textA = document.getElementById ("textA");

    while(textA.value.search(buscar.value)!=-1){
        textA.value=textA.value.replace(buscar.value, sust.value);
    }

}