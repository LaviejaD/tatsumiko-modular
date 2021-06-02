# Tatsumiko-modular

---

## Herramienta para facilitar la creacion de comandos modulares para bot de discord en español

---

> npm i tatsumiko-modular

### Requimentos

- [node v12.@ o superior](https://nodejs.org/es/)

- [discord.js 12.@ o superior](https://discord.js.org/#/)

---

## Ejemplo de uso

```
const {Tatsumiko} = require("tatsumiko-modular")
const discord = require("discord.js")
const client = new discord.Client()


//"__dirname" se pasa la direccion del archivo principal  del bot 
//"carpeta"  el nombre de la carpeta de donde se ubica los comandos deben estar en el mismo nivel del archivo principal del bot
//por el momento no lee  carpetas hijas

//["IDs"] aqui se debe pasar la id o las ids de los dessarolladores del bot

const tatsumiko = new  Tatsumiko(__dirname,"carpeta",["IDs"])


client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', message => {

 //se debe pasar el client de discord
 //se pasa el discord.message
 //envias el prefix de tu bot
 tatsumiko.commands(client, message,"!")
  });

  client.login('Bot token');

```

   
---
## tatsumiko metodos
---
### tatsumiko.answers
#### una forma de dar respuesta por defecto
```
const {Tatsumiko} = require("tatsumiko-modular")
const tatsumiko = new  Tatsumiko(__dirname,"carpeta",["IDs"])

//estas son las respuesta por defecto pero pueden ser personalisadas
const respuesta = {
	desarrolladores:"Solo los desarrolladores pueden usar este comando",
	faltadepermisosBot:"Me faltan permisos para ejecutar este comando",
	faltadepermisosUsuario:"Te faltan permisos para usar el comando"
	cooldown:"Tienes que esperar un momento para volver a usar el comando"

} 
tatsumiko.answers(respuesta)
```
---
##   Tatsumikoclass
---
## Estrutura de los comandos

### los comando deben de seguir esta estrura obligatoria para que funcione Tatsumiko 

```
const { Tatsumikoclass } = require("tatsumiko-modular")

//Nombre de tu comando ejemplo ping
class ping extends Tatsumikoclass {
	constructor() {
   
	 //nombre del comando esto es obligatorio
	 let name = "ping"
   
	 //los alias del comando son opcionales lo pueden dejar vacio []
	 let alise = ["alias"]
   
	 //los permisos requerido para que funcione el bot
	 //si no necesita ningun permiso especial lo puede dejar vacio []
	 let haspermission = []
   
   
	 let argument = [
	  { 
		//El lugar donde esta el argumento deseado
		//[A,B,C]
		// 0 1 2
		//tomaria 0 que seria A
		place: 0,
   
	  //puedes verificar el tipo de argumento que deseas "mention channel role string"
	   type: "mention",
   
	   //puede devolver una respuesta si el argumento enviado no es  el tipo que necesitas
	   response: "no mencionaste a nadie"
	  }
	 ]
	 //envia una respuesta solo cuando necesita argumento pero no fueron pasados
	 let argumenterror = "No pasaste argumentos"
   
	 //si solo los desarrolladores del bot pueden usar este  comando por defecto es false
	 let owneronly = false
   
   
   //Tiempo de espera para usar el comando por defecto es 1000
	 let cooldown = 5000

	super(name, alise, haspermission, argument,argumenterror, owneronly,cooldown)
   
	}
	run(client, message, args) {
		//es el client pasado con anterioridad
		//message es el objecto del evento message
		//args son los argumentos 
   		//this.checkargs() con esos podes verificar los argumentos deseados regresa true si no hubo algun error
   
	 if (this.checkargs(args, message)) {
	  message.channel.send("pong")
	 }
   
   
   }}
   
   module.exports = ping
```

# me puedes contactar por
- Discord: OnlyD#5221
