const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}



function obtenerPersonaje(id) {
	 return new Promise((resolve, reject)=>{
		
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		$
			.get(url, opts, function(data){
				resolve(data)
			})
			.fail(() => reject(id))
		})
}

function onError(id) {
	console.log(`Sucedió un errooooor, al obtener el personaje ${id}`)	
}

obtenerPersonaje(1) 
	.then(data1 => {
		console.log(`El personaje 1 es  ${data1.name}`)	
	//Vamos a obtener el personaje 2
	return obtenerPersonaje(2)
	})
	.then(data2 => {
		console.log(`El personaje 2 es  ${data2.name}`)	
	return obtenerPersonaje(3)
	})
	.then(data3 => {
		console.log(`El personaje 3 es  ${data3.name}`)	
	return obtenerPersonaje(4)
	})
	.then(data4 => {
		console.log(`El personaje 4 es  ${data4.name}`)
	return obtenerPersonaje(5)
	})
	.then(data5 => {
		console.log(`El personaje 5 es  ${data5.name}`)
	return obtenerPersonaje(6)
	})
	.then(data6 => {
		console.log(`El personaje 6 es  ${data6.name}`)
	return obtenerPersonaje(7)
	})
	.then(data7 => {
		console.log(`El personaje 7 es  ${data7.name}`)
	})
	.catch(onError)

