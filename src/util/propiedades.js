module.exports = (file) => {

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