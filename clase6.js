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
//Ahora mejoraremos la formula, haciendo que la funcion reciba el objeto de la persona.

function imprimeNombreMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}
imprimeNombreMayusculas(julio)
imprimeNombreMayusculas(lucho)
imprimeNombreMayusculas({nombre:'pepito'}) //Excelente
//imprimeNombreMayusculas({apellido:'gomez'}) //generara error