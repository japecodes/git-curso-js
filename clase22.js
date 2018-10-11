function Persona(nombre,apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar =  () => {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`);
}


Persona.prototype.esAlto = () =>  this.altura >= 1.8 
/* 
1.
Persona.prototype.soyAlto = function () { console.log(${(this.altura>1.8)?"Soy":"No soy"} alto); }
2.
persona.prototype.esAlto = function (){
	if(this.altura >= 1.8){
		returnconsole.log(`${this.nombre} es alto`);
	} else{
		returnconsole.log(`${this.nombre} no es alto`);
	}
}
*/
var julio  = new Persona('Julio','Palma',1.71)
var erika  = new Persona('Erika','Luna',1.79)
var arturo  = new Persona('Arturo','Martinez',1.83)
julio.saludar()
julio.esAlto()
julio.esAlto()
julio.esAlto()
