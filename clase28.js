const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//request : get
//Debemos indicarle a jquery q el request se ira hacia otra pagina
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {
	crossDomain: true
}
/*
$.get(lukeUrl, opts, function (data) {
	console.log(`Hola yo soy ${data.name}`);
})*/

//o

const onResponse = function (data) {
	console.log(`Hola yo soy ${data.name}`);
}
$.get(lukeUrl,opts,onResponse)
