

const enviarmensaje = (message, texto) => {
	message.channel.send(texto)
}
/** verifica las propiedas de los archivos y regresa un error si falta una propieda
 * @return {booleam} devuelve true si todo esta bien
 * @param  {Object} file comando
 */
const comprobarpropiedades = (file) => {

	const propiedades = ["name", "description", "alise", "haspermission", "arguments", "owner_only"]
	for (let index = 0; index < propiedades.length; index++) {
		const element = propiedades[index];

		if (file.hasOwnProperty(element)) {


		} else {
			let error = new Error(`propieda faltante es "${propiedades[index]}" , en el archvivo "${propiedades[index]}"`)
			
			throw error
		}

	}
	return true
}



module.exports = {
	enviarmensaje: enviarmensaje,
	comprobarpropiedades: comprobarpropiedades
}