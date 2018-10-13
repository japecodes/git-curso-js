class Persona {
	//existira la clase persona y tendra un metodo llamado constructor que se va a ejecutar cuando
	//creemos objetos de esta clase.
	constructor(nombre, apellido, altura) {
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
	}
	//Crearemos un metodo en esta clase.
	saludar() {
		console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
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
	saludar() {
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
	}
}

/*
var julio = new Persona('Julio', 'Palma', 1.71)
var erika = new Persona('Erika', 'Luna', 1.79)
var arturo = new Persona('Arturo', 'Martinez', 1.83)

var diego = new Desarrollador('Diego', 'Arcos', 1.78)
*/