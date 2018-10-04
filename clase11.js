//Clase condicionales
var juan ={
    nombre: 'Juan',
    apellido : 'Augusto',
    edad:12
}
var julio ={
    nombre: 'Julio',
    apellido : 'Palma',
    edad:22,
    ingeniero:false,
    cocinero:false,
    cantante:true,
    dj:false,
    guitarrista:false,
    drone:false
}
function imprimirProfesiones(persona ){
    console.log(`${persona.nombre} es:`)
    
    if (persona.ingeniero) {
        console.log(`Ingeniero`)
    }else {
        console.log(`No es Ingeniero`)
    }
    if(persona.cocinero) {
        console.log(`cocinero`)
    }
    if(persona.cantante) {
        console.log(`Cantante`)
    }
    if(persona.dj) {
        console.log(`DJ`)
    }
    if(persona.guitarrista) {
        console.log(`Guitarrista`)
    }
    if(persona.drone) {
        console.log(`Piloto de Drone`)
    }
}
//Esta variable no se deberia poder modificar, sino deberia ser constante. Es decir no modificable
//var mayoriaDeEdad = 18 //mal xD
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >=MAYORIA_DE_EDAD
}


function imprimirMayoriadeEdad(persona){
    console.log(`${persona.nombre} ${persona.apellido} es:`)
    if(esMayorDeEdad(persona)) {
        console.log(`Mayor de Edad`)
    } else {
        console.log(`Es Menor de Edad`)
    }
}
//imprimirProfesiones(julio)

imprimirMayoriadeEdad(julio)