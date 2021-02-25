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
	let argsneedcheck = require("./argsneedcheck")

	if (cmd.arguments.arguments === 0) {
		return true
	}
	else {
		if (cmd.arguments.arguments === args.length) {
			console.log(" XD");
			if (argsneedcheck(cmd, args, message)) {
				return true
			} else {
				return false
			}
		}
		if (cmd.arguments.arguments > args.length) {
			enviarmensaje(message, "no se pudo ejecutar el comando por que me  faltan de argumentos")
			return false
		}
		if (cmd.arguments.arguments <= args.length) {
			enviarmensaje(message, "enviaste mas argumentos de lo necesario")
			return false
		}
	}

}

const checkperms = (message, cmd) => {
	let check = true

	for (let index = 0; index < cmd.haspermission.length; index++) {
		if (!message.member.hasPermission(cmd.haspermission[index])) {
			check = false
			break
		}

	}

	return check
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
	let check = true


	for (let index = 0; index < command.haspermission.length; index++) {

		if (!message.guild.member(client.user).hasPermission(command.haspermission[index])) {
			check = false
			break
		}

	}

	if (!check) {
		enviarmensaje(message, `me faltan permisos permisos  para ejecutar este comando`)
		return false
	}
	else {
		return true
	}



}
const manejador = async (map, command, message, client, args, owners) => {

	const cmd = existcmd(map, command)

	if (cmd) {
		if (cmd.owner_only) {


			if (isowver(message, owners)) {

				return cmd.run(client, message, args, map)

			}
			else {
				enviarmensaje(message, "solo los desarrolladores pueden usar este comando")
			}
		}
		else {
			if (checkperms(message, cmd)) {

				if (botpermisos(client, cmd, message)) {


					if (checkargs(message, cmd, args)) {
						await cmd.run(client, message, args, map)
					}

				}
			}
			else {
				enviarmensaje(message, "No tienes suficiente permisos para usar este comando")
			}
		}
	}
}

