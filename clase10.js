//Clase condicionales

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


function imprimirMayoriadeEdad(persona){
    console.log(`${persona.nombre} ${persona.apellido} es:`)
    if(persona.edad >= 18) {
        console.log(`Mayor de Edad`)
    } else {
        console.log(`Es Menor de Edad`)
    }
}
imprimirProfesiones(julio)

imprimirMayoriadeEdad(julio)