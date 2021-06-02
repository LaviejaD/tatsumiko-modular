const enviarmensaje = require("../util/enviarmensaje")


class Tatsumikoclass {
	/**
	 * Constructor para crear comandos modulares 
	 * @constructor
	 * @param  {string} name El nombre del comando no puede tener Espacios en el nombre puede que de error el comando
	 
	 * @param  {Array<string>} alise 
	 * @param  {Array<string>  } haspermission verifica si el bot y el usuario tienen los permisos necesarios  [ https://discord.com/developers/docs/topics/permissions ]
	 * @param {Object[]} argument verifica los argumentos 
	 * @param {number} argument.place se empieza a contar de 0 a 1 para verificar si en lugar esta lo deseado 
	 * @param {string}argument.type "channel", "role" , "mention" 
	 * @param {string}argument.response envia una respuesta si no se en cuentra los argumentos deseados
	 * @param {string} argumenterror envia una respuesta si los args no existen
	 * @param  {boolean} owneronly si solo los desarrolladores pueden usar el comando por defecto es false
	 * @param {number}cooldown  milisegundos de espera para usar el comando nueva mente
	 */

	constructor(name, alise, haspermission, argument, argumenterror, owneronly,cooldown) {


		/**
		 * @param  {string} name El nombre del comando
		 */
		this.name = name

		/**
		 * @param  {Array<string>} alise
		 */
		this.alise = alise

		/**
		 * @param  {Array<string>  } haspermission verifica si el bot y el usuario tienen los permisos necesarios  [ https://discord.com/developers/docs/topics/permissions ]
		 */
		this.haspermission = haspermission || []


		/**
		 * @param {Object[]} argument verifica los argumentos 
		 * @param {number} argument.place se empieza a contar de 0 a 1 para verificar si en lugar esta lo deseado 
		 * @param {string}argument.type "channel", "role" , "mention , string" 
		   * @param {string}argument.response envia una respuesta si no se en cuentra los argumentos deseados
		*/

		this.argument = argument || []


		/**
		 * @param {string|boolean} argumenterror envia una respuesta si los args no existe
		*/
		this.argumenterror = argumenterror || false

		/**
		 * @param {boolean} oweneronly si solo los desarrolladores pueden usar el comando
		*/
		this.owneronly = owneronly || false
		/**
		 * @param {number}cooldown  milisegundos de espera para usar el comando nueva mente
		*/
		this.cooldown = cooldown || 1000
		
		if (this.cooldown<1000) {
			this.cooldown = 1000
			
		}

	}
	//[{ place: 0, type: "mention" }, { place: 1, type: "channel" }, { place: 1, type: "role" }]
	/**
	 * @param {string[]} args  los argumentos a verificar" 
	 * @param  {} message a
	 * @returns {boolean} devuelve True si todos los argumentos fueron vereficados correctamente 
	 */
	checkargs(args, message) {
		let valit = true

		if (this.argument.length != 0) {

			if (args.length > 0) {

				for (let index = 0; index < this.argument.length; index++) {

					const element = this.argument[index];

					if (typeof element.place === "number") {

						if (typeof element.type === "string") {

							if (typeof element.response === "string") {

								if (element.response.length !== 0) {

									switch (element.type) {
										case"string":
											let txt = args[element.place]
											if (txt.length=== 0) {
												enviarmensaje(message,element.response)
												valit = false
												break
											}
										break
										case "mention":
											let mention = args[element.place].match(/<@!?(.*[0-9])>/)
											


											if (mention == null || !message.mentions.has(mention[1])) {


												enviarmensaje(message, element.response)
												valit = false
												break

											}

											break;
										case "channel":

											let channel = args[element.place].match(/<#!?(.*)>/)

											if (channel == null || !message.mentions.channels.has(channel[1])) {

												enviarmensaje(message, element.response)
												valit = false
											}
											break;
										case "role":
											let role = args[element.place].match(/<@&?(.*[0-9])>/)
											

											if (role == null || !message.mentions.roles.has(role[1])) {

												enviarmensaje(message, element.response)
												valit = false
												break

											}
											break;

										default:
											const error = new Error(`En el comando: ${this.name}, type solo puede ser "channel","role","mention","string" ,No existe como opción: ${element.type}`)

											
											throw error

									}
								} else {
									const error = new Error(`En ${element.name}, "response" no debe esta vacio`)
									throw error
								}
							}
							else {
								const error = new Error(`en el index:${index}, type  debe ser de tipo: string`)
								throw error
							}


						}
						else {
							const error = new Error(`en el index:${index}, type  debe ser de tipo: string`)
							throw error
						}

					}
					else {
						const error = new Error(`en el index:${index}, place debe ser de tipo number`)
						throw error
					}
					return valit
				}
			} else {
				enviarmensaje(message, this.argumenterror)
				console.log("error");
			}

		}
		else {
			const error = new Error(`No se encontraron argumentos para "argument"`)
			throw error
		}

	}



}

module.exports = Tatsumikoclass