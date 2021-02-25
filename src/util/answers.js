const asnswers = (asnswers) => {


	return {
		solodessarollador: asnswers.solodessarollador || `Solo los desarrolladores pueden usar este comando`,
		faltadepermisosBot: asnswers.faltadepermisos || `Me faltan permisos para ejecutar este comando`,
		faltadepermisosUsuario: asnswers.faltadepermisosUsuario || `No tienes suficiente permisos para usar este comando`
	}
}

module.exports = asnswers