//Objeto producto
function Producto(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
}


function Carrito(){
    this.lista=[];
}

Carrito.prototype.añadir=function(producto){
    this.lista.push(producto);
}

Carrito.prototype.contar=function(){
    return this.lista.length;
}

Carrito.prototype.calcPrecio=function(){
    var total=0;
    for(x of this.lista)
    {
        total+=parseInt(x.precio);
    }
    return total;
}

Carrito.prototype.getLista=function(){
    return this.lista;
}

Carrito.prototype.deletePro=function(){

}

var carro=new Carrito();
var resultado=document.getElementById("resultado");
function add(){
    var p= new Producto(document.getElementById("prod").value, document.getElementById("precio").value);
    carro.añadir(p);
    resultado.innerHTML="";
    resultado.innerHTML=resultado.innerHTML+"Unidades: "+carro.contar()+"<br>";
    resultado.innerHTML=resultado.innerHTML+"Total: "+carro.calcPrecio()+"<br>";

}

function show(){
    resultado.innerHTML="";
    for(x of carro.getLista()){
        resultado.innerHTML=resultado.innerHTML+"Producto: "+x.nombre+"; Precio: "+x.precio+"<br>";
    }
}

// function delet(){
//     resultado.innerHTML="";
//     resultado.innerHTML=resultado.innerHTML+"<select>";
//     for(x of carro.getLista()){
//         resultado.innerHTML=resultado.innerHTML+"<option value="+x.nombre+">"+x.nombre+"</option>";
//     }
//     resultado.innerHTML=resultado.innerHTML+"</select>";
// }
/*
function carrito(){
    this.articulos=0;
    this.total=0;
}

carrito.prototype.incrementar=function(){
    this.articulos=this.articulos+1;
    return this.articulos;
}

carrito.prototype.suma=function(precio){
    this.total=this.total+parseInt(precio);
    return this.total;
}

var nuevoCarrito=new carrito();

function aniadirCarrito(){
    var precio=document.getElementById('precio').value;
    resultado.innerHTML="";
    nuevoCarrito.incrementa();
    nuevoCarrito.suma(precio);
    
    resultado.innerHTML=resultado.innerHTML+"Unidades: "+nuevoCarrito.articulos+"<br>";
    resultado.innerHTML=resultado.innerHTML+"Total: "+nuevoCarrito.toal+"<br>";
}





*/ 