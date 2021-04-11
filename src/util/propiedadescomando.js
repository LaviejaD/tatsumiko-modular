module.exports = (Filecomand, dir, file) => {

	//const propiedades = ["name", "description", "alise", "haspermission", "arguments", "owner_only"]
	//for (let index = 0; index < propiedades.length; index++) {
	//	const element = propiedades[index];

	//	if (file.hasOwnProperty(element)) {


	//	} else {
	//		let error = new Error(`propieda faltante es "${propiedades[index]}" , en el archvivo "${propiedades[index]}"`)

	//		throw error
	//	}

	//}
	//return true

	if (Filecomand.name.length === 0) {
		let error = new Error(`el nombre esta vacio en el archivo:${dir} ${file}`)
		throw error
	}
	if (Filecomand.owneronly === true || !Filecomand.owneronly) {

	}

	switch (typeof Filecomand.owneronly) {
		case "boolean":
			break;
			
		case "string":
			let error = new Error(`owneronly:${dir} ${file}`)
			throw error
			
		case "boolean":
			let errora = new Error(`:${dir} ${file}`)
			throw errora
			
		case "boolean":
			let erroraa = new Error(`owneronly:${dir} ${file}`)
			throw erroraa
			

		default:
			break;
	}

	return true
}