var julio = {
    nombre: 'Julio',
    apellido: 'Palma',
    edad: 22,
    peso: 75
}

//Simular el transcurso de un año
console.log(`Al inicio del año ${julio.nombre} pesa ${julio.peso.toFixed(1)} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random < 0.3
const realizaDeporte = () => Math.random < 0.4

const META = julio.peso - 3
var dias = 0

while (julio.peso > META) {
    debugger
    if (comeMucho()) {
        //Aumentar
        aumentarDePeso(julio)
    }
    if (realizaDeporte()) {
        adelgazarDePeso(julio)
    }
    dias += 1
}

console.log(`Pasaron  ${dias} dias hasta que ${julio.nombre} adelgazó 3 kg`)
