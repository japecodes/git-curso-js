class Persona {
	//existira la clase persona y tendra un metodo llamado constructor que se va a ejecutar cuando
	//creemos objetos de esta clase.
	constructor(nombre, apellido, altura) {
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}
	//Crearemos un metodo en esta clase.
	saludar(fn) {
		///Podemos poner esto:
		//var nombre = this.nombre
		//var apellido = this.apellido
		var {nombre,apellido} =this
		console.log(`hola me llamo ${nombre} ${apellido}`)
		if (fn){
			fn(nombre,apellido)
		}
	}
	soyAlto() {
		return this.altura >= 1.8
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura) {
		super(nombre,apellido,altura)
		//No podemos usar this, hasta que hayamos llamado al constructor de la clase padre.
	}
	saludar(fn) {
		//var nombre = this.nombre
		//var apellido = this.apellido
		var {nombre,apellido} = this
		console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
		if (fn){
			fn(nombre,apellido,true)
		}
	}
}


function responderSaludo(nombre,apellido, esDev) {
	console.log(`Buen día ${nombre} ${apellido}`);
	if (esDev){
		console.log(`Ah mira que curioso, ni idea que eras dev`);
	}
}

var julio = new Persona('Julio', 'Palma', 1.71)
julio.saludar()
var erika = new Persona('Erika', 'Luna', 1.79)
erika.saludar(responderSaludo)
var arturo = new Persona('Arturo', 'Martinez', 1.83)
arturo.saludar(responderSaludo)

var diego = new Desarrollador('Diego', 'Arcos', 1.78)
diego.saludar(responderSaludo)