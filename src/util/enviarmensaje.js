
/**
 * @param  {Object} message
 * @param  {string} texto
 */
const enviarmensaje = (message, texto) => {
	message.channel.send(texto)
}


module.exports =  enviarmensaje
