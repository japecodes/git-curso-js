var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}


const esAlta = ({ altura }) => altura > 1.8
//Reto, personas bajas:
const esBaja = ({ altura }) => !esAlta({ altura })

//Declaramos el array
var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
//modo 1: -->       var personasAltas = personas.filter(esAlta)

//modo 2: --> utilizando funciones anonimas
//tipo, es más legible el codigo. si  es por partes.
/*
var personasAltas = personas.filter(function (persona) {
    return persona.altura < 1.8
})*/

const pasarAlturaACM = persona => ({
    // persona.altura *= 100 // es lo mismo que persona.altura * 100= persona.altura * 100
        ...persona,
        altura: persona.altura * 100
    })

const pasarMtsaCm = personas.map(pasarAlturaACM)

const reducer =(acum, {cantidadDeLibros}) => acum + cantidadDeLibros

//Con reduce
var totalLibros = personas.reduce(reducer, 0)

console.log(pasarMtsaCm)
console.log( `En total, hay ${totalLibros} libros`)