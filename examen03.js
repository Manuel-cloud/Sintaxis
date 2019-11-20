//EJERCICIO 1
//Validar y resgistrar datos
villano=[];
function register(){
    resultado.innerHTML="";
    var nombre = document.getElementById ("nombre");
    var edad = document.getElementById ("edad");
    var maldad = document.getElementById ("maldad");
    var regNom=/^[A-Z]\w{0,18}/;
    var regEdad=/^([1][8-9]|[2-9][0-9]|1[0-1][0-9]|120)$/;
    var regMal=/^([0-9]|[1-9][0-9]|100)$/;
    //Validar nombre
    if(regNom.test(nombre.value)!==true){
        resultado.innerHTML="Nombre Incorrecto";
        resultado.style.color = "red";
    }
    //Validar edad
    if(regEdad.test(edad.value)!==true){
        resultado.innerHTML="Edad Incorrecta";
        resultado.style.color = "red";
    }
    //Validar maldad
    if(regMal.test(maldad.value)!==true){
        resultado.innerHTML="Maldad Incorrecta";
        resultado.style.color = "red";
    }

    //Si todo es correcto almacenamos los datos
    if((regNom.test(nombre.value)===true)&&(regEdad.test(edad.value)===true)&&(regMal.test(maldad.value)===true)){
        var v=[nombre.value, edad.value, maldad.value];
        villano.push(v);
        //Comprobar que se añade correctamente el registro
        console.log("Nombre "+villano[0][0]+" Edad "+villano[0][1]+" Maldad "+villano[0][2]);
    }
}

//Funcion resumen del registro
function inform()
{
    resultado.innerHTML="";
    resultado.style.color = "white";
    //Numero de villanos
    var numV=villano.length;
    //Media de edades
    //Maldad maxima
    max=-Infinity;
    var media=0;
    console.log("Numero de villanos "+numV);
    for(let i=0;i<villano.length;i++)
    {
        media=parseInt(villano[i][1])+media;
        console.log(villano[i][1]);
        if(parseInt(villano[i][2])>max)
        {
            max=parseInt(villano[i][2]);
        }
    }   
    media=media/numV;
    //Imprimir resultados
    resultado.innerHTML=resultado.innerHTML+"Nº de villanos registrados: "+numV+"<br>";
    resultado.innerHTML=resultado.innerHTML+"Media de edad: "+media.toFixed()+"<br>";
    resultado.innerHTML=resultado.innerHTML+"Maldad maxima: "+max+"<br>";
    resultado.innerHTML=resultado.innerHTML+"Listado:<br>";
    for(let i=0;i<villano.length;i++)
    {
        resultado.innerHTML=resultado.innerHTML+villano[i][0]+", con "+villano[i][1]+" anos, tiene una maldad de "+villano[i][2]+"<br>"; 
    }  
    console.log("Media de edad "+media);
    console.log("Maldad maxima "+max);
}

//EJERCICIO 2

//Jubilar villanos
function jubilar()
{
    resultado.innerHTML="";
    resultado.style.color = "white";
    var anio = document.getElementById ("anio");
    var regAnio=/^\d{4}$/;
    if(regAnio.test(anio.value)===true){
        //Calculo los el tiempo que falta hasta ese año
        var d = new Date();//Dia de hoy
        var proxAnio=new Date(anio.value, 0, 1, 0, 0, 0);
        var dif=proxAnio.getTime()-d.getTime();//Diferencia en milisegundos de los años
        var cont=dif/(1000*60*60*24*365);//Tiempo de diferencia entre milisegundos de un año
        resultado.innerHTML=resultado.innerHTML+"Lista de jubilados: <br>";
        for(let i=0;i<villano.length;i++)
        {
            var proxEdad=parseInt(villano[i][1])+Math.ceil(cont);
            console.log(proxEdad);
            if(proxEdad>=70){
                resultado.innerHTML=resultado.innerHTML+villano[i][0]+"<br>";
            }
        } 

    }
}

//Atrapar villanos

villanosAux=[];
function atrapar(){
    resultado.innerHTML="";
    resultado.style.color = "white";
    var fuerza=78;
    resultado.innerHTML=resultado.innerHTML+"Nueva lista de villanos: <br>";
    for(let i=0;i<villano.length;i++)
    {
        
        if(parseInt(villano[i][2])>fuerza)
        {
            var v=[villano[i][0], villano[i][1], villano[i][2]];
            villanosAux.push(v);
            resultado.innerHTML=resultado.innerHTML+villano[i][0]+", con "+villano[i][1]+" anos, tiene una maldad de "+villano[i][2]+"<br>"; 
        }

    }
    villano=villanosAux;
}


//EJERCICIO 3
//Ordenar de mayor a menor

function ordenar(){
    for (let i = 0, tmp; i < villano.length-1; i++){ //Bucle que recorre todos los elementos hasta el penúltimo
      for (let j = i+1; j < villano.length; j++){ //Bucle para hacer comparaciones. Se comienza en el siguiente valor de i ya que los anteriores están ya ordenados
        if (parseInt (villano[i][2])<parseInt (villano[j][2])) { //Comparativa entre elementos
          tmp = villano[i];  //Si se cumple la condición se intercambian los valores de las posiciones.
          villano[i] = villano [j];
          villano [j] = tmp;
        }
      }
    }
    resultado.innerHTML="";
    resultado.style.color = "white";
    resultado.innerHTML=resultado.innerHTML+"Mas buscados: <br>";

    for(let i=0;i<villano.length;i++)
    {

            resultado.innerHTML=resultado.innerHTML+villano[i][0]+"--->"; 

    }
  }

  //Baja voluntaria
  bajas=[];
  function baja(){
    var name=window.prompt("Nombre del villano","");
    bajas.push(name);
    resultado.innerHTML="";
    resultado.style.color = "white";
    resultado.innerHTML=resultado.innerHTML+"Peticiones de baja: <br>";
    for(let i=0;i<bajas.length;i++){
        resultado.innerHTML=resultado.innerHTML+bajas[i]+" ";
    }
  }

  function atenderBaja(){
    bajas.shift();
    resultado.innerHTML="";
    resultado.style.color = "white";
    resultado.innerHTML=resultado.innerHTML+"Peticiones de baja: <br>";
    for(let i=0;i<bajas.length;i++){
        resultado.innerHTML=resultado.innerHTML+bajas[i]+" ";
    }
  }