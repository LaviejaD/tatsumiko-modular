module.exports = (cmd, args, message) => {

	const  enviarmensaje  = require("../util/enviarmensaje")

	let valit = true	
	

	for (let index = 0; index < cmd.arguments.argumentsneed.length; index++) {
		
		const element = cmd.arguments.argumentsneed[index];
		
		

		if (element.type === "mention") {
			let mention = args[element.place].match(/<@!?(.*[0-9])>/)
			
			
			if (mention = null || !message.mentions.has(mention[1])) {
				console.log(message.mentions.has(mention[1]));
				enviarmensaje(message, "Necesito que menciones a alguien")
				valit = false
				break
				
			}

		}

		if (element.type === "channel") {
			
			let channel = args[element.place].match(/<#!?(.*)>/)
			
			if (channel = null || !message.mentions.channels.has(channel[1])) {

						
				enviarmensaje(message, "Necesito que menciones un canal de texto")
				valit = false
			break			
			}
		}
		
	}

		
		return valit

	}