/**
 * @param  {Object} asnswers objecto con todas las respuestas
 *  @param {string} asnswers.solodessarollador devuelve una respuesta cuando intentan usar un comando que solo los desarrolladores pueden usar
 *  @param {string} asnswers.faltadepermisosBot una res puesta si el bot no tiene suficiente permisos para ejecutar un comando
 *  @param {string} asnswers.faltadepermisosUsuario si el usuario no tiene suficiente permisos para ejecutar el bot
 */
const asnswers = (asnswers) => {
	
	if(asnswers ==undefined){
		asnswers = {}
	}
	if (typeof asnswers.desarrolladores == "undefined") {
		asnswers.desarrolladores = `Solo los desarrolladores pueden usar este comando`
	}
	if (typeof asnswers.faltadepermisosBot=="undefined") {
		asnswers.faltadepermisosBot =  `Me faltan permisos para ejecutar este comando`
	}
	if (typeof asnswers.faltadepermisosUsuario =="undefined") {
		asnswers.faltadepermisosUsuario = "Te faltan permisos para usar el comando"
	}
	//console.log(asnswers);
	return asnswers //{
		//desarrolladores: asnswers.desarrolladores,
		//faltadepermisosBot: asnswers.faltadepermisosBot,
		//faltadepermisosUsuario: asnswers.faltadepermisosUsuario
	//}
}

module.exports = asnswers