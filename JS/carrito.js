"use strict"

/*Objeto Carrito*/ 
function Carrito(Id_carrito, items, cantidades){
    try{
        if(!/^[1-4]/.test(id)) throw "El Id debe comenzar por 1, 2, 3 o 4";
        if(!/^[0-9]{6}$/.test(id))
        { throw "El Id debe contener 6 numeros";}
        else{
            this.Id_carrito=Id_carrito;
            this.items=items; 
            this.cantidades=0||cantidades; 
        }
    }
    catch(err){
        console.log("ERROR: "+err);
    }     
}
Carrito.prototype.toString=function(){
    return "Id: "+this.Id_carrito+" Items: "+this.items+" Cantidades: "+this.cantidades;
}

Carrito.prototype.getId_carrito=function(){
    return this.Id_carrito;
}

Carrito.prototype.getItems=function(){
    return this.items;
}

Carrito.prototype.getCantidades=function(){
    return this.cantidades;
}

Carrito.prototype.setId_carrito=function(Id_carrito){
    this.Id_carrito=Id_carrito;
}

Carrito.prototype.setItemns=function(items){
    this.items=items;
}

Carrito.prototype.setCantidades=function(cantidades){
    this.cantidades=cantidades;
}

/*Objeto Producto*/
function Producto(num_serie, nombre, precio, iva){
    try{
        if(!/^S\/N:[0-9]{8}$/.test(num_serie)) throw "Formato de numero de serie incorrecto";
        if((iva<0)||(iva>21))
        {
            throw "El iva no puede ser mayor del 21%";
        }else{
            this.num_serie=num_serie;
            this.nombre=nombre;
            this.precio=0||precio;
            this.iva=0||iva;
        }
    }catch(err)
    {
        console.log("ERROR: "+err);
    }
            
}

Producto.prototype.toString=function(){
    return "Nº serie: "+this.num_serie+" Nombre: "+this.nombre+" Precio: "+this.precio+" IVA "+this.iva;
}

Producto.prototype.getNumSerie=function(){
    return this.num_serie;
}

Producto.prototype.getNombre=function(){
    return this.nombre;
}

Producto.prototype.getPrecio=function(){
    return this.precio;
}

Producto.prototype.getIVA=function(){
    return this.iva;
}

Producto.prototype.setNumSerie=function(num_serie){
    this.num_serie=num_serie;
}

Producto.prototype.setNombre=function(nombre){
    this.nombre=nombre;
}

Producto.prototype.setPrecio=function(precio){
    this.precio=precio;
}

Producto.prototype.setIVA=function(iva){
    this.iva=iva;
}

/*Objeto Camiseta*/
function Camiseta(num_serie, nombre, precio, talla, color){
    try{
        if((talla!=="XS")||(talla!=="S")(talla!=="M")||(talla!=="L")||(talla!=="XL")||(talla!=="XXL")||(talla!=="XXXL"))
        {
            throw "Talla incorrecta";
        }
        else{
            Producto.call(this, num_serie, nombre, precio, 10); //El IVA en prendas en 10%
            this.talla=talla;
            this.color=color||"";
        }
    }catch(err){
        console.log("ERROR: "+err);
    }
}
Camiseta.prototype=new Producto;
Camiseta.prototype.toString = function(){ //toString invoca al toString de Producto
    return Producto.prototype.toString.call(this) + " Talla: "+ this.talla+" Color: "+this.color;
}

Camiseta.prototype.getTalla=function(){
    return this.talla;
}

Camiseta.prototype.getColor=function(){
    return this.color;
}

Camiseta.prototype.setTalla=function(talla){
    this.talla=talla;
}

Camiseta.prototype.setColor=function(color){
    this.color=color;
}

/*Objeto Pantalon*/
function Pantalon(num_serie, nombre, precio, talla, color, ancho, largo){
    try{
        if((talla!=="XS")||(talla!=="S")(talla!=="M")||(talla!=="L")||(talla!=="XL")||(talla!=="XXL")||(talla!=="XXXL")) throw "Talla incorrecta";
        if((typeof ancho !== 'undefined' || ancho !== null)&&((ancho<32)||(ancho>48))) throw "Ancho no valido"; //Si el ancho es un numero, es decir existe
        else{
            Producto.call(this, num_serie, nombre, precio, 10); //El IVA en prendas en 10%
            this.talla=talla;
            this.color=color||"";
        }
    }catch(err){
        console.log("ERROR: "+err);
    }
    Producto.call(this, num_serie, nombre, precio, 10);//El IVA en prendas en 10%
    this.talla=talla;
    this.color=color||"";
    this.ancho=0||ancho;
    this.largo=0||largo;
}
Pantalon.prototype=new Producto;
Pantalon.prototype.toString = function(){ //toString invoca al toString de Producto
    return Producto.prototype.toString.call(this) + " Talla: "+ this.talla+" Color: "+this.color+" Ancho: "+this.ancho+" Largo: "+this.largo;
}

Pantalon.prototype.getTalla=function(){
    return this.talla;
}

Pantalon.prototype.getColor=function(){
    return this.color;
}

Pantalon.prototype.getAncho=function(){
    return this.ancho;
}

Pantalon.prototype.getLargo=function(){
    return this.largo;
}

Pantalon.prototype.setTalla=function(talla){
    this.talla=talla;
}

Pantalon.prototype.setColor=function(color){
    this.color=color;
}

Pantalon.prototype.setAncho=function(ancho){
    this.ancho=ancho;
}

Pantalon.prototype.setLargo=function(largo){
    this.largo=largo;
}

/*Objeto Zapatillas*/
function Zapatillas(num_serie, nombre, precio, numero, tipo){
    Producto.call(this, num_serie, nombre, precio, 4);//El IVA en calzado en 4%
    this.numero=numero;
    this.tipo=tipo;
}
Zapatillas.prototype=new Producto;
Zapatillas.prototype.toString = function(){ //toString invoca al toString de Producto
    return Producto.prototype.toString.call(this) + " Numero: "+ this.numero+" Tipo: "+this.tipo;
}

Zapatillas.prototype.getNumero=function(){
    return this.numero;
}

Zapatillas.prototype.getTipo=function(){
    return this.tipo;
}

Zapatillas.prototype.setNumero=function(numero){
    this.numero=numero;
}

Zapatillas.prototype.setTipo=function(tipo){
    this.tipo=tipo;
}

/*Funcionalidades*/
/*Listado de productos que contiene el carrito.*/ 
function listar(carrito){
    for(x of carro.getItems()){
        console.log(x.toString());
    }
}

/*Añadir producto.*/
function añadir(carrito, producto){
    carrito.getItems.push(producto);
}

/*Eliminar producto, que funcionará como una pila, eliminándose el último producto añadido en ella.*/
function añadir(carrito){
    carrito.getItems.pop();
}

/*Cantidad, donde irá apareciendo el número de artículos que tiene el carrito.*/
function añadir(carrito){
    console.log("Numero de productos:"+carrito.getItems.length);
}

/*Total, para mostrar cuánto tiene que pagar el usuario al finalizar la compra, primero sin aplicar el IVA y al final con el impuesto aplicado.*/
function total(carrito){
    var totalSin=0;
    var totalCon=0;
    for(x of carro.getItems()){
        totalSin+=x.getPrecio();
        totalCon+=(x.getPrecio()*(1+(x.getIVA()/100)));
    }
    console.log("Total sin IVA: "+totalSin);
    console.log("Total con IVA: "+totalCon);
}

function test(){
    var id=098782;
    var items=[];
    
    var carrito=new Carrito(id, items);
    var num_serie="S/N:90878976";
    var nombre=polo;
    var precio=50;
    iva=20;
    var tala="XL"; 
    var color="rojo";
    
    var cam1=new Camiseta(num_serie, nombre, iva, );
}

test();