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
    
    const imprimeNombreyEdad =(personas)=> { 
        let {nombre, edad}=personas;
        console.log(`hola me llamo ${nombre} y tengo ${edad} años de edad.`);
    }
    imprimeNombreyEdad(julio)
    imprimeNombreyEdad(lucho)
        
    