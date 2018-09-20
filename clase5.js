
var nombre='Julio'
//Variable de alcance global y se puede acceder desde cualquier función y modificarla

//la variable 'n' es de alcance local y solo existe dentro de la función, podríamos nombrar la variable igual que la variable global y solo podrá ser accedida y modificada dentro de la función.
function imprimeNombreMayusculas(n) {
    n=  n.toUpperCase()
    console.log(n)
}
imprimeNombreMayusculas(nombre)
//Toda variable que no este definida dentro de una función, estará definida dentro del alcance global y podremos acceder a ella a travez del objeto global, en este caso en el navegador por medio de window.variableGlobal