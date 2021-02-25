const path = require("path")
const fs = require("fs");
const propiedades = require("../util/propiedades.js")

class Tatsumiko {
	/**  classs Tatsumiko 	  
	 * @constructor
	 * @param  {string} dirname se necesita pasar el __dirname del archivo  principal
	 * @param  {string} dir	nombre de la carpeta donde los comando estan ubicados
	 * @param  {Array<string>} ownersid array de las id de los desarrolladores del bot
	 */
	constructor(dirname, dir, ownersid) {
		

		this.ownersid = ownersid;
		/**
		 * carpeta de los comandos
		 */
		this.dir = path.join(dirname, dir);
		/**
		 * Map constructor
		 */
		this.map = new Map();
		this.check_dir();
	}
	/** verifica la ubicacion de la carpeta de los comandos regresa error si la carpeta no se encuentra o no existe
	 */
	check_dir() {

		
		if (fs.existsSync(this.dir)) {
			this.mapcmd()
		} else {
			let error = new Error(`No se pudo encontrar el directorio: ${this.dir}`)

			throw error
		}

	}
	/** guarda los comandos en un map
	 */
	mapcmd() {
		
		
		let files = fs.readdirSync(this.dir)


		files.forEach(f => {


			if (f.endsWith(".js")) {

				let fc = require(path.join(this.dir, f))


				if (propiedades(fc)) {
					

					if (this.map.get(fc.name)===undefined) {
						this.map.set(fc.name, fc);
					} else {
						let error = new Error(`ya existe un comando con el mismo nombre en: ${path.join(this.dir, f)}`)
						throw error
					}
				}

			}
		})
	}
	/**
	 * @param  {Function} client se necesita  el client de discord 
	 * @param  {Function} message se necesita pasar discord.message
	 * @param  {string} prefix el prefijo de los comandos
	 */
	commands(client, message, prefix) {

		if (message.author.bot) { return }
		else {
			if (message.content.startsWith(prefix)) {
				let args = message.content.slice(prefix.length).trim().split(/ +/g)
				let command = args.shift().toLowerCase()

				const manejador = require("./manejador.js")

				manejador(this.map, command, message, client, args, this.ownersid)

			}
		}
	}
}

module.exports = Tatsumiko