/*
Método Object.defineProperty();
*/

//Ejemplo writable
console.log("Ejemplo writable");
var o = {}; // Crea un objeto nuevo

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No se producirá la asignación
console.log(o.a); // muestra 37. La asignación no funcionó

//Ejemplo enumerable
console.log("Ejemplo enumerable");

var o = {};
Object.defineProperty(o, 'a', { value: 1, enumerable: true });
Object.defineProperty(o, 'b', { value: 2, enumerable: false });
Object.defineProperty(o, 'c', { value: 3 }); // enumerable defaults to false
o.d = 4; // enumerable defaults to true when creating a property by setting it

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false

//Ejemplo configurable
console.log("Ejemplo configurable");

var o = {};
Object.defineProperty(o, 'a', {
  get: function() { return 1; },
  configurable: false
});

try {
	Object.defineProperty(o, 'a', { configurable: true }); // arroja TypeError
} catch(err){
	console.log(err); 	
}

try {
	Object.defineProperty(o, 'a', { enumerable: true }); //  arroja  TypeError
} catch(err){
	console.log(err); 	
}
try {
	Object.defineProperty(o, 'a', { set: function() {} }); //  arroja  TypeError (set estaba definido como undefined)
} catch(err){
	console.log(err); 	
}
try {
	Object.defineProperty(o, 'a', { get: function() { return 1; } }); // arroja TypeError (incluso aunque los get hacen lo mismo)
} catch(err){
	console.log(err); 	
}
try {
	Object.defineProperty(o, 'a', { value: 12 }); // arroja TypeError
} catch(err){
	console.log(err); 	
}

console.log(o.a); // logs 1
delete o.a; // No hace nada
console.log(o.a); // logs 1

// Getter y setter
console.log("Getter y setter");
var o = {
  a: 7,
  get b(){
    return this.a + 1;
  },
  set c(x){
    this.a = x / 2
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25

var o = { a:0 }

Object.defineProperties(o, {
    "b": { get: function () { return this.a + 1; } },
    "c": { set: function (x) { this.a = x / 2; } }
});

o.c = 10 // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b) // Runs the getter, which yields a + 1 or 6

Object.defineProperty(Date.prototype, "year", {
  get: function() { return this.getFullYear() },
  set: function(y) { this.setFullYear(y) }
});

var now = new Date();
console.log(now.year); // 2016
now.year = 2001; // 987617605170
console.log(now);

// Creando objetos mediante métodos
console.log("Creando objetos mediante métodos");

// Example where we create an object with a couple of sample properties.
// (Note that the second parameter maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: { writable: true, configurable: true, value: 'hello' },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) { console.log('Setting `o.bar` to', value); }
  }
});
console.log(o.foo);
o.foo = "bye";
console.log(o.foo);
console.log(o.bar);
o.bar = 15;

//Getter y Setter en constructor
console.log("Getter y Setter en constructor");
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
console.log (arc.getArchive()); // [{ val: 11 }, { val: 13 }]



