const util = require("../util/util")

/** verifica si es un desarrollador del bot para usar el comando
 * @param  {Function} message necesita el objecto message de discord.js
 * @param  {Array} owners array de las id de los desarrollador
 */
const isowver = (message, owners) => {
	const id = message.author.id

	let find = owners.find(e => {
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
/**verifica los argumentos
 */
const checkargs = (message, cmd, args) => {
	if (args.length === cmd.arguments.number_arguments) {

	} else {
		util.enviarmensaje(message, "faltan argumentos")
	}
}

const checkperms = (message, cmd) => {
	let booleam = true
	let i = 0
	while (i <= cmd.haspermission.length - 1) {
		if (!message.member.hasPermission(cmd.haspermission[i])) {
			booleam = false
		}
	}

	return booleam
}

const existcmd = (map, command) => {


	let comando = map.get(command)
	if (comando) {
		return comando
	} else {
		map.forEach(cmd => {



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
const botpermisos = (client, command, message) => {
	let permisosfaltante = []

	command.haspermission.forEach((item) => {

		if (!message.guild.member(client.user).hasPermission(item)) {
			permisosfaltante.push(item)
		}
	});

	if (permisosfaltante) {
		util.enviarmensaje(message, `me faltan permisos permisos  ${(permisosfaltante.toString()).replace(/,/g, " ")}`)
		return false
	}
	else {
		return true
	}



}
const manejador = (map, command, message, client, args, owners) => {

	const cmd = existcmd(map, command)

	if (cmd) {
		if (cmd.owner_only) {


			if (isowver(message, owners)) {

				cmd.run(client, message, args, map)

			}
			else {
				util.enviarmensaje(message, "solo los desarrolladores pueden usar este comando")
			}
		}
		else {
			if (checkperms(message, cmd)) {
				if (botpermisos(client, command, message)) {
					if (checkargs(message, command, args)) {

					} else {

					}
				}
			} else {
				util.enviarmensaje(message, "No tienes suficiente permisos para usar este comando")
			}
		}
	}
}


module.exports = manejador