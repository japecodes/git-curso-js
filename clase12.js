//Clase condicionales

/*
En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.
*/ 
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

//Esto es permitidp en js
/*var esMayorDeEdad = function (persona) {
    return persona.edad >=MAYORIA_DE_EDAD
}*/

//En arrow functionsm cuando tenemos 1 solo parametro, podemos obviar los parentesis
//borramos la palabra return  e implicitamente la llave que retorna la funcion
   //const esMayorDeEdad = persona =>  persona.edad >= MAYORIA_DE_EDAD
//desectructurando parametros:
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayoriadeEdad(persona) {
    console.log(`${persona.nombre} ${persona.apellido} es:`)
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de Edad`)
    } else {
        console.log(`${persona.nombre} es menor de Edad`)
    }
}

function permitirAcceso(persona) {
    //Signo de Exclamacion niega lo siguiente:
    if (!esMayorDeEdad(persona)){
        console.log('Acceso Denegado')
    }
}

//Reto imprime miEdad en Arrow function
const EsMenorDeEdadEnArrow = ({edad}) => !esMayorDeEdad({edad}) ? console.log('Acceso Denegado') : console.log('Pase ;)')