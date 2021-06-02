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
	let check = true
	if (Filecomand.name.length === 0) {
		check = false
		let error = new Error(`el nombre esta vacio en el archivo:${dir} ${file}`)
		throw error
	}
	if(typeof Filecomand.name !== "string"){
		check = false
		let error = new Error(`En ${dir} ${file}, name debe ser string no:${typeof Filecomand.name}`)
		
		throw error
	}
	if(typeof Filecomand.owneronly !== "boolean"){
		check = false
		let error = new Error(`En ${Filecomand.name}, owneronly debe ser boolean no:${typeof Filecomand.owneronly}`)
		
		throw error
	}
	
	if (typeof Filecomand.cooldown != "number") {
		check = false
		let error = new Error(`En ${Filecomand.name}, cooldown debe ser number no:${typeof Filecomand.cooldown}`)
		throw error
	}
	return check
}