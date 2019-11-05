/*var num=window.prompt("Escribe un numero","");

function parImpar()
{
    if(num%2==0)
    {
        document.write("El numero "+num+" es par");
    }else{
        document.write("El numero "+num+" es impar");
    }
}
parImpar();

var num2=window.prompt("Escribe un numero","");
function primo()
{
    for(let i=2;i<=num2;i++)
    {
        cont=0;
        for(let j=1;j<=i;j++)
        {
            if(i%j==0)
            {
                cont++;
            }
        }
        if(cont==2)
        {
            document.write(i+"<br>");
        }
    }
}
primo();
*/
// var cadena=window.prompt("Escribe una cadena","");
// function info()
// {
//     if(cadena==cadena.toLowerCase())
//     {
//         document.write("La cadena esta compuesta solo por minusculas");
//     }else if(candena==cadena.toUpperCase()){
//         document.write("La cadena esta compuesta solo por mayusculas");
//     }else{
//         document.write("La cadena esta compuesta por mayusculas y minusculas");
        
//     }

// }
// info();

//Factorial iterativo
var num=window.prompt("Escribe un numero","");
// var resultado = document.getElementById ("resultado");
// function factorial(num){
//     var fact=1;
//     for(let i=num; i>0; i--){
//         fact=fact*i;
//     }
//     return fact;
// }
// document.write(factorial(num));

//Factorial recursivo

// function factorialRec(num){
//     if(num<=1) return 1;
//     return num *factorialRec(num-1);

// }
// document.write(factorialRec(num));

//Fibonacci recursiva
function fiboRec(elem){

    /*
    if(elem<2) return elem;*/ 
    if(elem==0) return 0;
    if(elem==1) return 1;
    return fiboRec(elem-1)+fiboRec(elem-2);
}
document.write(fiboRec(num));