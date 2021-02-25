# Tatsumiko-modular
___
## Herramienta para facilitar la creacion de comandos modulares  para bot de discord en español ##
---
> npm i tatsumiko-modular
### Requimentos 



- [node v12.18.0 o superior](https://nodejs.org/es/)

- [discord.js 12.5.1 o superior](https://discord.js.org/#/) 	

---

## Ejemplo de uso

``` 
const {Tatsumiko} = require("tatsumiko-modular")

const discord = require("discord.js")
const client = new discord.Client()


//__dirname se de pasar de  el archivo principal  del bot

//"carpeta"  el nombre de la carpeta de donde se ubica los comandos 
//por el momento no lee  carpetas hijas

//["IDs"]	aqui se debe pasar la id o las ids de los dessarolladores del bot

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
## Estrutura de los comandos
### los comando deben de seguir esta estrura obligatoria para que funcione Tatsumiko

```
module.exports = {

	//name no se debe usar salto de espacios en el nombre " xd"
	//envia error si encuentra un comando con el mismo nombre
	name: "ping",

	description: "Responde pong",

	//el apodo del comando pueden ser varios pero que no se repitan 
	alise: ["p],

	//verifica si el usuario tiene permisos para ejecutar el comando de lo contrario le enviaria "message.chanel.send("no tienes suficientes permisos para usar este comando")"
	//tambien verifica si el bot tiene los permisos mencionados
	haspermission: ["SEND_MESSAGES"],

	arguments: {
		//si arguments es igual a 0 se vuelve flexible y no vereficara argumentsneed
		//se empiensa a contar en 0 a delante
		arguments: 2,
		
		//verfica el lugar de los argumentos  si lo que se necesita es  una mencion o un canal se puede pasar todas las que necesitas 
		//de momento solo existen "mention" y "channel"
		argumentsneed: [{ place: 0, type: "mention" }, { place: 1, type: "channel" }]
	},

	//true si solo los desarrolladores pueden usar este comandos
	owner_only: true,

	// client regresa el client de discord pasado al principio
	//message regresa el message
	//args son todos los argumentos pasados
	//map es un objecto map con todos los comandos
	run: (client, message, args,map) => {

		message.channel.send("Pong")
	}
}
```

## Contactame
### me puedes contactar por
- [Servidor de discord](https://discord.gg/5VdmymWGFJ)
- [Servidor de discord](https://discord.gg/5VdmymWGFJ)