var array=[100,"Europa",3,"Asia",-5,"America",23,"Africa",32,"Oceania",14,2];
var resultado=document.getElementById("resultado");
function Ordenar(a, b){
    if((typeof a=='number')&&(typeof b=='number'))
    {
        return a-b;
    }else if((typeof a=='number')&&(typeof b=='string'))
    {
        return -1; //No intercambia datos
    }
    else if((typeof a=='string')&&(typeof b=='number'))
    {
        return 1; //Intercambia datos
    }
    else{
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
}
function init(){
    resultado.innerHTML=array.sort(Ordenar);

}

function init2(){
    resultado.innerHTML=array.sort(Ordenar);
    resultado.innerHTML=array.reverse(array.sort(Ordenar));
}
