function Persona(nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}

Persona.prototype.saludar = function () {
	console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
}


Persona.prototype.soyAlto = function () {
	return this.altura >= 1.8
}


//Como hacemos para que herede ?
//1. crear una funcion 
function heredaDe(protoHijo,protoPadre) {
//3.Aqui le decimos al ptto hijo quien sera su padre :v
	var fn = function () {} //4. funcion vacia
	fn.prototype = protoPadre.prototype //5. al prototipo de esta le asignamos el prototipo padre
	protoHijo.prototype = new fn //6. Nuevo objeto de la funcion q creamos, es decir lo mismo pero pasamos a otro objeto.
	//7. asignamos constructor
	protoHijo.prototype.constructor = protoHijo
	//Esto es algo complejo, pero en la clase q viene será más sencillo
}


function Desarrollador(nombre,apellido) {
	this.nombre = nombre
	this.apellido = apellido
}


//2. llamada.
heredaDe(Desarrollador,Persona)


Desarrollador.prototype.saludar = function () {
	console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}



/*
var julio = new Persona('Julio', 'Palma', 1.71)
var erika = new Persona('Erika', 'Luna', 1.79)
var arturo = new Persona('Arturo', 'Martinez', 1.83)

var diego = new Desarrollador('Diego', 'Arcos', 1.78)
*/