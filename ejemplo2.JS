const {Tatsumikoclass} = require("./src/index")

class Comando extends Tatsumikoclass {
	constructor(){
		//nombre del comando esto es obligatorio
		let name = "nombre"
		//descricion del comando es opcional lo pueden dejar vacio ""
		let description= "Esto es una descricion"
		//los alias del comando son opcionales lo pueden dejar vacio []
		let alise = ["alias"]
		//los permisos requerido para que funcione el bot 
		//si no necesita ningun permiso especial lo puede dejar vacio []
		let haspermission =["KICK_MEMBERS"]
		//
		//puedes vereficar el tipo de argumento que deseas "mention channel role"
		let argument = [
		{ place: 0, type: "mention",response:"aqui puedes enviar una respuesta opcional si no se encontro los argumentos deseados" }
		, { place: 1, type: "channel" ,response:"a"}
		, { place: 1, type: "role",response:"e" }
		]

		let owneronly = false

		super(name, description, alise, haspermission, argument, owneronly)

	}
	run(client, message, args, map){
		//
		this.checkargs(args,message)

	}
}

module.exports = Comando