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
	.then(function (data) {
		console.log(`El personaje 1 es  ${data.name}`)	
	})
	.catch(onError)

