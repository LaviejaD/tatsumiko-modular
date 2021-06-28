const path = require("path")
const fs = require("fs");
const propiedades = require("../util/propiedadescomando.js")
const cooldown = require("../util/cooldown")
const answers = require("../util/answers");
const enviarmensaje = require("../util/enviarmensaje.js");

class Tatsumiko {
	/**  classs Tatsumiko 	  
	 * @constructor
	 * @param  {string} dirname se necesita pasar el __dirname del archivo  principal
	 * @param  {string} dir	nombre de la carpeta donde los comando estan ubicados
	 * @param  {Array<string>} ownersid array de las id de los desarrolladores del bot
	 */
	constructor(dirname, dir, ownersid) {

		/**
		 * Ids de los dessaroladores
		 */
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

		this.cooldownset = new Set()

		this.answersxd = answers()

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
		console.log("------------------------------");
		files.forEach(file => {

			if (file.endsWith(".js")) {


				let Filecomand = require(path.join(this.dir, file))
				let filecomand = new Filecomand()
				//console.log(Filecomand.name);


				if (propiedades(filecomand, this.dir, file)) {


					if (this.map.get(filecomand.name) === undefined) {
						this.map.set(filecomand.name, filecomand);
						console.log(`Comando "${filecomand.name}" cargado correctamente`);
					} else {
						
						let error = new Error(`ya existe un comando con el mismo nombre en: ${path.join(this.dir, file)}`)
						
						throw error
					}
				}


			}
			
		})
		console.log("------------------------------");
	}
	/**
	 * @param  {Object} req aqui estas todos los string  XD
	 */
	answers(req) {
		this.answersxd = answers(req)

	}

	/**
	 * @param  {Function} client se necesita  el client de discord 
	 * @param  {Object} message se necesita pasar discord.message
	 * @param {string}message.content
	 * @param  {string} prefix el prefijo de los comandos
	 */
	commands(client, message, prefix) {

		if (message.author.bot) { return }

		else {
			if (message.content.startsWith(prefix)) {
				/**aasdasd
				 * @param {Array<string>} args
				 */
				let args = message.content.slice(prefix.length).trim().split(/ +/g)
				let command = args.shift().toLowerCase()

				if (!this.cooldownset.has(`id:${message.author.id},${command}`)) {
					let Manejador = require("./manejador.js")
					let comando = new Manejador(this.map, command, message, client, args, this.ownersid, this.answersxd).comando
					if(typeof comando.cooldown != "undefined"){
						cooldown(this.cooldownset, `id:${message.author.id},${command}`, comando.cooldown)
					}
					

				} else {
					enviarmensaje(message, this.answersxd.cooldown)
				}



			}
		}
	}
}

module.exports = Tatsumiko