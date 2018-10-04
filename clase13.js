var julio = {
    nombre: 'Julio',
    apellido: 'Palma',
    edad: 22,
    peso: 75
}

//Simular el transcurso de un año
console.log(`Al inicio del año ${julio.nombre} pesa ${julio.peso.toFixed(1)} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazarDePeso = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        // Aumenta de peso
        aumentarDePeso(julio)
    } else if (random < 0.5) {
        // Adelgazar
        adelgazarDePeso(julio)
    }
}
console.log(`Al fin del año ${julio.nombre} pesa ${julio.peso.toFixed(1)} kg`)




/**/
//En el curso anterior de Fundamentos, 
//Sacha enseñaba cómo podemos generar un número aleatorio entre dos números que queramos:

const numMax = 10
const numMin = 1

const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin)
// redondeamos el decimal que nos devuelve envolviendo todo en Math.round
/*
numRandom() // 8
numRandom() // 5
numRandom() // 1
numRandom() // 10*/

    console.log(`el numero es:  ${numRandom()}`)



