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


//__dirname se de pasar de  el archivo principal  del bot

//"carpeta"  el nombre de la carpeta de donde se ubica los comandos
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
##  class Tatsumiko
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
		place: 0,
   
	  //puedes vereficar el tipo de argumento que deseas "mention channel role"
	   type: "mention",
   
	   //puede devolver una respuesta si el argumento enviado no es  el tipo que necesitas
	   response: "no mencionaste a nadie"
	  }
	 ]
	 //
	 let argumenterror = "No pasaste argumentos"
   
	 //si solo los desarrolladores del bot pueden usar este  comando por defecto es false
	 let owneronly = false
   
   
   
	  super(name, alise, haspermission, argument,argumenterror, owneronly)
   
	}
	run(client, message, args, map) {
   
	 if (this.checkargs(args, message)) {
	  message.channel.send("pong")
	 }
   
   
   }}
   
   module.exports = ping
```

## Contactame

### me puedes contactar por

- Discord OnlyD#5221
