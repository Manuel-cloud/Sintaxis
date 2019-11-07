
//Factorial iterativo
// var num=window.prompt("Escribe un numero","");
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
// function fiboRec(elem){

//     /*
//     if(elem<2) return elem;*/ 
//     if(elem==0) return 0;
//     if(elem==1) return 1;
//     return fiboRec(elem-1)+fiboRec(elem-2);
// }
// document.write(fiboRec(num));



//Dividir recursivo
function divRec(DIV,div){
    if(DIV<div){
        return 0;
    } 
    else{
        return divRec(DIV-div, div) +1;
    }
}

//Invertir numero
function voltear(num){
    if(num<10) return num;
    var tmp="" +(num%10)+voltear(Math.floor(num/10));
    return parseInt(tmp);
}

//sacar suma de los componentes
function sumar(num){
    if(num<10) return num;
    return (num%10)+sumar(Math.floor(num/10));
}

//Teniendo un array 4,5,6 puede tener espacios y que sume sus elementos
function sumarStr(nums){
    if(nums.length==1) return nums[0];
    val=nums[length-1];
    return val+sumarStr(nums.pop());
}
