
const enviarmensaje = require("../util/enviarmensaje.js")

class Manejador {
	/** Maneja lo que Tatsumiko no puede
	 * @constructor
	 * @param  {Map} map map con todos los comandos
	 * @param  {String} command nombre del comando a utilizar 
	 * @param  {Discord.message} message  el objecto message de discord
	 * @param  {} client	el cliente de discord
	 * @param  {Array<string>} args	los argumentos del bot
	 * @param  {Array<string>} owners	array con las id de los desarrolladores del bot
	 * @param  {} answers
	 */
	constructor(map, command, message, client, args, owners, answers) {
		this.map = map
		this.command = command
		this.message = message
		this.client = client
		this.args = args
		this.owners = owners
		this.answers = answers 

		this.comando = this.existcmd()

		if (this.comando) {
			if (this.comando.owneronly) {
				this.star()
			} else {
				this.star()
			}
		}
	}
	Answers(){
		
	}
	existcmd() {
		let comando = this.map.get(command)
		if (comando) {
			return comando
		}
		else {
			this.map.forEach(cmd => {
				for (let index = 0; index < cmd.alise.length; index++) {

					let element = cmd.alise[index];

					if (element === command) {
						comando = cmd
					}

				}
			}
			)
		}

		return comando
	}
	isowner() {
		const id = this.message.author.id

		let find = this.owners.find(e => {
			if (e = id) {
				return e
			}

		})

		if (find === id) {
			return true
		} else {
			return false
		}
	}
	checkperms() {
		let check = true

	for (let index = 0; index < this.comando.haspermission.length; index++) {
		if (!this.message.member.hasPermission(this.comando.haspermission[index])) {
			check = false
			break
		}

	}

	return check

	}
	botpermisos(){
		let check = true
		
		
		for (let index = 0; index < this.comando.haspermission.length; index++) {
	
			if (!this.message.guild.member(client.user).hasPermission(this.comando.haspermission[index])) {
				check = false
				break
			}
	
		}
	
		if (!check) {
			enviarmensaje(message, this.answers.faltadepermisosBot)
			return false
		}
		else {
			return true
	
 }
	 }
	star() {
		if (this.checkperms(message, cmd)) {

			if (this.botpermisos(client, cmd, message)) {


				if (checkargs(message, cmd, args)) {
					await cmd.run(client, message, args, map)
				}

			}
		}
		else {
			enviarmensaje(message, this.answers.faltadepermisosUsuario)
		}
		
		
	}
}

module.exports = Manejador