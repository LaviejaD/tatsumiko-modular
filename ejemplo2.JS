const { Tatsumikoclass } = require("../../Tatsumiko-modular/src/index")
//const { Tatsumikoclass } = require("tatsumiko-modular")

//Nombre de tu comando ejemplo ping
class ping extends Tatsumikoclass {
	constructor() {
   
	 //nombre del comando esto es obligatorio
	 let name = "ping"
   
	 //los alias del comando son opcionales lo pueden dejar vacio []
	 let alise = ["alias"]
   
	 //los permisos requerido para que funcione el comando 
	 //si no necesita ningun permiso especial lo puede dejar vacio []
	 let haspermission = []
   
   
	 let argument = [
	  { 
		//El lugar donde esta el argumento deseado
		place: 0,
   
	  //puedes verificar el tipo de argumento que deseas "mention channel role string"
	   type: "role",
   
	   //puede devolver una respuesta si el argumento enviado no es  el tipo que necesitas
	   response: "no mencionaste a nadie"
	  }
	 ]
	 //
	 let argumenterror = "No pasaste argumentos"
   
	 //si solo los desarrolladores del bot pueden usar este  comando por defecto es false
	 let owneronly = false
   
   
   //Tiempo de espera para usar le comando
	 let cooldown = 5000
   
   
	 super(name, alise, haspermission, argument,argumenterror, owneronly,cooldown)
   
	}
	run(client, message, args) {
   
	 if (this.checkargs(args, message)) {
	  message.channel.send("pong")
	 }
   
   
   }}
   
   module.exports = ping