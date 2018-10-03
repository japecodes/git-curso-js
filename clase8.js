//Nos van a delimitar que lo siguiente es un objeto:
    var julio ={
    nombre:'Julio',
    apellido:'Palma',
    edad:22
    }
    
    var lucho ={
        nombre:'Lucho',
        apellido:'Perez',
        edad:30
    }
    //imprimeNombreMayusculas({nombre:'pepito'}) //Excelente
    //imprimeNombreMayusculas({apellido:'gomez'}) //generara error

    //Ejercicio, funcion imprimeNombreyEdad, 
    //que imprime 'Hola , me llamo Julio y tengo 22 años.'
    //y si le paso Lucho, imprima, Dario y tengo 30 años
    
    function imprimeNombreyEdad (persona) { 
        var {nombre} = persona
        console.log(nombre.toUpperCase())
    }
    imprimeNombreyEdad(julio)
    imprimeNombreyEdad(lucho)
         
    function cumpleaños(persona) {
        return {
            ...persona,
            edad:persona.edad +1
        }
        
    }
    